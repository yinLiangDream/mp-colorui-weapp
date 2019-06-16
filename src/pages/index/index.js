import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { ClCard, ClText, ClIcon, ClLayout, ClFlex } from 'mp-colorui'
import menu from '../../constant/menu'

import './index.scss'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const icons = [
      'emoji',
      'cascades',
      'we',
      'form',
      'apps',
      'taxi'
    ]
    const cards = menu.map((item, index) => (
      <View key={item.key} onClick={() => {
        Taro.navigateTo({
          url: `/pages/${item.key}/index`
        })
      }}
      >
        <ClCard>
          <ClFlex justify='between' align='center'>
            <ClFlex align='center'>
              <ClIcon iconName={icons[index]} color='grey' />
              <ClLayout padding='small' paddingDirection='left'>
                <ClText size='large'>{item.name}</ClText>
                <ClText size='small' textColor='gray'>{item.description}</ClText>
              </ClLayout>
            </ClFlex>
            <ClIcon iconName='roundrightfill' color='blue' />
          </ClFlex>
        </ClCard>
      </View>
    ))
    return (
      <View className='index'>
        {cards}
      </View>
    )
  }
}
