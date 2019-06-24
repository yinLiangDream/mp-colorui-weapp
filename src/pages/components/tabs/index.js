import Taro from '@tarojs/taro'
import { ClCard, ClLayout, ClTabs, ClTitleBar } from 'mp-colorui'

function gen (item, index) {
    return  {
      text: `标签 ${index + 1}`
    }
}

const defaultTabs = [...new Array(10)].map(gen)

const verbTabs = [...new Array(3)].map(gen)

const iconTabs = [
  {
    text: '标签 1',
    icon: 'emoji'
  }, {
    text: '标签 2',
    icon: 'addressbook'
  }, {
    text: '标签 3',
    icon: 'discoverfill'
  }
]

export default function Tabs() {
  return (
    <ClLayout>
      <ClTitleBar title='默认' textColor='blue' type='sub-title' subTitle='default' subTitleColor='shadow' />
      <ClCard>
        <ClTabs tabs={defaultTabs} />
      </ClCard>

      <ClTitleBar title='平分' textColor='blue' type='sub-title' subTitle='verb' subTitleColor='shadow' />
      <ClCard>
        <ClTabs tabs={verbTabs} type='verb' />
      </ClCard>

      <ClTitleBar title='居中' textColor='blue' type='sub-title' subTitle='center' subTitleColor='shadow' />
      <ClCard>
        <ClTabs tabs={verbTabs} type='center' />
      </ClCard>

      <ClTitleBar title='激活色&背景色' textColor='blue' type='sub-title' subTitle='activeColor&bgColor' subTitleColor='shadow' />
      <ClCard>
        <ClTabs tabs={verbTabs} type='center' activeColor='red' bgColor='black'  />
      </ClCard>

      <ClTitleBar title='带图标' textColor='blue' type='sub-title' subTitle='icon' subTitleColor='shadow' />
      <ClCard>
        <ClTabs tabs={iconTabs} type='center' />
      </ClCard>
    </ClLayout>
  )
}

Tabs.config = {
  navigationBarTitleText: 'Tabs 标签页'
}
