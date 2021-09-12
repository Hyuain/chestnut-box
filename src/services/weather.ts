import env from "@env/env.prod"
import { get } from "@/libs/request"

const URL = "https://restapi.amap.com/v3/weather/weatherInfo"

export const getWeather = async () => {
  await get(URL, {
    key: env.aMapKey,
    city: 110000,
  }).then((res) => {
    console.log("!!!!")
    console.log(res)
  })
}
