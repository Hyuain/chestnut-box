import Icon from '@/components/icon/icon'
import { getClassNames } from '@/utils/style-utils'
import { View } from '@tarojs/components'
import './category-icon.scss'

interface IProps {
  icon: string
  active?: boolean
}

const CategoryIcon = (props: IProps) => {

  return <View className={getClassNames({ 'category-icon': true, 'active': !!props.active })}>
    <Icon name={props.icon} fontSize={52} />
  </View>
}

export default CategoryIcon
