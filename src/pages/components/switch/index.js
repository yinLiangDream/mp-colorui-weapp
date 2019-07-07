import Taro from '@tarojs/taro'
import { ClCard, ClLayout, ClSwitch, ClTitleBar } from 'mp-colorui'

export default function Switch() {
  return (
    <ClLayout>
      <ClTitleBar title='类型' textColor='blue' type='icon' subTitle='type' subTitleColor='shadow' />
      <ClCard>
        <ClSwitch type='normal' />
      </ClCard>
      <ClCard>
        <ClSwitch type='form' title={'~\(≧▽≦)/~啦啦啦'} />
      </ClCard>

      <ClTitleBar title='形状' textColor='blue' type='icon' subTitle='shape' subTitleColor='shadow' />
      <ClCard>
        <ClSwitch type='form' title={'~\(≧▽≦)/~啦啦啦'} shape='normal' />
      </ClCard>
      <ClCard>
        <ClSwitch type='form' title={'~\(≧▽≦)/~啦啦啦'} shape='radius' />
      </ClCard>

      <ClTitleBar title='颜色' textColor='blue' type='icon' subTitle='color' subTitleColor='shadow' />
      <ClCard>
        <ClSwitch type='form' title={'~\(≧▽≦)/~啦啦啦'} shape='normal' color='cyan' />
      </ClCard>
      <ClCard>
        <ClSwitch type='form' title={'~\(≧▽≦)/~啦啦啦'} shape='radius' color='red' />
      </ClCard>
    </ClLayout>
  )
}

Switch.config = {
  navigationBarTitleText: 'Switch 开关'
}
