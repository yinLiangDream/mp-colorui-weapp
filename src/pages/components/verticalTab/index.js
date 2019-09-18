import Taro from '@tarojs/taro'
import { ClVerticalTab, ClVerticalTabCell } from 'mp-colorui'
import { View } from '@tarojs/components'

export default function VerticalTab() {
  const tabs = [...Array(50)].map((key, index) => ({name: 'tab-' + index, id: 'id-' + index}))
  return (
    <ClVerticalTab tabs={tabs} height={1000}>
      <View>
        {tabs.map((item) => (
          <View id={item.id} key={item.name}>
            <ClVerticalTabCell>{item.name}</ClVerticalTabCell>
          </View>
        ))}
      </View>
    </ClVerticalTab>
  )
}

VerticalTab.config = {
  navigationBarTitleText: '垂直导航 VerticalTab'
}
