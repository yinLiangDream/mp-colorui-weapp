import Taro from '@tarojs/taro'
import { ClCard, ClLayout, ClProgress, ClTitleBar } from 'mp-colorui'

export default function Progress() {
  return (
    <ClLayout>
      <ClTitleBar title='形状' textColor='blue' type='sub-title' subTitle='shape' subTitleColor='shadow' />
      <ClCard>
        <ClProgress shape='normal' percent={10} />
      </ClCard>
      <ClCard>
        <ClProgress shape='radius' percent={20} />
      </ClCard>
      <ClCard>
        <ClProgress shape='round' percent={40} />
      </ClCard>


      <ClTitleBar title='背景色' textColor='blue' type='sub-title' subTitle='bgColor' subTitleColor='shadow' />
      <ClCard>
        <ClProgress shape='round' percent={20} bgColor='cyan' />
      </ClCard>
      <ClCard>
        <ClProgress shape='round' percent={40} bgColor='light-cyan' />
      </ClCard>
      <ClCard>
        <ClProgress shape='round' percent={80} bgColor='gradualBlue' />
      </ClCard>

      <ClTitleBar title='纹理' textColor='blue' type='sub-title' subTitle='stripe' subTitleColor='shadow' />
      <ClCard>
        <ClProgress shape='round' stripe percent={20} bgColor='cyan' />
      </ClCard>
      <ClCard>
        <ClProgress shape='round' stripe percent={40} bgColor='light-cyan' />
      </ClCard>

      <ClTitleBar title='动画' textColor='blue' type='sub-title' subTitle='animation' subTitleColor='shadow' />
      <ClCard>
        <ClProgress animation shape='round' stripe percent={20} bgColor='cyan' />
      </ClCard>
      <ClCard>
        <ClProgress animation shape='round' stripe percent={40} bgColor='light-cyan' />
      </ClCard>

      <ClTitleBar title='大小' textColor='blue' type='sub-title' subTitle='size' subTitleColor='shadow' />
      <ClCard>
        <ClProgress shape='round' size='xsmall' percent={20} bgColor='cyan' />
      </ClCard>
      <ClCard>
        <ClProgress shape='round' size='small' percent={40} bgColor='light-cyan' />
      </ClCard>
      <ClCard>
        <ClProgress shape='round' size='normal' percent={80} bgColor='gradualBlue' />
      </ClCard>
    </ClLayout>
  )
}

Progress.config = {
  navigationBarTitleText: 'Progress 进度条'
}
