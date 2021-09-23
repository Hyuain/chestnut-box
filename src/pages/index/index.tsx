import Icon from '@/components/icon/icon'
import Weather from '@/components/weather/weather'
import { getClassNames, getFriendlyTime } from '@/utils/utils'
import { BaseEventOrig, Swiper, SwiperItem, View } from '@tarojs/components'
import { SwiperProps } from '@tarojs/components/types/Swiper'
import Taro from '@tarojs/taro'
import { useCallback, useState } from 'react'
import './index.scss'

const enum Tab {
  MY,
  ALL,
}

interface CardAction {
  name: string
  handler: () => void
}

interface Card {
  icon: string
  name: string
  actions: CardAction[]
}

const Index = () => {

  const [currentTab, setCurrentTab] = useState(Tab.ALL)

  const handleStartAccounting = useCallback(() => {
    Taro.navigateTo({
      url: '/pages/accounting-page/accounting-page',
    }).then()
  }, [])

  const [allCards] = useState<Card[]>([
    {
      name: '记账', icon: 'accounting',
      actions: [
        {
          name: '记一笔', handler: handleStartAccounting,
        },
        {
          name: '查看历史', handler: () => Taro.navigateTo({
            url: '/pages/accounting-records/accounting-records',
          }),
        },
      ],
    },
  ])

  const handleTabChange = useCallback((e: BaseEventOrig<SwiperProps.onChangeEventDetail>) => {
    setCurrentTab(e.detail.current ? Tab.ALL : Tab.MY)
  }, [])

  return (
    <View className='index'>
      <Swiper
        className='body-swiper'
        current={currentTab === Tab.MY ? 0 : 1}
        onChange={handleTabChange}
      >
        <SwiperItem className='body-swiper-item'><MyCards /></SwiperItem>
        <SwiperItem className='body-swiper-item'><AllCards allCards={allCards} /></SwiperItem>
      </Swiper>
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

const AllCards = (props: { allCards: Card[] }) => {
  return <View className='all-cards'>
    <UserCard />
    {
      props.allCards.map((card) => <View className='each-card' key={card.name}>
        <View className='title'>
          <View className='title-icon'><Icon name='accounting' fontSize={56} /></View>
          <View className='title-text'>记账</View>
        </View>
        <View className='content'>
          {card.actions.map((action) => <Action key={action.name} action={action} />)}
        </View>
      </View>)
    }
  </View>
}

const UserCard = () => {
  return <View className='user-card'>
    <View className='avatar' />
    <View className='text'>
      <View className='nickname'>栗子海鲜酱</View>
      <View className='uid'>UID: 1</View>
    </View>
  </View>
}

const Action = (props: { action: CardAction }) => {
  return <View onClick={props.action.handler} className='action'>
    <View className='action-decorator'><Icon name='point' fontSize={52} /></View>
    <View className='action-name'>{props.action.name}</View>
  </View>
}

export default Index
