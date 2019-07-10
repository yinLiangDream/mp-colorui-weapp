import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { ClButton, ClCard, ClFlex, ClGrid, ClLayout, ClSwitch, ClTitleBar } from 'mp-colorui'
import colors from '../../../constant/color'
import { convertLightColor } from '../../../util'

export default class ButtonView extends Taro.Component {
  constructor(props) {
    super(props)
    this.state = {
      showLines: false
    }
  }
  config = {
    navigationBarTitleText: 'Button 按钮'
  }

  render () {
    const {showLines} = this.state;
    const renderRight = <ClSwitch onChange={(value) => {this.setState({
      showLines: value
    })}}
    />
    return (
      <ClLayout>
        <ClTitleBar title='形状' textColor='black' type='icon' subTitle='shape' subTitleColor='shadow' />
        <ClFlex justify='around' wrap>
          <View style={{ flex: 1 }}>
            <ClCard>
              <ClFlex justify='around'>
                <ClButton shape='radius' bgColor='blue'>默认(radius)</ClButton>
                <ClButton shape='round' bgColor='blue'>圆角(round)</ClButton>
              </ClFlex>
            </ClCard>
          </View>
        </ClFlex>

        <ClTitleBar title='尺寸' textColor='black' type='icon' subTitle='size' subTitleColor='shadow' />
        <ClFlex justify='around' wrap>
          <View style={{ flex: 1 }}>
            <ClCard>
              <ClFlex justify='around' align='center'>
                <ClButton shape='round' bgColor='blue' size='small'>small</ClButton>
                <ClButton shape='round' bgColor='blue' size='normal'>normal</ClButton>
                <ClButton shape='round' bgColor='blue' size='large'>large</ClButton>
              </ClFlex>
            </ClCard>
          </View>
        </ClFlex>

        <ClTitleBar title='按钮颜色' textColor='black' type='icon' subTitle='bgColor' subTitleColor='shadow' />
        <ClFlex justify='between' wrap>
          <View style={{ flex: 1 }}>
            <ClCard>
              <ClGrid col={3}>
                {
                  colors.normalColor.map((item) => (
                    <View  key={item.title}>
                      <ClLayout padding='small' paddingDirection='around'>
                        <ClButton shape='round' bgColor={item.title} long>{item.title}</ClButton>
                      </ClLayout>
                    </View>
                  ))
                }
              </ClGrid>
            </ClCard>
            <ClCard>
              <ClGrid col={2}>
                {
                  colors.lightColor.map((item) => (
                    <View key={item.title}>
                      <ClLayout padding='small' paddingDirection='around'>
                        <ClButton long shape='round' bgColor={convertLightColor(item.title)}>{convertLightColor(item.title)}</ClButton>
                      </ClLayout>
                    </View>
                  ))
                }
              </ClGrid>
            </ClCard>
            <ClCard>
              <ClGrid col={2}>
                {
                  colors.gradualColor.map((item) => (
                    <View key={item.title} >
                      <ClLayout padding='small' paddingDirection='around'>
                        <ClButton shape='round' long bgColor={item.title}>{item.title}</ClButton>
                      </ClLayout>
                    </View>
                  ))
                }
              </ClGrid>
            </ClCard>
          </View>
        </ClFlex>

        <ClTitleBar title='按钮镂空' textColor='black' type='icon' subTitle='plain' subTitleColor='shadow' renderRight={renderRight} />
        <ClFlex justify='between' wrap>
            <ClCard>
              <ClGrid col={2}>
                {
                  colors.normalColor.filter(item => item.title !== 'white').map((item) => (
                    <View key={item.title}>
                      <ClLayout padding='small' paddingDirection='around'>
                        <ClButton long plain plainSize={showLines ? 'bold' : 'default'} shape='round' bgColor={item.title}>{item.title}</ClButton>
                      </ClLayout>
                    </View>
                  ))
                }
              </ClGrid>
            </ClCard>
        </ClFlex>

        <ClTitleBar title='块状按钮' textColor='black' type='icon' subTitle='long' subTitleColor='shadow' />
        <ClFlex justify='between' wrap>
          <View style={{ flex: 1 }}>
            <ClCard>
              <ClButton shape='round' bgColor='blue' long>块状按钮</ClButton>
            </ClCard>
          </View>
        </ClFlex>

        <ClTitleBar title='失效按钮' textColor='black' type='icon' subTitle='disabled' subTitleColor='shadow' />
        <ClCard>
          <ClButton shape='round' bgColor='blue' long disabled>禁止按钮</ClButton>
        </ClCard>

        <ClTitleBar title='加载中' textColor='black' type='icon' subTitle='loading' subTitleColor='shadow' />
        <ClCard>
          <ClButton shape='round' bgColor='blue' long loading>加载中</ClButton>
        </ClCard>
      </ClLayout>
    )
  }
}
