import * as Styles from './styles'
import DogImg from './../../../../public/assets/dog.jpg'
export default function MiddleColumn() {
  return (
    <Styles.Container>
      <Styles.FeedPost>
        <Styles.Content>Lorem Ipsum</Styles.Content>
        <img src={DogImg} alt="Dog" />
      </Styles.FeedPost>
    </Styles.Container>
  )
}
