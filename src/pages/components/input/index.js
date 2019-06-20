import Taro from '@tarojs/taro'
import { ClCard, ClInput, ClLayout, ClTitleBar } from 'mp-colorui'

export default function Input () {
  return (
    <ClLayout>
      <ClTitleBar title='默认值' textColor='blue' type='sub-title' subTitle='value' subTitleColor='shadow' />
      <ClCard>
        <ClInput value='我是预先输入的内容' />
      </ClCard>

      <ClTitleBar title='标题' textColor='blue' type='sub-title' subTitle='title' subTitleColor='shadow' />
      <ClCard>
        <ClInput title='姓名' placeholder='请输入姓名' />
        <ClInput title='年龄' placeholder='请输入年龄' type='number' />
      </ClCard>

      <ClTitleBar title='占位符' textColor='blue' type='sub-title' subTitle='placeholder' subTitleColor='shadow' />
      <ClCard>
        <ClInput placeholder='我是提示内容' />
      </ClCard>

      <ClTitleBar title='类型' textColor='blue' type='sub-title' subTitle='type' subTitleColor='shadow' />
      <ClCard>
        <ClInput placeholder='我可以输入任何文本' type='text' />
      </ClCard>
      <ClCard>
        <ClInput placeholder='我可以输入数字' type='number' />
      </ClCard>
      <ClCard>
        <ClInput placeholder='我可以输入密码' type='password' />
      </ClCard>
      <ClCard>
        <ClInput placeholder='我可以输入浮点数' type='digit' />
      </ClCard>
      <ClCard>
        <ClInput placeholder='我可以输入身份证' type='idcard' />
      </ClCard>

      <ClTitleBar title='长度' textColor='blue' type='sub-title' subTitle='long' subTitleColor='shadow' />
      <ClCard>
        <ClInput placeholder='我只能输入 10 个字符' type='text' maxLength={10} />
      </ClCard>

      <ClTitleBar title='禁止输入' textColor='blue' type='sub-title' subTitle='disabled' subTitleColor='shadow' />
      <ClCard>
        <ClInput placeholder='我禁止输入' type='text' disabled />
      </ClCard>

      <ClTitleBar title='自动上推' textColor='blue' type='sub-title' subTitle='adjustPosition' subTitleColor='shadow' />
      <ClCard>
        <ClInput placeholder='我自动上推' type='text' adjustPosition />
      </ClCard>

      <ClTitleBar title='后置内容' textColor='blue' type='sub-title' subTitle='more' subTitleColor='shadow' />
      <ClCard>
        <ClInput placeholder='我有图标' type='text' adjustPosition icon={{iconName: 'emoji'}} onIconClick={() => {
          Taro.showToast({
            title: '您点击了图标',
            icon: 'none'
          })
        }}
        />
      </ClCard>
      <ClCard>
        <ClInput onImageClick={() => {
          Taro.showToast({
            title: '您点击了图片',
            icon: 'none'
          })
        }} placeholder='我有图片' type='text' adjustPosition image='https://mp-yys-1255362963.cos.ap-chengdu.myqcloud.com/list_head/330.jpg'
        />
      </ClCard>
      <ClCard>
        <ClInput placeholder='我有按钮' type='text' adjustPosition button={{text: '按钮', bgColor: 'light-blue', onClick () {
          Taro.showToast({
            title: '您点击了按钮',
            icon: 'none'
          })
          }}}
        />
      </ClCard>
    </ClLayout>
  )
}

Input.config = {
  navigationBarTitleText: 'Input 输入框'
}
