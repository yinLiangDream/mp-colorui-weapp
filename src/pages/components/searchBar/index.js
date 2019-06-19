import Taro from '@tarojs/taro'
import { ClCard, ClLayout, ClSearchBar, ClTitleBar } from 'mp-colorui'

export default class SearchBar extends Taro.Component {
  config = {
    navigationBarTitleText: 'SearchBar 搜索栏'
  }

  onSearch (value) {
    Taro.showToast({
      title: `您要搜索${value}`,
      icon: 'none'
    })
  }

  render () {
    return (
      <ClLayout>
        <ClTitleBar title='形状&背景色' textColor='blue' type='sub-title' subTitle='shape&bgColor' subTitleColor='shadow' />
        <ClCard>
          <ClSearchBar shape='radius' bgColor='grey' onSearch={value => {
            this.onSearch(value)
          }}
          />
        </ClCard>
        <ClCard>
          <ClSearchBar shape='round' bgColor='light-blue' onSearch={value => {
            this.onSearch(value)
          }}
          />
        </ClCard>

        <ClTitleBar title='占位符' textColor='blue' type='sub-title' subTitle='placeholder' subTitleColor='shadow' />
        <ClCard>
          <ClSearchBar shape='round' placeholder='请输入你想输入的内容' onSearch={value => {
            this.onSearch(value)
          }}
          />
        </ClCard>

        <ClTitleBar
          title='功能组&按钮颜色'
          textColor='blue'
          type='sub-title'
          subTitle='leftIcons&rightButtonColor'
          subTitleColor='shadow'
        />
        <ClCard>
          <ClSearchBar
            shape='round'
            rightButtonColor='black'
            rightTextColor='white'
            placeholder='请输入你想输入的内容'
            leftIcons={[
              'emoji'
            ]}
            onIconClick={(index) => {
              Taro.showToast({
                title: `您点击了第${index + 1}个图标`,
                icon: 'none'
              })
            }}
            onSearch={value => {
              this.onSearch(value)
            }}
          />
        </ClCard>
      </ClLayout>
    )
  }
}
