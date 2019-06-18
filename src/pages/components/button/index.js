import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { ClButton, ClCard, ClFlex, ClLayout, ClTitleBar } from 'mp-colorui'
import colors from '../../../constant/color'
import { convertLightColor } from '../../../util'

export default class ButtonView extends Taro.Component {
  config = {
    navigationBarTitleText: 'Button 按钮'
  }

  render () {
    return (
      <ClLayout>
        <ClTitleBar title='形状' textColor='blue' type='sub-title' subTitle='shape' subTitleColor='shadow' />
        <ClFlex justify='around' wrap>
          <View style={{ flex: 1 }}>
            <ClCard>
              <ClFlex justify='around'>
                <ClButton shape='radius' bgColor='light-blue'>默认(radius)</ClButton>
                <ClButton shape='round' bgColor='light-blue'>圆角(round)</ClButton>
              </ClFlex>
            </ClCard>
          </View>
        </ClFlex>

        <ClTitleBar title='尺寸' textColor='blue' type='sub-title' subTitle='size' subTitleColor='shadow' />
        <ClFlex justify='around' wrap>
          <View style={{ flex: 1 }}>
            <ClCard>
              <ClFlex justify='around' align='center'>
                <ClButton shape='round' bgColor='light-blue' size='small'>small</ClButton>
                <ClButton shape='round' bgColor='light-blue' size='normal'>normal</ClButton>
                <ClButton shape='round' bgColor='light-blue' size='large'>large</ClButton>
              </ClFlex>
            </ClCard>
          </View>
        </ClFlex>

        <ClTitleBar title='按钮颜色' textColor='blue' type='sub-title' subTitle='bgColor' subTitleColor='shadow' />
        <ClFlex justify='between' wrap>
          <View style={{ flex: 1 }}>
            <ClCard>
              <ClFlex justify='between' align='center' wrap>
                {
                  colors.normalColor.map((item) => (
                    <ClLayout key={item.title} padding='small' paddingDirection='around'>
                      <ClButton shape='round' bgColor={item.title}>{item.title}</ClButton>
                    </ClLayout>
                  ))
                }
              </ClFlex>
            </ClCard>
            <ClCard>
              <ClFlex justify='around' align='center' wrap>
                {
                  colors.lightColor.map((item) => (
                    <ClLayout key={item.title} padding='small' paddingDirection='around'>
                      <ClButton shape='round' bgColor={convertLightColor(item.title)}>{convertLightColor(item.title)}</ClButton>
                    </ClLayout>
                  ))
                }
              </ClFlex>
            </ClCard>
            <ClCard>
              <ClFlex justify='around' align='center' wrap>
                {
                  colors.gradualColor.map((item) => (
                    <ClLayout key={item.title} padding='small' paddingDirection='around'>
                      <ClButton shape='round' bgColor={item.title}>{item.title}</ClButton>
                    </ClLayout>
                  ))
                }
              </ClFlex>
            </ClCard>
          </View>
        </ClFlex>

        <ClTitleBar title='按钮镂空' textColor='blue' type='sub-title' subTitle='plain' subTitleColor='shadow' />
        <ClFlex justify='between' wrap>
          <View style={{ flex: 1 }}>
            <ClCard>
              <ClFlex justify='between' align='center' wrap>
                {
                  colors.normalColor.map((item) => (
                    <ClLayout key={item.title} padding='small' paddingDirection='around'>
                      <ClButton plain shape='round' bgColor={item.title}>{item.title}</ClButton>
                    </ClLayout>
                  ))
                }
              </ClFlex>
            </ClCard>
          </View>
        </ClFlex>

        <ClTitleBar title='块状按钮' textColor='blue' type='sub-title' subTitle='long' subTitleColor='shadow' />
        <ClFlex justify='between' wrap>
          <View style={{ flex: 1 }}>
            <ClCard>
              <ClButton shape='round' bgColor='blue' long>块状按钮</ClButton>
            </ClCard>
          </View>
        </ClFlex>

        <ClTitleBar title='失效按钮' textColor='blue' type='sub-title' subTitle='disabled' subTitleColor='shadow' />
        <ClCard>
          <ClButton shape='round' bgColor='blue' long disabled>禁止按钮</ClButton>
        </ClCard>

        <ClTitleBar title='加载中' textColor='blue' type='sub-title' subTitle='loading' subTitleColor='shadow' />
        <ClCard>
          <ClButton shape='round' bgColor='blue' long loading>加载中</ClButton>
        </ClCard>
      </ClLayout>
    )
  }
}
