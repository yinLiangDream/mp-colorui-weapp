import Taro from '@tarojs/taro'
import { ClCard, ClCheckbox, ClLayout, ClTitleBar } from 'mp-colorui'

const checkboxGroup = [
  {
    checked: false,
    key: '凯尔',
    value: 'ker'
  },
  {
    checked: true,
    key: '莫甘娜',
    value: 'mgn'
  }
]

export default function Checkbox() {
  return (
    <ClLayout>
      <ClTitleBar title='类型' textColor='blue' type='sub-title' subTitle='type' subTitleColor='shadow' />
      <ClCard>
        <ClCheckbox type='normal' checkboxGroup={checkboxGroup} />
      </ClCard>
      <ClCard>
        <ClCheckbox title='选一个' type='form' checkboxGroup={checkboxGroup} />
      </ClCard>

      <ClTitleBar title='方向' textColor='blue' type='sub-title' subTitle='direction' subTitleColor='shadow' />
      <ClCard>
        <ClCheckbox type='normal' checkboxGroup={checkboxGroup} direction='horizontal' />
      </ClCard>
      <ClCard>
        <ClCheckbox title='选一个' type='form' checkboxGroup={checkboxGroup} direction='horizontal' />
      </ClCard>

      <ClTitleBar title='颜色' textColor='blue' type='sub-title' subTitle='color' subTitleColor='shadow' />
      <ClCard>
        <ClCheckbox type='normal' checkboxGroup={checkboxGroup} color='red' direction='horizontal' />
      </ClCard>
      <ClCard>
        <ClCheckbox title='选一个' type='form' checkboxGroup={checkboxGroup} color='yellow' direction='horizontal' />
      </ClCard>

      <ClTitleBar title='形状' textColor='blue' type='sub-title' subTitle='shape' subTitleColor='shadow' />
      <ClCard>
        <ClCheckbox shape='normal' type='normal' checkboxGroup={checkboxGroup} color='red' direction='horizontal' />
      </ClCard>
      <ClCard>
        <ClCheckbox shape='round' title='选一个' type='form' checkboxGroup={checkboxGroup} color='yellow' direction='horizontal' />
      </ClCard>
    </ClLayout>
  )
}

Checkbox.config = {
  navigationBarTitleText: 'Checkbox 多选按钮'
}
