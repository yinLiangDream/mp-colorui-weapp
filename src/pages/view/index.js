import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { ClLayout, ClTitleBar } from 'mp-colorui'
import MenuNavigate from '../../components/menuNavigate'
import { viewList } from '../../constant/menu'

export default function ViewFunc() {
  return (
    <View>
      <ClTitleBar title='视图' type='border-title' textColor='blue' borderColor='blue' />
      <ClLayout padding='normal' paddingDirection='around'>
        <MenuNavigate list={viewList} />
      </ClLayout>
    </View>
  )
}

ViewFunc.config = {
  navigationBarTitleText: '视图'
}
