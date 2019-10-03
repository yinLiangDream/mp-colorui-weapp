import Taro from '@tarojs/taro'
import { ClAccordion, ClLayout } from 'mp-colorui'
import { TaroRichTextNoWxParse } from 'taro_rich_text'

export default function GenerateCode (props) {
  return (
    <ClLayout padding='normal' paddingDirection='bottom'>
      <ClAccordion title='示例代码' card>
        <ClLayout padding='normal' paddingDirection='around'>
          <TaroRichTextNoWxParse raw={false} richText={props.code} type='markdown' />
        </ClLayout>
      </ClAccordion>
    </ClLayout>
  )
}

GenerateCode.defaultProps = {
  code: ''
}
