import { View } from "@tarojs/components"
import { useEffect, useState } from "react"
import { getWeather } from "@/services/weather"
import { getAMapLocation } from "@/services/geography"
import "./weather.scss"

interface IWeatherInfo {
  province: string
  city: string
  description: string
  temperature: string
  humidity: string
}

const Weather = () => {

  const [weather, setWeather] = useState<IWeatherInfo>()

  useEffect(() => {
    getAMapLocation()
      .then((location) => {
        return getWeather(location.addressComponent.adcode)
      })
      .then((res) => {
        setWeather({
          province: res.province,
          city: res.city,
          description: res.weather,
          temperature: res.temperature,
          humidity: res.humidity,
        })
      })
      .catch((e) => {
        Taro.showToast({ title: e.errMsg })
      })
  }, [])

  return weather?.temperature
    ? (
      <View className='weather-wrapper'>
        <View className='data'>
          <View className='number'>
            <View className='temperature'>{weather?.temperature}℃</View>
            <View className='humidity'>{weather?.humidity}%</View>
          </View>
          <View className='text'>
            <View className='city'>{weather?.province} {weather?.city}</View>
            <View className='description'>{weather?.description}</View>
          </View>
        </View>
        <View className='img'>这里应该有张图片</View>
      </View>
    )
    : <View className='place-holder' />
}

export default Weather
