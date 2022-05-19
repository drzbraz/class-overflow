import * as Styles from './styles'

import { Input } from '@mui/material'
import { Button } from '@mui/material'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import TextField from '@mui/material/TextField'
import { useState } from 'react'
import { SendAndArchiveSharp } from '@mui/icons-material'

export default function Post({ post, postID, sendComment, sendLike }) {
  const [content, setContent] = useState('')

  return (
    <Styles.Container>
      {post && (
        <>
          <Styles.Content>
            <Styles.Post>
              <Styles.LeftColumn>
                <ArrowDropUpIcon
                  style={{ width: '100%', height: '70px', cursor: 'pointer' }}
                  onClick={() => sendLike()}
                />
                {post.like && post.like.length}
                <ArrowDropDownIcon
                  style={{ width: '100%', height: '70px', cursor: 'pointer' }}
                  onClick={() => sendLike()}
                />
              </Styles.LeftColumn>
              <Styles.RightColumn>
                <Styles.Title>{post.title}</Styles.Title>
                <Styles.Text>{post.content}</Styles.Text>
                <Styles.Badges>
                  {!!post.topic && post.topic.map((topic, index) => <Styles.Badge key={index}>{topic}</Styles.Badge>)}
                </Styles.Badges>
                <h3>{post.owner}</h3>
              </Styles.RightColumn>
            </Styles.Post>
            {post.comments &&
              post.comments.map((comment, index) => {
                return (
                  <Styles.Comments key={index}>
                    <h3>{comment.owner}:</h3>
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
              onClick={() => sendComment({ content, postID })}
            >
              Enviar
            </Button>
          </Styles.Content>
        </>
      )}
    </Styles.Container>
  )
}
