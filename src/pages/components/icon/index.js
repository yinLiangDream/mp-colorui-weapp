import Taro, { pxTransform } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { ClIcon, ClText, ClTitleBar, ClFlex, ClCard } from 'mp-colorui'
import icons from '../../../constant/icon'

const title = 'Icon 图标'

export default function Icon () {
  return (
    <View>
      <ClTitleBar title={title} type='border-title' textColor='blue' borderColor='blue' />
      <ClFlex wrap justify='around' align='start'>
        {
          icons.map((item) => (
              <ClCard type='card' key={item.name}>

                <ClFlex>
                  <View style={{width: pxTransform(130)}}>
                    <ClFlex justify='center' align='center'>
                      <ClIcon color='grey' size='xlarge' iconName={item.name} />
                    </ClFlex>
                    <ClFlex justify='center' align='center' wrap>
                      <ClText size='small' textColor='grey'>{item.name}</ClText>
                    </ClFlex>
                  </View>
                </ClFlex>
              </ClCard>

          ))
        }
      </ClFlex>
    </View>
  )
}

Icon.config = {
  navigationBarTitleText: 'Icon 图标'
}
