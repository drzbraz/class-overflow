import * as Styles from './styles'
import Image from 'next/image'
import mock from '../../../atoms/mock/post.json'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import { Style } from '@mui/icons-material'
import { Input } from '@mui/material'
import { Button } from '@mui/material'
import TextField from '@mui/material/TextField'
import { TagsInput } from "react-tag-input-component";
import { useState } from 'react'

export default function Feed({ posts }) {
  const [selected, setSelected] = useState([]);
  return (
    <Styles.Container>
      <Styles.PostContent>
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
        <Styles.TagContent>
          <TagsInput
            value={selected}
            onChange={setSelected}
            name="Tags"
            placeHolder="Inclua Tags"
          /></Styles.TagContent>
      </Styles.PostContent>


      <Styles.Gap></Styles.Gap>
      <Styles.Content>
        {!!posts.length &&
          posts.map((post) => (
            <Styles.FeedPost key={post.id}>
              <Styles.LeftColumn>
                {post.likes} likes <br /> {post.comments} comments
              </Styles.LeftColumn>
              <Styles.RightColumn>
                <Styles.Title>
                  <a href={`/post/${post.id}`}>{post.title}</a>
                </Styles.Title>
                <Styles.Badges>
                  {post.topics.map((topic, index) => (
                    <Styles.Badge key={index}>{topic}</Styles.Badge>
                  ))}
                </Styles.Badges>
              </Styles.RightColumn>
            </Styles.FeedPost>
          ))}
      </Styles.Content>
    </Styles.Container>
  )
}
