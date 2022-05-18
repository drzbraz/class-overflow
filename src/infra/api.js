import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:3003',
  headers: {
    'Authorization': `eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY1MjY1NjI3NywiaWF0IjoxNjUyNjU2Mjc3fQ.N60laSK7xhYTagxKFMBOf7tyMPFzPj8FXxJymHjRR0A`
  }
})

export const getPosts = async () => {
  // const Posts = [
  //   {
  //     id: 1,
  //     likes: 20,
  //     comments: 5,
  //     owner: 'Dbraz',
  //     subject: 'POO',
  //     title: 'Olá esse é o meu primeiro post no ClassOverFlow.',
  //     topics: ['Java', 'JavaScript', 'CSS', 'C++']
  //   },
  //   {
  //     id: 2,
  //     likes: 20,
  //     comments: 5,
  //     owner: 'Dbraz',
  //     subject: 'POO',
  //     title: 'Olá esse é o meu primeiro post no ClassOverFlow.',
  //     topics: ['Java', 'JavaScript', 'CSS', 'C++']
  //   },
  //   {
  //     id: 3,
  //     likes: 20,
  //     comments: 5,
  //     owner: 'Dbraz',
  //     subject: 'POO',
  //     title: 'Olá esse é o meu primeiro post no ClassOverFlow.',
  //     topics: ['Java', 'JavaScript', 'CSS', 'C++']
  //   },
  //   {
  //     id: 4,
  //     likes: 20,
  //     comments: 5,
  //     owner: 'Dbraz',
  //     subject: 'POO',
  //     title: 'Olá esse é o meu primeiro post no ClassOverFlow.',
  //     topics: ['Java', 'JavaScript', 'CSS', 'C++']
  //   },
  //   {
  //     id: 5,
  //     likes: 20,
  //     comments: 5,
  //     owner: 'Dbraz',
  //     subject: 'POO',
  //     title: 'Olá esse é o meu primeiro post no ClassOverFlow.',
  //     topics: ['Java', 'JavaScript', 'CSS', 'C++']
  //   }
  // ]
  try {
    const response = await api.get('/api/v1/posts')
    return response.data
  } catch (error) {
    console.log(error)
  }

  // return Posts
}

export const getPostsByID = async (windowLocation) => {
  // const Post = {
  //   id: 1,
  //   likes: 20,
  //   liked: true,
  //   comments: [
  //     {
  //       id: 1,
  //       owner: '',
  //       content: ''
  //     },
  //     {
  //       id: 2,
  //       owner: '',
  //       content: ''
  //     }
  //   ],
  //   owner: 'Dbraz',
  //   subject: 'POO',
  //   title: 'Olá esse é o meu primeiro post no ClassOverFlow.',
  //   content:
  //     'Meu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlowMeu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlowMeu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlowMeu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlow',
  //   topics: ['Java', 'JavaScript', 'CSS', 'C++']
  // }
  try {
    const postId = windowLocation.split('/')[2]
    const response = await api.get(`/api/v1/posts/${postId}`)
    return response.data
  } catch (error) {
    console.log(error)
  }
  // return Post
}

export const sendLike = async () => {
  const Post = {
    id: 1,
    action: true || false
  }
  //   return await api.post('/api/v1/likes')
  return Post
}

export const sendComment = async () => {
  const Post = {
    id: 1,
    comment: 'asdsaiudhiuasdhiuasdhiuashdiu'
  }
  //   return await api.post('/api/v1/comment')
  return Post
}

export const createPost = async (postParams) => {
  console.log('here', postParams)
  const Post = {
    'owner': 'Dbraz',
    'subject': 'POO',
    'title': 'Olá esse é o meu primeiro post no ClassOverFlow.',
    'content':
      'Meu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlowMeu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlowMeu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlowMeu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlow',
    'topic': ['Java', 'JavaScript', 'CSS', 'C++']
  }
  return await api.post('/api/v1/posts')
  // return Post
}
