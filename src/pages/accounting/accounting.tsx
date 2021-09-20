import CommonTextarea from '@/components/common-textarea/common-textarea'
import Icon from '@/components/icon/icon'
import RoundActionButton from '@/components/round-action-button/round-action-button'
import { Input, View } from '@tarojs/components'
import { useState } from 'react'
import './accounting.scss'

const Accounting = () => {

  const [categories] = useState<Accounting.Category[]>(
    [{ id: 1, icon: 'plus', name: '哈哈' }, { id: 1, icon: 'plus', name: '哈哈' }, { id: 1, icon: 'plus', name: '哈哈' }, { id: 1, icon: 'plus', name: '哈哈' }, { id: 1, icon: 'plus', name: '哈哈' }, { id: 1, icon: 'plus', name: '哈哈' }]
  )

  return (
    <View className='accounting-page'>
      <View className='types'>
        <View className='type'>支出</View>
        <View className='type active'>收入</View>
      </View>
      <Categories categories={categories} />
      <MoneyInput />
      <View className='content'>
        <CommonTextarea />
        <View className='confirm-button'><RoundActionButton /></View>
      </View>
    </View>
  )
}

const Categories = (props: { categories: Accounting.Category[] }) => {
  return <View className='categories-wrapper'>
    {props.categories.map((cat) => {
      return (
        <View key={cat.id || cat.frontId} className='category'>
          <View className='category-icon'>
            <Icon name={cat.icon} fontSize={32} />
          </View>
          <View className='category-name'>{cat.name}</View>
        </View>
      )
    })}
  </View>
}

const MoneyInput = () => {
  return <View className='money-input'>
    <View className='money-icon'>￥</View>
    <Input className='input' type='digit' />
  </View>
}

export default Accounting
