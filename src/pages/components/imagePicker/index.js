import Taro from '@tarojs/taro'
import { ClCard, ClImagePicker, ClLayout, ClTitleBar } from 'mp-colorui'

export default function ImagePicker () {
  return (
    <ClLayout>
      <ClTitleBar title='默认' textColor='blue' type='icon' subTitle='default' subTitleColor='shadow' />
      <ClCard>
        <ClImagePicker />
      </ClCard>

      <ClTitleBar title='最多选择 3 张图片' textColor='blue' type='icon' subTitle='most' subTitleColor='shadow' />
      <ClCard>
        <ClImagePicker chooseImgObj={{ count: 3 }} />
      </ClCard>

      <ClTitleBar title='删除图片确认操作' textColor='blue' type='icon' subTitle='beforeDelete' subTitleColor='shadow' />
      <ClCard>
        <ClImagePicker chooseImgObj={{ count: 3 }} beforeDel={async () => {
          const res = await Taro.showModal({
            title: '您确认要删除吗'
          })
          console.log(res)
          if (res.confirm) return true
          if (res.cancel) return false
        }}
        />
      </ClCard>
    </ClLayout>
  )
}

ImagePicker.config = {
  navigationBarTitleText: 'ImagePicker 图片选择器'
}
