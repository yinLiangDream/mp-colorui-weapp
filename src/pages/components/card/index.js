import Taro from '@tarojs/taro'
import { ClCard, ClLayout, ClTitleBar } from 'mp-colorui'

export default function Card() {
  return (
    <ClLayout>
      <ClTitleBar title='类型' textColor='black' type='icon' subTitle='type'/>
      <ClCard>我是卡片形式</ClCard>
      <ClCard type='full'>我是铺满形式</ClCard>
      <ClCard bgColor='brown'>我可以设置背景色</ClCard>
    </ClLayout>
  )
}

Card.config = {
  navigationBarTitleText: 'Card 卡片'
}
