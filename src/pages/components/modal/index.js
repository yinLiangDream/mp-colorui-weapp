import Taro, { useState } from '@tarojs/taro'
import { ClButton, ClCard, ClFlex, ClLayout, ClModal, ClTitleBar } from 'mp-colorui'
import { View } from '@tarojs/components'

export default function Modal () {
  const [normal, setNormal] = useState(false)
  const [custom, setCustom] = useState(false)
  return (
    <ClLayout>
      <ClTitleBar title='类型' textColor='blue' type='icon' subTitle='type' subTitleColor='shadow' />
      <ClCard>
        <ClButton text='普通' long onClick={() => {
          setNormal(true)
        }}
        />
      </ClCard>
      <ClModal
        show={normal}
        closeWithShadow
        title='我是标题'
        close
        actions={[{
          text: '我是按钮1',
          color: 'blue'
        }, {
          text: '我是按钮2',
          color: 'red'
        }]}
        onCancel={() => {
          setNormal(false)
        }}
      >我是内容</ClModal>

      <ClTitleBar title='自定义' textColor='blue' type='icon' subTitle='custom' subTitleColor='shadow' />
      <ClCard>
        <ClButton text='自定义' bgColor='light-cyan' long onClick={() => {
          setCustom(true)
        }}
        />
      </ClCard>
      <ClModal
        show={custom}
        closeWithShadow
        custom
        close
        renderTitle={<ClTitleBar title='我是自定义的标题' textColor='blue' type='icon' subTitle='custom'
          subTitleColor='shadow'
        />}
        onCancel={() => {
          setCustom(false)
        }}
        renderAction={
          <ClLayout>
            <ClFlex justify='around'>
              <View className='flex-sub'>
                <ClButton bgColor='light-red' long onClick={() => {
                  setCustom(false)
                }}
                >
                  点我关闭
                </ClButton>
              </View>
              <View className='flex-sub'>
                <ClButton bgColor='light-blue' long onClick={() => {
                  setCustom(false)
                }}
                >
                  点我也是关闭
                </ClButton>
              </View>
            </ClFlex>
          </ClLayout>
        }
      >我是内容</ClModal>

    </ClLayout>
  )
}

Modal.config = {
  navigationBarTitleText: 'Modal 模态框'
}
