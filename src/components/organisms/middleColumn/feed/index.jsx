import * as Styles from './styles'
import { Button } from '@mui/material'
import TextField from '@mui/material/TextField'
import { TagsInput } from 'react-tag-input-component'
import { useState } from 'react'
import Modal from 'react-modal'

export default function Feed({ posts, createPost }) {
  const [topic, setTopic] = useState([])
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [modalIsOpen, setIsOpen] = useState(false)

  function openModal() {
    setIsOpen(true)
  }
  const customStyles = {
    content: {
      top: '36%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'hsl(0deg 0% 18%)',
      borderRadius: '4px',
      width: '924px',
      height: '520px',
      padding: '24px',
      display: 'flex',
      color: 'var( --light-background)',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      'border': '1px solid hsl(210deg 4% 26%)'
    },
    overlay: {
      background: 'rgb(37 37 37 / 67%)'
    }
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false)
  }
  return (
    <Styles.Container>
      <Styles.PostContent>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          ariaHideApp={false}
          contentLabel="Example Modal"
        >
          <h2 style={{ textAlign: 'left', marginTop: '0px' }}>Faça uma pergunta</h2>
          <TextField
            style={{ backgroundColor: 'white', width: '100%', height: 'auto', marginTop: '8px' }}
            required
            id="outlined-title"
            label="Título"
            placeholder="Ex: Estou com problemas na questão 3"
            variant="filled"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <TextField
            style={{ backgroundColor: 'white', width: '100%', height: 'auto', marginTop: '24px' }}
            required
            id="outlined-content"
            label="Descrição"
            placeholder="Ex: A questão 3 tem uma linguagem de programação que não conheço bem..."
            variant="filled"
            multiline
            onChange={(e) => setContent(e.target.value)}
            value={content}
            minRows={7}
          />
          <Styles.TagContent>
            <TagsInput
              value={topic}
              style={{ backgroundColor: 'white', width: '100%' }}
              onChange={setTopic}
              name="Tags"
              placeHolder="Inclua Tags"
            />
          </Styles.TagContent>
          <Button
            variant="contained"
            style={{ marginTop: '24px', width: '100%' }}
            onClick={() => createPost({ title, content, topic })}
          >
            Publicar
          </Button>
        </Modal>
        <h1>Feed Questions</h1>
        <Button variant="contained" style={{ margin: '12px', height: '48px' }} onClick={openModal}>
          Fazer uma pergunta
        </Button>
      </Styles.PostContent>

      <Styles.Content>
        {!!posts &&
          posts.length &&
          posts.map((post) => (
            <Styles.FeedPost key={post._id}>
              <Styles.LeftColumn>
                {post.like.length} likes <br /> {post.comments.length} comments
              </Styles.LeftColumn>
              <Styles.RightColumn>
                <Styles.Title>
                  <a href={`/post/${post._id}`}>{post.title}</a>
                </Styles.Title>
                <Styles.Badges>
                  {post.topic.map((topic, index) => (
                    <Styles.Badge key={index}>{topic}</Styles.Badge>
                  ))}
                </Styles.Badges>
                <h3>{post.owner}</h3>
              </Styles.RightColumn>
            </Styles.FeedPost>
          ))}
      </Styles.Content>
    </Styles.Container>
  )
}
