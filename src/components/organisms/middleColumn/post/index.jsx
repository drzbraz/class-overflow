import * as Styles from './styles'

import { Input } from '@mui/material'
import { Button } from '@mui/material'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'

export default function Post({ post }) {
  return (
    <Styles.Container>
      {post && (
        <>
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
          <Styles.Content>
            <Styles.Post>
              <Styles.LeftColumn>
                <ArrowDropUpIcon style={{ width: '100%', height: '70px', cursor: 'pointer' }} />
                {post.like && post.like.length}
                <ArrowDropDownIcon style={{ width: '100%', height: '70px', cursor: 'pointer' }} />
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
          </Styles.Content>
        </>
      )}
    </Styles.Container>
  )
}
