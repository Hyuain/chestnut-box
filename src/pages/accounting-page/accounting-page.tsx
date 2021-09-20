import CommonTextarea from '@/components/common-textarea/common-textarea'
import Icon from '@/components/icon/icon'
import RoundActionButton from '@/components/round-action-button/round-action-button'
import { Category, Type } from '@/models/accounting'
import { getClassNames, getFriendlyTime } from '@/utils/utils'
import { Input, Picker, View } from '@tarojs/components'
import { BaseEventOrig } from '@tarojs/components/types/common'
import { InputProps } from '@tarojs/components/types/Input'
import { PickerTimeProps } from '@tarojs/components/types/Picker'
import { TextareaProps } from '@tarojs/components/types/Textarea'
import Taro from '@tarojs/taro'
import { useCallback, useState } from 'react'
import './accounting-page.scss'

const AccountingPage = () => {

  const [categories] = useState<{ [type in Type] :Category[] }>({
    [Type.OUTCOME]: [
      { id: 1, type: Type.OUTCOME, icon: 'food', name: '餐饮' },
      { id: 2, type: Type.OUTCOME, icon: 'vehicle', name: '交通' },
      { id: 3, type: Type.OUTCOME, icon: 'housing', name: '住房' },
      { id: 4, type: Type.OUTCOME, icon: 'education', name: '学习' },
      { id: 5, type: Type.OUTCOME, icon: 'medical', name: '医疗' },
      { id: 6, type: Type.OUTCOME, icon: 'shopping', name: '购物' },
      { id: 7, type: Type.OUTCOME, icon: 'other-outcome', name: '其他支出' },
    ],
    [Type.INCOME]: [
      { id: 8, type: Type.OUTCOME, icon: 'salary', name: '薪酬' },
      { id: 9, type: Type.OUTCOME, icon: 'other-income', name: '其他收入' },
    ]
  })
  const [currentType, setCurrenType] = useState<Type>(Type.OUTCOME)
  const [money, setMoney] = useState<string>()
  const [content, setContent] = useState<string>()
  const [currentCategory, setCurrentCategory] = useState<Category>()
  const [dateString, setDateString] = useState<string>(new Date().toLocaleDateString().replace(/\//g, '-'))

  const handleInputMoney = useCallback((e: BaseEventOrig<InputProps.inputEventDetail>) => {
    setMoney(e.detail.value)
  }, [])

  const handleInputContent = useCallback((e: BaseEventOrig<TextareaProps.onInputEventDetail>) => {
    setContent(e.detail.value)
  }, [])

  const handleSwitchType = useCallback((type) => {
    setCurrenType(type)
    setCurrentCategory(undefined)
  }, [])

  const handleConfirm = useCallback(() => {
    Taro.showModal({
      title: '正在开发中',
      content: `类型：${currentType}，金额：${Number(money)}，分类：${currentCategory?.name}，内容：${content}，时间 ${dateString}`,
    })
  }, [content, money, currentCategory, currentType])

  const handleChangeDate = useCallback((e: BaseEventOrig<PickerTimeProps.ChangeEventDetail>) =>{
    setDateString(e.detail.value)
  }, [])

  return (
    <View className='accounting-page'>
      <View className='types'>
        <View
          className={getClassNames({ 'type': true, 'active': currentType === Type.OUTCOME })}
          onClick={() => handleSwitchType(Type.OUTCOME)}
        >支出</View>
        <View
          className={getClassNames({ 'type': true, 'active': currentType === Type.INCOME })}
          onClick={() => handleSwitchType(Type.INCOME)}
        >收入</View>
      </View>
      <Categories
        categories={categories[currentType]}
        current={currentCategory}
        onChangeCategory={(cat) => setCurrentCategory(cat)}
      />
      <MoneyInput value={money} onInput={handleInputMoney} />
      <View className='content'>
        <CommonTextarea
          value={content}
          onInput={handleInputContent}
          badge={<Picker mode='date' value={dateString} onChange={handleChangeDate}>{getFriendlyTime(dateString)}</Picker>}
        />
        <View onClick={handleConfirm} className='confirm-button'><RoundActionButton /></View>
      </View>
    </View>
  )
}

const Categories = (props: {
  categories: Category[],
  current?: Category,
  onChangeCategory: (cat: Category) => void
} ) => {
  return <View className='categories-wrapper'>
    {props.categories.map((cat) => {
      return (
        <View key={cat.id} onClick={() => props.onChangeCategory(cat)} className='category'>
          <View className={getClassNames({ 'category-icon': true, 'active': props.current?.id === cat.id })}>
            <Icon name={cat.icon} fontSize={52} />
          </View>
          <View className='category-name'>{cat.name}</View>
        </View>
      )
    })}
  </View>
}

const MoneyInput = (props: InputProps) => {
  return <View className='money-input'>
    <View className='money-icon'>￥</View>
    <Input className='input' type='digit' placeholder='0.00' {...props} />
  </View>
}

export default AccountingPage
