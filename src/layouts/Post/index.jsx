import * as Styles from './styles'
import Header from '../../components/organisms/header'
import MiddleColumn from '../../components/organisms/middleColumn/post'
import RightBar from '../../components/organisms/rightBar'
import LeftBar from '../../components/organisms/leftBar'
import { useEffect, useState } from 'react'
import { getPostsByID, sendComment, sendLike } from '../../infra/api'
export default function PostLayout() {
  const [post, setPost] = useState({})
  const [postID, setPostId] = useState('')
  const [token, setToken] = useState('')

  useEffect(async () => {
    setToken(localStorage.getItem('token'))
    const id = window.location.pathname.split('/')[2]
    setPostId(id)
    const post = await getPostsByID(postID)
    setPost(post)
  }, [post])
  return (
    <Styles.Container>
      <Header />
      <Styles.Content>
        <LeftBar />
        <MiddleColumn post={post} postID={postID} sendComment={sendComment} sendLike={sendLike} token={token} />
        <RightBar />
      </Styles.Content>
    </Styles.Container>
  )
}
