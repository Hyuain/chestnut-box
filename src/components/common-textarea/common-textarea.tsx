import { Textarea, View } from '@tarojs/components'
import { TextareaProps } from '@tarojs/components/types/Textarea'
import { ReactNode } from 'react'
import './common-textarea.scss'

interface IProps extends TextareaProps {
  badge?: ReactNode
}

const CommonTextarea = (props: IProps) => {

  return (
    <View className='common-textarea'>
      {props.badge ? <View className='badge'>{props.badge}</View> : <></>}
      <View className='textarea-wrapper'>
        <Textarea className='textarea' showConfirmBar={false} {...props}>
        </Textarea>
      </View>
    </View>
  )
}

export default CommonTextarea
