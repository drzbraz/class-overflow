import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:3001',
  headers: {
    'Authorization': `eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY1MjY1NjI3NywiaWF0IjoxNjUyNjU2Mjc3fQ.N60laSK7xhYTagxKFMBOf7tyMPFzPj8FXxJymHjRR0A`
  }
})

export const getPosts = async () => {
  const Posts = [
    {
      id: 1,
      likes: '20',
      comments: 5,
      title: 'Olá esse é o meu primeiro post no ClassOverFlow.',
      topics: ['Java', 'JavaScript', 'CSS', 'C++']
    },
    {
      id: 2,
      likes: 20,
      comments: 5,
      title: 'Olá esse é o meu primeiro post no ClassOverFlow.',
      topics: ['Java', 'JavaScript', 'CSS', 'C++']
    },
    {
      id: 3,
      likes: 20,
      comments: 5,
      title: 'Olá esse é o meu primeiro post no ClassOverFlow.',
      topics: ['Java', 'JavaScript', 'CSS', 'C++']
    },
    {
      id: 4,
      likes: 20,
      comments: 5,
      title: 'Olá esse é o meu primeiro post no ClassOverFlow.',
      topics: ['Java', 'JavaScript', 'CSS', 'C++']
    },
    {
      id: 5,
      likes: 20,
      comments: 5,
      title: 'Olá esse é o meu primeiro post no ClassOverFlow.',
      topics: ['Java', 'JavaScript', 'CSS', 'C++']
    }
  ]

  //   return await api.get('/api/v1/posts')
  return Posts
}

export const getPostsByID = async (postId) => {
  const Post = {
    id: 1,
    likes: '20',
    comments: 5,
    title: 'Olá esse é o meu primeiro post no ClassOverFlow.',
    text: 'Meu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlowMeu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlowMeu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlowMeu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlow',
    topics: ['Java', 'JavaScript', 'CSS', 'C++']
  }
  //   return await api.get(`/api/v1/posts/${postId}`)
  return Post
}

export const sendLike = async () => {
  const Post = {
    id: 1,
    likes: '20',
    comments: 5,
    title: 'Olá esse é o meu primeiro post no ClassOverFlow.',
    text: 'Meu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlowMeu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlowMeu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlowMeu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlow',
    topics: ['Java', 'JavaScript', 'CSS', 'C++']
  }
  //   return await api.get('/api/v1/posts')
  return Post
}
