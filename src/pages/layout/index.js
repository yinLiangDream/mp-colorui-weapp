import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { ClLayout, ClTitleBar } from 'mp-colorui'
import MenuNavigate from '../../components/menuNavigate'
import { layoutList } from '../../constant/menu'

export default function Layout() {
  return (
    <View>
      <ClTitleBar title='布局' type='border-title' textColor='black' borderColor='blue' />
      <ClLayout padding='normal' paddingDirection='around'>
        <MenuNavigate list={layoutList} />
      </ClLayout>
    </View>
  )
}

Layout.config = {
  navigationBarTitleText: '布局'
}
