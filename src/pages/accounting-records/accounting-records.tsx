import { getClassNames } from '@/utils/utils'
import { ScrollView, View } from '@tarojs/components'
import { useEffect, useState } from 'react'
import './accounting-records.scss'

const parseMonth = (date: Date): { year: number, month: number } => {
  return {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
  }
}

const today = new Date()
const initialCurrentMonth = parseMonth(today)

const AccountingRecords = () => {

  const [currentMonth, setCurrentMonth] = useState<{ year: number, month: number }>(initialCurrentMonth)

  return <View className='accounting-records'>
    <MonthSelector
      startTime='2020-9-21'
      endTime={today}
      currentMonth={currentMonth}
      onMonthChange={(year, month) => setCurrentMonth({ year, month })}
    />
  </View>
}

const MonthSelector = (props: {
  startTime: string | Date
  endTime?: string | Date
  currentMonth?: { year: number, month: number }
  onMonthChange: (year, month) => void
}) => {

  const [monthsAndYears, setMonthsAndYears] = useState<{ years: number[], months: number[] }>()
  const [scrollIntoView, setScrollIntoView] = useState<string>()

  useEffect(() => {
    let startTime = new Date(props.startTime)
    let endTime = new Date(props.endTime || '')
    if (endTime < startTime) { startTime = endTime }
    const { year: startYear, month: startMonth } = parseMonth(startTime)
    const { year: endYear, month: endMonth } = parseMonth(endTime)
    const monthsCount = (endYear - startYear) * 12 + endMonth - startMonth + 1
    const months = new Array(monthsCount)
    const years = new Array(monthsCount)
    let currentMonth = startMonth
    let currentYear = startYear
    years[0] = startYear
    for (let i = 0; i < monthsCount; i++) {
      if (currentMonth > 12) {
        currentMonth = 1
        currentYear++
      }
      years[i] = currentYear
      months[i] = currentMonth++
    }
    setMonthsAndYears({ years, months })
  }, [props.startTime, props.endTime])

  useEffect(() => {
    const { year, month } = parseMonth(new Date())
    setScrollIntoView(`s${year}${month}`)
  }, [monthsAndYears])

  return <View className='month-selector'>
    <ScrollView
      scrollX
      className='scroll-view'
      scrollIntoView={scrollIntoView}
    >
      {
        monthsAndYears?.months.map((month, index) => {
          const year = monthsAndYears?.years[index]
          const yearTitle = month === 1 || !index ? <View className='year-title'>{year}</View> : <></>
          return <>
            {yearTitle}
            <View
              id={`s${year}${month}`}
              onClick={() => props.onMonthChange(year, month)}
              className={getClassNames({
                month: true,
                active: props.currentMonth?.year === year && props.currentMonth?.month === month
              })}
            >{month}月</View>
          </>
        })
      }
    </ScrollView>
  </View>
}

export default AccountingRecords
