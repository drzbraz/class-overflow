import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:3001'
})

export const onAuthenticate = async () => {
  try {
    const response = await api.post('/api/v1/auth', { login: 'professor', password: 'professor' })
    return response.data.token.bearer
  } catch (error) {
    console.log(error)
  }
}
export const getPosts = async (token) => {
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
  console.log({ token })
  try {
    const response = await api.get('/api/v1/posts', {
      headers: {
        'Authorization': token
      }
    })
    return response.data
  } catch (error) {
    console.log(error)
  }

  // return Posts
}

export const getPostsByID = async (postParams) => {
  // const Post = {
  //   id: 1,
  //   like: ['1', '2'],
  //   liked: true,
  //   comments: [
  //     {
  //       id: 1,
  //       owner: 'Dbraz 1',
  //       content:
  //         'Meu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlowMeu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlowMeu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlowMeu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlow'
  //     },
  //     {
  //       id: 2,
  //       owner: 'Dbraz 2',
  //       content:
  //         'Meu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlowMeu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlowMeu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlowMeu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlow'
  //     },
  //     {
  //       id: 3,
  //       owner: 'Dbraz 3',
  //       content:
  //         'Meu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlowMeu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlowMeu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlowMeu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlow'
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
    // const postId = windowLocation.split('/')[2]
    const response = await api.get(`/api/v1/posts/${postParams.postID}`, {
      headers: {
        'Authorization': postParams.token
      }
    })
    return response.data
  } catch (error) {
    console.log(error)
  }
  // return Post
}

export const sendLike = async (token) => {
  const postId = window.location.pathname.split('/')[2]

  try {
    const response = await api.post(
      '/api/v1/likes',
      { postId },
      {
        headers: {
          'Authorization': token
        }
      }
    )
  } catch (error) {
    console.log(error)
  }
}

export const sendComment = async (comment) => {
  const postId = window.location.pathname.split('/')[2]

  const Post = {
    id: postId,
    comment: comment.content
  }
  try {
    const response = await api.post('/api/v1/comments', Post, {
      headers: {
        'Authorization': comment.token
      }
    })
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const createPost = async (postParams) => {
  // const Post = {
  //   'owner': 'Dbraz',
  //   'subject': 'POO',
  //   'title': 'Olá esse é o meu primeiro post no ClassOverFlow.',
  //   'content':
  //     'Meu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlowMeu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlowMeu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlowMeu primeiro post comentando no classOverFlow.Meu primeiro post comentando no classOverFlow',
  //   'topic': ['Java', 'JavaScript', 'CSS', 'C++']
  // }
  return await api.post('/api/v1/posts', postParams, {
    headers: {
      'Authorization': postParams.token
    }
  })
  // return Post
}
