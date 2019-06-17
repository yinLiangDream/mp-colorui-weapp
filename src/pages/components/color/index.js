import Taro from '@tarojs/taro'
import { Block, View } from '@tarojs/components'
import { ClCard, ClFlex, ClText, ClTitleBar } from 'mp-colorui'

import { toMidLine } from '../../../util'

import colors from '../../../constant/color'

const dealLight = (color) => toMidLine(color).split('-').reverse().join('-');

export default class Color extends Taro.Component {
  renderCard (item) {
    return (
      <ClCard bgColor={item.title.includes('Light') ? dealLight(item.title) : item.title}>
        <ClFlex justify='around'>
          <ClText>{item.title}</ClText>
          <ClText special='upper'>{item.color}</ClText>
        </ClFlex>
      </ClCard>
    )
  }

  render () {
    const normalColor = colors.normalColor.map(
      item =>
        <Block key={item.title}>
          {this.renderCard(item)}
        </Block>
    )
    const lightColor = colors.lightColor.map(
      item =>
        <Block key={item.title}>
          {this.renderCard(item)}
        </Block>
    )
    const gradualColor = colors.gradualColor.map(
      item =>
        <Block key={item.title}>
          {this.renderCard(item)}
        </Block>
    )
    return (
      <View>
        <ClTitleBar title='标准色' type='border-title' />
        {normalColor}
        <ClTitleBar title='浅色' type='border-title' />
        {lightColor}
        <ClTitleBar title='渐变色' type='border-title' />
        {gradualColor}
      </View>
    )
  }

}

Color.config = {
  navigationBarTitleText: 'Color 颜色'
}
