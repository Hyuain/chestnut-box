import { View } from "@tarojs/components"
import { useEffect } from "react"
import { getWeather } from "@/services/weather"

console.log("run")

getWeather().then((res) => {
  console.log("???", res)
})

const Weather = () => {

  useEffect(() => {

  })

  return <View>
    哈哈哈
  </View>
}

export default Weather
