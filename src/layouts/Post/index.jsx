import * as Styles from './styles'
import Header from '../../components/organisms/header'
import MiddleColumn from '../../components/organisms/middleColumn/post'
import RightBar from '../../components/organisms/rightBar'
import LeftBar from '../../components/organisms/leftBar'
import { useEffect, useState } from 'react'
import { getPostsByID } from '../../infra/api'
export default function HomeLayout() {
  const [post, setPost] = useState({})
  useEffect(async () => {
    const post = await getPostsByID(window.location.pathname)
    setPost(post)
  }, [])
  return (
    <Styles.Container>
      <Header />
      <Styles.Content>
        <LeftBar />
        <MiddleColumn post={post} />
        <RightBar />
      </Styles.Content>
    </Styles.Container>
  )
}
