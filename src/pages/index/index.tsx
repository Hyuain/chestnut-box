import { View } from '@tarojs/components'
import Weather from '@/components/weather/weather'
import './index.scss'

const Index = () => {
  return (
    <View className='index'>
      <View className='body'>
        <View className='date-box'>
          <View className='date'>{new Date().getMonth() + 1}月{new Date().getDate()}日</View>
          <View className='motto'>今天也要保持好心情哦~</View>
        </View>
        <View className='row'>
          <Weather />
        </View>
        <View className='row common-card'>
          记录我一天的花销（开发中）
        </View>
        <View className='row final-tip'>
          更多模组开发中……
        </View>
      </View>
      <View className='bottom'>底部区域开发中</View>
    </View>
  )
}

export default Index
