import env from "@env/env.prod"
import { get } from "@/libs/request"

const URL = "https://restapi.amap.com/v3/weather/weatherInfo"

export const getWeather = async <E extends AMap.GetWeatherType = "base">(
  adcode: string, extensions: AMap.GetWeatherType = "base",
) => {
  return await get<AMap.GetWeatherRequest<E>>(URL, {
    key: env.aMapKey,
    city: adcode,
    extensions,
  }).then((res) => {
    const weather = extensions === "base"
      ? (res.data as AMap.GetWeatherRequest<"base">["response"]).lives[0]
      : (res.data as AMap.GetWeatherRequest<"all">["response"]).forecasts
    return weather as E extends "base" ? AMap.LiveWeatherInfo : AMap.ForecastWeatherInfo
  })
}
