import Taro from '@tarojs/taro'
import { ClCard, ClLayout, ClTitleBar } from 'mp-colorui'

export default class TitleBar extends Taro.Component {
  render () {
    return (
      <ClLayout>
        <ClTitleBar title='背景色&文字颜色' textColor='blue' type='sub-title' subTitle='bgColor&textColor' subTitleColor='shadow' />
        <ClCard>
          <ClTitleBar bgColor='green' title='标准背景色' textColor='white' borderColor='white' />
          <ClTitleBar bgColor='light-blue' title='浅色背景色' textColor='blue' borderColor='blue' />
          <ClTitleBar bgColor='gradualBlue' title='渐变背景色' textColor='white' borderColor='white' />
        </ClCard>

        <ClTitleBar title='类型' textColor='blue' type='sub-title' subTitle='type' subTitleColor='shadow' />
        <ClCard>
          <ClTitleBar title='突出线' type='border-title' />
          <ClTitleBar title='子标题' subTitle='childTitle' type='sub-title' />
          <ClTitleBar type='icon' title='图标' icon='emoji' />
        </ClCard>

      </ClLayout>
    )
  }
}
