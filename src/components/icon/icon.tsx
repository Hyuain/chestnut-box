import { View } from "@tarojs/components"

interface IIconProps {
  name: string
  fontSize: number
}

const Icon = (props: IIconProps) => {

  return <View
    style={`font-size: ${props.fontSize}rpx`}
    className={`iconfont icon-${props.name}`}
  />
}

export default Icon
