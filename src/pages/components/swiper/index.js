import Taro from '@tarojs/taro'
import { ClLayout, ClSwiper, ClTitleBar } from 'mp-colorui'

export default class SwiperView extends Taro.Component {
  config = {
    navigationBarTitleText: 'Swiper 滑动视图'
  }

  state = {
    list: []
  }

  async componentDidMount () {
    const res = await Taro.cloud.getTempFileURL({
      fileList: ['cloud://test-b95faa.7465-test-b95faa/swiper/swiper1.jpg', 'cloud://test-b95faa.7465-test-b95faa/swiper/swiper2.jpg']
    })
    console.log(res)
    const list = res.fileList.map(item => ({
      url: item.tempFileURL,
      type: 'image'
    }))
    this.setState({
      list
    })
  }

  render () {
    return (
      <ClLayout>
        <ClTitleBar title='类型' textColor='blue' type='sub-title' subTitle='type' subTitleColor='shadow' />
        <ClSwiper type='card' list={this.state.list} circular />
        <ClSwiper type='screen' list={this.state.list} circular />

        <ClTitleBar title='指示点' textColor='blue' type='sub-title' subTitle='dot' subTitleColor='shadow' />
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
