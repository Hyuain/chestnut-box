import Icon from '@/components/icon/icon'
import Weather from '@/components/weather/weather'
import { getFriendlyTime } from '@/utils/utils'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { useCallback } from 'react'
import './index.scss'

const Index = () => {

  const handleStartAccounting = useCallback(() => {
    Taro.navigateTo({
      url: "/pages/accounting-page/accounting-page"
    }).then()
  }, [])

  return (
    <View className='index'>
      <View className='body'>
        <View className='date-box'>
          <View className='date'>{getFriendlyTime(new Date())}</View>
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
      <View className='bottom'>
        <View>我的</View>
        <View onClick={handleStartAccounting} className='center-button'>
          <Icon name='plus' fontSize={56} />
        </View>
        <View>全部</View>
      </View>
    </View>
  )
}

export default Index
