import Taro from '@tarojs/taro'
import PropTypes from 'prop-types';
import { ClMenuList } from 'mp-colorui'
import { baseList } from '../../constant/menu'

export default function MenuNavigate (props) {
  return (
    <ClMenuList
      card
      shortBorder
      onClick={(index) => {
        Taro.navigateTo({
          url: `/pages/components/${baseList[index].key}/index`
        })
      }}
      list={props.list.map(item => ({
        title: item.name,
        arrow: true
      }))}
    />
  )
}

MenuNavigate.options = {
  addGlobalClass: true
}

MenuNavigate.defaultProps = {
  list: []
}

MenuNavigate.propTypes = {
  list: PropTypes.array
}
