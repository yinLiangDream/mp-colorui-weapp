
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { ClLayout, ClTitleBar } from 'mp-colorui'
import MenuNavigate from '../../components/menuNavigate'
import { navigateList } from '../../constant/menu'

export default function Navigate() {
  return (
    <View>
      <ClTitleBar title='导航' type='border-title' textColor='blue' borderColor='blue' />
      <ClLayout padding='normal' paddingDirection='around'>
        <MenuNavigate list={navigateList} />
      </ClLayout>
    </View>
  )
}

Navigate.config = {
  navigationBarTitleText: '导航'
}
