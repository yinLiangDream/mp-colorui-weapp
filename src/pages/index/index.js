import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { ClCard, ClText, ClIcon, ClLayout, ClFlex, ClTabBar, ClTimeline, ClAnimation } from 'mp-colorui'
import { updateList } from '../../model/index'
import menu from '../../constant/menu'

import './index.scss'

export default class Index extends Component {

  config = {
    navigationBarTitleText: 'MP-ColorUI'
  }

  state = {
    active: 0,
    animate: '',
    show: false
  }

  componentWillMount () { }

  componentDidMount () {
    setTimeout(() => {
      this.setState({
        animate: 'scale-up',
        show: true
      })
    },100)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const { active, animate, show } = this.state
    const icons = [
      'emoji',
      'cascades',
      'we',
      'form',
      'apps',
      'taxi'
    ]
    const tabs = [
      {
        icon: 'home',
        title: '主页',
        badge: false
      }, {
        icon: 'magic',
        title: '更新',
        badge: false
      }
    ]
    const cards = menu.map((item, index) => (
      <View key={item.key} onClick={() => {
        Taro.navigateTo({
          url: `/pages/${item.key}/index`
        })
      }}
      >
        <ClAnimation type={animate} delay={index / 10}>
          <ClCard>
            <ClFlex justify='between' align='center'>
              <ClFlex align='center'>
                <ClIcon iconName={icons[index]} color='grey'/>
                <ClLayout padding='small' paddingDirection='left'>
                  <ClText size='large'>{item.name}</ClText>
                  <ClText size='small' textColor='gray'>{item.description}</ClText>
                </ClLayout>
              </ClFlex>
              <ClIcon iconName='roundrightfill' color='blue'/>
            </ClFlex>
          </ClCard>
        </ClAnimation>
      </View>
    ))
    const update = (
      <ClLayout padding='xlarge' paddingDirection='bottom' margin='xlarge' marginDirection='bottom'>
        <ClCard type='full'>
          <ClTimeline times={updateList}/>
        </ClCard>
      </ClLayout>
    )
    return (
      <View className='index'>
        {active === 0 && show ?
         <ClLayout padding='xlarge' paddingDirection='bottom' margin='xlarge'
                   marginDirection='bottom'>{cards}</ClLayout>
                      : ''
        }
        {active === 1 ? update : ''}
        <ClTabBar tabs={tabs} fix active={active} onClick={(index) => {
          this.setState({
            active: index
          })
        }}
        />
      </View>
    )
  }
}
