import { View, Text } from '@tarojs/components'
import Weather from '@/components/weather/weather'
import './index.scss'

const Index = () => {
  return (
    <View className='index'>
      <Weather />
      <Text>Hello world!</Text>
    </View>
  )
}

export default Index
