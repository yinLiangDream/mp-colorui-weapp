import Taro from '@tarojs/taro'
import { ClLayout, ClSwiper, ClTitleBar } from 'mp-colorui'

export default class SwiperView extends Taro.Component {
  config = {
    navigationBarTitleText: 'Swiper 滑动视图'
  }

  state = {
    list: []
  }

  componentDidMount () {
    const fileList = ['https://mp-yys-1255362963.cos.ap-chengdu.myqcloud.com/mp-bgcolor/swiper1.jpg', 'https://mp-yys-1255362963.cos.ap-chengdu.myqcloud.com/mp-bgcolor/swiper2.jpg']
    const list = fileList.map(item => ({
      url: item,
      type: 'image'
    }))
    this.setState({
      list
    })
  }

  render () {
    return (
      <ClLayout>
        <ClTitleBar title='类型' textColor='blue' type='icon' subTitle='type' subTitleColor='shadow' />
        <ClSwiper type='card' list={this.state.list} circular />
        <ClSwiper type='screen' list={this.state.list} circular />

        <ClTitleBar title='指示点' textColor='blue' type='icon' subTitle='dot' subTitleColor='shadow' />
        <ClSwiper
          type='screen'
          list={this.state.list}
          circular dot='round'
          indicatorDots
          indicatorColor='#8799a3'
          indicatorActiveColor='#0081ff'
        />

      </ClLayout>
    )
  }
}
