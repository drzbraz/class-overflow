import * as Styles from './styles'

import { Input } from '@mui/material'
import { Button } from '@mui/material'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import TextField from '@mui/material/TextField'
import { useState, useEffect } from 'react'
import { SendAndArchiveSharp } from '@mui/icons-material'
import jwt_decode from 'jwt-decode'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'

export default function Post({ post, sendComment, sendLike }) {
  const [content, setContent] = useState('')
  const [token, setToken] = useState('')
  const [comments, setComments] = useState([])
  const [shouldSendLike, setShouldSendLike] = useState(false)

  useEffect(() => {
    setToken(localStorage.getItem('token'))
  }, [])

  useEffect(() => {
    if (!post.comments) return
    setComments(post.comments)
  }, [post])

  function postNewComment(newComment) {
    const userInfo = jwt_decode(token)
    const comment = {
      newComment,
      ownerEmail: userInfo.email
    }

    setComments([...comments, comment])
    sendComment(newComment)
  }

  function postNewLike(newLike) {
    console.log(newLike.shouldSend)
    if (!newLike.shouldSend) return
    const userInfo = jwt_decode(token)
    const like = {
      ...newLike,
      owner: userInfo.email
    }

    const comment = comments.find((item) => item._id === newLike.commentId)
    comments.splice(comment)
    // console.log(comment)
    // comments.forEach((comment) => {
    //   console.log(comment._id === newLike.commentId)
    //   if (comment._id === newLike.commentId) {
    //     console.log(comment)
    //     comment.likes = []
    //   }
    // })

    newLike.action ? comment.likes.push({ isLiked: true, ownerEmail: like.email }) : comment.likes.splice(0, 1)

    comments.push(comment)

    // console.log(comment)
    // console.log(comments)
    // setComments([...comments, comment])

    setComments((oldState) => [...comments])
    console.log(comments[0].likes.length)
    setShouldSendLike(!shouldSendLike)
    sendLike(newLike)
  }

  return (
    <Styles.Container>
      {post && (
        <>
          <Styles.Content>
            <Styles.Post>
              <Styles.RightColumn>
                <Styles.Title>{post.title}</Styles.Title>
                <Styles.Text>{post.content}</Styles.Text>
                <Styles.Badges>
                  {!!post.topic && post.topic.map((topic, index) => <Styles.Badge key={index}>{topic}</Styles.Badge>)}
                </Styles.Badges>
                <h3>{post.owner}</h3>
              </Styles.RightColumn>
            </Styles.Post>
            {comments.map((comment, index) => {
              return (
                <Styles.Comments key={index}>
                  <Styles.LeftColumn>
                    <ArrowDropUpIcon
                      style={{
                        width: '100%',
                        height: '70px',
                        cursor: `${!shouldSendLike ? 'pointer' : 'not-allowed'}`
                      }}
                      onClick={() =>
                        postNewLike({
                          postId: post._id,
                          commentId: comment._id,
                          action: true,
                          token,
                          shouldSend: !shouldSendLike === true
                        })
                      }
                      disabled={true}
                    />
                    {comment.likes && comment.likes.length}
                    <ArrowDropDownIcon
                      style={{ width: '100%', height: '70px', cursor: `${shouldSendLike ? 'pointer' : 'not-allowed'}` }}
                      onClick={() =>
                        postNewLike({
                          postId: post._id,
                          commentId: comment._id,
                          action: false,
                          token,
                          shouldSend: shouldSendLike === true
                        })
                      }
                    />
                  </Styles.LeftColumn>
                  {/* <Styles.Like>
                      <p>{comment.likes ? comment.likes.length : 0}</p>
                      <ThumbUpIcon
                        style={{
                          cursor: 'pointer',
                          filter: `${
                            comment.likes.find((commentLiked) => commentLiked.isLiked === true)
                              ? 'brightness(0.5)'
                              : 'brightness(1)'
                          }`
                        }}
                        onClick={() => postNewLike({ postId: comment._id, token })}
                        cursor="pointer"
                        />
                      </Styles.Like> */}
                  <h3>{comment.ownerName}:</h3>
                  <p>{comment.content}</p>
                </Styles.Comments>
              )
            })}
            <TextField
              style={{ backgroundColor: 'white', width: '100%', height: 'auto', margin: '24px 0px' }}
              required
              id="outlined-content"
              label="Comentar"
              variant="filled"
              multiline
              onChange={(e) => setContent(e.target.value)}
              value={content}
              minRows={3}
            />
            <Button
              variant="contained"
              style={{ marginBottom: '48px', width: '20%' }}
              onClick={() => postNewComment({ comment: content, token: token })}
            >
              Enviar
            </Button>
          </Styles.Content>
        </>
      )}
    </Styles.Container>
  )
}
