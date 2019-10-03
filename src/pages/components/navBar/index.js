import Taro from '@tarojs/taro'
import { ClCard, ClLayout, ClNavBar, ClTitleBar } from 'mp-colorui'

const leftIcon = [{
  icon: 'emoji',
  color: 'black',
  text: '我是 emoji'
}]
const rightIcon = [{
  icon: 'emoji',
  color: 'blue'
}]

export default function NavBar() {
  return (
    <ClLayout>
      <ClTitleBar title='背景色' textColor='black' type='icon' subTitle='bgColor'/>
      <ClCard>
        <ClNavBar leftIcon={[]} bgColor='light-blue' title='我是标题' />
      </ClCard>

      <ClTitleBar title='图标' textColor='black' type='icon' subTitle='icon'/>
      <ClCard>
        <ClNavBar leftIcon={leftIcon} rightIcon={rightIcon} title='我是标题' />
      </ClCard>
    </ClLayout>
  )
}

NavBar.config = {
  navigationBarTitleText: 'NavBar 导航栏'
}
