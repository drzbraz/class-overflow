import * as Styles from './styles'
import Header from '../components/organisms/header'
import MiddleColumn from '../components/organisms/middleColumn'
import RightBar from '../components/organisms/rightBar'
import LeftBar from '../components/organisms/leftBar'
export default function HomeLayout() {
  return (
    <Styles.Container>
      <Header />
      <Styles.Content>
        <LeftBar />
        <MiddleColumn />
        <RightBar />
      </Styles.Content>
    </Styles.Container>
  )
}
