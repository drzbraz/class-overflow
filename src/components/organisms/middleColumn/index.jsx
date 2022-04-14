import * as Styles from './styles'
import DogImg from './../../../../public/assets/dog.jpg'
import Image from 'next/image'
export default function MiddleColumn() {
  return (
    <Styles.Container>
      <Styles.FeedPost>
        <Styles.User>
          <Styles.Avatar>
            <p>D</p>
          </Styles.Avatar>
          Daniel Braz
        </Styles.User>
        <Styles.Content>Olá esse é o meu primeiro post no ClassOverFlow.</Styles.Content>
        <Styles.Media>
          <Image src={DogImg} alt="Dog Image" width="800" height="500" />
        </Styles.Media>
      </Styles.FeedPost>
    </Styles.Container>
  )
}
