import Taro from '@tarojs/taro'
import { ClCard, ClFlex, ClLayout, ClTitleBar } from 'mp-colorui'
import { View } from '@tarojs/components'

const size = ['xs', 'sm', 'df', 'lg', 'xl']

const percent = ['sub', 'twice', 'treble']
const colors = ['blue', 'red', 'green']

const justify = ['start', 'end', 'center', 'between', 'around']
const align = ['start', 'end', 'center']

export default function Flex () {
  const base = size.map(cc => (
    <ClCard key={cc}>
      <ClFlex>
        <View className={`basis-${cc}`}>
          <ClCard bgColor='light-blue' type='full'>{cc}</ClCard>
        </View>
      </ClFlex>
    </ClCard>
  ))

  const per = percent.map((perc, index) => (
    <View key={perc} className={`flex-${perc}`}>
      <ClCard type='full' bgColor={`light-${colors[index]}`}>{perc}({index+1})</ClCard>
    </View>
  ))

  const justifyComponent = justify.map(jus => (
    <ClCard key={jus}>
      <ClFlex justify={jus}>
        <ClCard bgColor='light-blue'>{jus}</ClCard>
        <ClCard bgColor='light-blue'>{jus}</ClCard>
      </ClFlex>
    </ClCard>
  ))

  const alignComponent = align.map(al => (
    <ClCard key={al}>
      <ClFlex align={al}>
        <ClCard bgColor='light-blue'>
          <View>{al}</View>
          <View>{al}</View>
        </ClCard>
        <ClCard bgColor='light-blue'>
          <View>{al}</View>
        </ClCard>
      </ClFlex>
    </ClCard>
  ))
  return (
    <ClLayout>
      <ClTitleBar title='固定尺寸' textColor='blue' type='icon' subTitle='basis' subTitleColor='shadow' />
      {base}

      <ClTitleBar title='比例布局' textColor='blue' type='icon' subTitle='flex' subTitleColor='shadow' />
      <ClCard>
        <ClFlex>
          {per}
        </ClFlex>
      </ClCard>

      <ClTitleBar title='水平对齐' textColor='blue' type='icon' subTitle='justify' subTitleColor='shadow' />
      {justifyComponent}

      <ClTitleBar title='垂直对齐' textColor='blue' type='icon' subTitle='align' subTitleColor='shadow' />
      {alignComponent}
    </ClLayout>
  )
}

Flex.config = {
  navigationBarTitleText: 'Flex 弹性布局'
}
