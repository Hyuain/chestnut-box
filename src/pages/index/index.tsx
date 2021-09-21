import Icon from '@/components/icon/icon'
import Weather from '@/components/weather/weather'
import { getClassNames, getFriendlyTime } from '@/utils/utils'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { useCallback, useState } from 'react'
import './index.scss'

const enum Tab {
  MY,
  ALL,
}

const Index = () => {

  const [currentTab, setCurrentTab] = useState(Tab.MY)

  const handleStartAccounting = useCallback(() => {
    Taro.navigateTo({
      url: '/pages/accounting-page/accounting-page',
    }).then()
  }, [])

  return (
    <View className='index'>
      {currentTab === Tab.MY ? <MyCards /> : <AllCards />}
      <View className='bottom'>
        <View
          className={getClassNames({ 'side-button': true, 'active': currentTab === Tab.MY })}
          onClick={() => setCurrentTab(Tab.MY)}
        >我的</View>
        <View onClick={handleStartAccounting} className='center-button'>
          <Icon name='plus' fontSize={56} />
        </View>
        <View
          className={getClassNames({ 'side-button': true, 'active': currentTab === Tab.ALL })}
          onClick={() => setCurrentTab(Tab.ALL)}
        >全部</View>
      </View>
    </View>
  )
}

const MyCards = () => {
  return <View className='my-cards'>
    <DateBox />
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
}

const DateBox = () => {
  return <View className='date-box'>
    <View className='date'>{getFriendlyTime(new Date())}</View>
    <View className='motto'>今天也要保持好心情哦~</View>
  </View>
}

const AllCards = () => {
  return <View className='all-cards'>
    <View className='title'>
      <View className='title-icon'><Icon name='accounting' fontSize={56} /></View>
      <View className='title-text'>记账</View>
    </View>
    <View className='card'>
      <View className='action'>
        <View className='action-decorator'><Icon name='point' fontSize={52} /></View>
        <View className='action-name'>查看记录</View>
      </View>
    </View>
  </View>
}

export default Index
