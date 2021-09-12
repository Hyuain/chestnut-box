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
    console.log("setEffect")
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
        console.log(res)
      })
  }, [])

  if (!weather) {
    return <View></View>
  }

  return <View className='weather-wrapper'>
    <View>{weather?.province} {weather?.city}</View>
    <View>{weather?.description}</View>
    <View>{weather?.temperature}℃</View>
    <View>{weather?.humidity}%</View>
  </View>
}

export default Weather
