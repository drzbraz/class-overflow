import * as Styles from './styles'
import Image from 'next/image'
import mock from '../../../atoms/mock/post.json'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import { Style } from '@mui/icons-material'
import { Input } from '@mui/material'
import { Button } from '@mui/material'
import TextField from '@mui/material/TextField'

export default function Feed({ posts }) {
  return (
    <Styles.Container>
      <Styles.PublishPost>
        <Input
          color="primary"
          placeholder="Criar um novo post"
          type="text"
          style={{ color: '#d7dadc', width: '100%', height: '38px' }}
        />

        <Button variant="contained" style={{ marginLeft: '24px' }}>
          Publicar
        </Button>
      </Styles.PublishPost>
      <Styles.Gap></Styles.Gap>
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
