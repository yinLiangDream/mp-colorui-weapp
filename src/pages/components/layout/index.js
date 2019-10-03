import Taro from '@tarojs/taro'
import { ClCard, ClLayout, ClTitleBar } from 'mp-colorui'
import { View } from '@tarojs/components'

export default function Layout () {
  return (
    <ClLayout>
      <ClTitleBar title='padding&margin' textColor='black' type='icon' subTitle='padding&margin'
        subTitleColor='shadow'
      />
      <ClCard>
        <ClLayout><View className='bg-blue' style={{ height: '100%', width: '100%' }}>我是无 padding&margin
          内容</View></ClLayout>
        <ClLayout padding='normal' paddingDirection='around'><View className='bg-cyan'
          style={{ height: '100%', width: '100%' }}
        >我是 padding
          内容</View></ClLayout>
        <ClLayout margin='normal' marginDirection='around'><View className='bg-red'
          style={{ height: '100%', width: '100%' }}
        >我是 margin 内容</View></ClLayout>
      </ClCard>

      <ClTitleBar title='浮动' textColor='black' type='icon' subTitle='float'/>
      <ClCard>
        <ClLayout float='left'>我是左浮动</ClLayout>
        <ClLayout float='right'>我是右浮动</ClLayout>
      </ClCard>
    </ClLayout>
  )
}

Layout.config = {
  navigationBarTitleText: 'Layout 基本布局'
}
