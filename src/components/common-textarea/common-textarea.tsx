import { Textarea, View } from '@tarojs/components'
import './common-textarea.scss'

const CommonTextarea = () => {
  return (
    <View className='common-textarea'>
      <View className='date'>9月21日</View>
      <View className='textarea-wrapper'>
        <Textarea className='textarea' />
      </View>
    </View>
  )
}

export default CommonTextarea
