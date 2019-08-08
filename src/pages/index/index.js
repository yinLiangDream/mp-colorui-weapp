import { View } from '@tarojs/components';
import Taro, { Component } from '@tarojs/taro';
import { ClAnimation, ClCard, ClFlex, ClFloatButton, ClIcon, ClLayout, ClMenuList, ClSearchBar, ClTabBar, ClText, ClTimeline } from 'mp-colorui';
import * as menu from '../../constant/menu.js';
import { updateList } from '../../model/index';
import './index.scss';


const allList = [].concat(menu.baseList, menu.actionList, menu.formList, menu.layoutList, menu.navigateList, menu.viewList)
export default class Index extends Component {

  config = {
    navigationBarTitleText: 'MP-ColorUI'
  }

  state = {
    active: 0,
    animate: '',
    show: false,
    tempfilter: []
  }

  componentWillMount () { }

  componentDidMount () {
    setTimeout(() => {
      this.setState({
        animate: 'scale-up',
        show: true
      })
    }, 200)
    if (Taro.getEnv() !== Taro.ENV_TYPE.WEB && Taro.canIUse('getUpdateManager')) {
      let updateManager = Taro.getUpdateManager();
      updateManager.onCheckForUpdate(res => {
        console.log(res)
        if (res.hasUpdate) {
          updateManager.onUpdateReady(() => {
            Taro.showModal({
              title: '更新提示',
              content: '有新版本，是否重启应用？',
              success: ress => {
                if (ress.confirm) {
                  updateManager.applyUpdate()
                } else if (ress.cancel) {
                  return false
                }
              }
            })
          })
          updateManager.onUpdateFailed(() => {
            Taro.hideLoading();
            Taro.showModal({
              title: '更新失败',
              content: '新版本更新失败，请检查网络',
              showCancel: false
            })
          })
        }
      })
    }
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const { active, animate, show, tempfilter } = this.state
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
    const weapp = Taro.getEnv() === Taro.ENV_TYPE.WEAPP;
    const cards = menu.default.map((item, index) => (
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
                <ClIcon iconName={icons[index]} color='grey' />
                <ClLayout padding='small' paddingDirection='left'>
                  <ClText size='large'>{item.name}</ClText>
                  <ClText size='small' textColor='gray'>{item.description}</ClText>
                </ClLayout>
              </ClFlex>
              <ClIcon iconName='roundrightfill' color='blue' />
            </ClFlex>
          </ClCard>
        </ClAnimation>
      </View>
    ))
    const update = (
      <ClLayout padding='xlarge' paddingDirection='bottom' margin='xlarge' marginDirection='bottom'>
        <ClCard type='full'>
          <ClTimeline times={updateList} />
        </ClCard>
      </ClLayout>
    )
    return (
      <View className='index'>
        {active === 0 ? <ClSearchBar shape='round' bgColor='white' searchType='none' onInput={(value) => {
          this.setState({
            show: !value,
            tempfilter: allList.filter(item => item.name.includes(value)).map(item => ({
              arrow: true,
              title: item.name,
              key: item.key,
              url: `/pages/components/${item.key}/index`
            }))
          })
        }}
        /> : ''}
        {active === 0 && show ?
         <ClLayout padding='xlarge' paddingDirection='bottom' margin='xlarge'
           marginDirection='bottom'
         >{cards}</ClLayout>
                              :
         active === 0 ? <ClLayout margin='xlarge' marginDirection='vertical' padding='xlarge' paddingDirection='bottom'>
           <ClMenuList card list={tempfilter} onClick={(index) => {
             Taro.navigateTo({
               url: tempfilter[index].url
             })
           }}
           />
         </ClLayout> : ''
        }
        {active === 1 ? update : ''}
        <ClTabBar tabs={tabs} fix active={active} onClick={(index) => {
          this.setState({
            active: index
          })
        }}
        />
        {weapp ? <ClFloatButton open={false} icon='comment' size='large' bgColor='gradualGreen' onClick={() => {
          Taro.navigateToMiniProgram({
            appId: 'wx8abaf00ee8c3202e',
            extraData: {
              id: '74218'
            }
          })
        }}
        /> : ''}
      </View>
    )
  }
}
