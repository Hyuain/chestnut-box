import CommonTextarea from '@/components/common-textarea/common-textarea'
import Icon from '@/components/icon/icon'
import RoundActionButton from '@/components/round-action-button/round-action-button'
import { Category, Type } from '@/models/accounting'
import { getClassNames } from '@/utils/utils'
import { Input, View } from '@tarojs/components'
import { useState } from 'react'
import './accounting-page.scss'

const AccountingPage = () => {

  const [categories] = useState<Category[]>(
    [{ id: 1, icon: 'plus', name: '哈哈' }, { id: 1, icon: 'plus', name: '哈哈' }, { id: 1, icon: 'plus', name: '哈哈' }, { id: 1, icon: 'plus', name: '哈哈' }, { id: 1, icon: 'plus', name: '哈哈' }, { id: 1, icon: 'plus', name: '哈哈' }]
  )
  const [currentType, setCurrenType] = useState<Type>(Type.OUTCOME)

  return (
    <View className='accounting-page'>
      <View className='types'>
        <View
          className={getClassNames({ 'type': true, 'active': currentType === Type.OUTCOME })}
          onClick={() => setCurrenType(Type.OUTCOME)}
        >支出</View>
        <View
          className={getClassNames({ 'type': true, 'active': currentType === Type.INCOME })}
          onClick={() => setCurrenType(Type.INCOME)}
        >收入</View>
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

const Categories = (props: { categories: Category[] }) => {
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

export default AccountingPage
