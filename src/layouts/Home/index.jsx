import * as Styles from './styles'
import Header from '../../components/organisms/header'
import MiddleColumn from '../../components/organisms/middleColumn/feed'
import RightBar from '../../components/organisms/rightBar'
import LeftBar from '../../components/organisms/leftBar'
import { useEffect, useState } from 'react'
const Topics = ['Java', 'JavaScript', 'CSS', 'C++']
import { getPosts } from '../../infra/api'
export default function HomeLayout() {
  const [posts, setPosts] = useState([])
  useEffect(async () => {
    const posts = await getPosts()
    setPosts(posts)
    console.log('test')
  }, [])
  return (
    <Styles.Container>
      <Header />
      <Styles.Content>
        <LeftBar />
        <MiddleColumn posts={posts} />
        <RightBar />
      </Styles.Content>
    </Styles.Container>
  )
}
