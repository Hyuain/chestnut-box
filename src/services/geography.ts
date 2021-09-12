import { getLocation } from "@tarojs/taro"
import { get } from "@/libs/request"
import env from "@env/env.prod"

const URL = "https://restapi.amap.com/v3/geocode/regeo"

export const getAMapLocation = async () => {
  const location = await getLocation({})
  return parseLocation(location)
}

export const parseLocation = async (location: getLocation.SuccessCallbackResult) => {
  return get<AMap.ParseLocationRequest>(URL, {
    key: env.aMapKey,
    location: `${location.longitude},${location.latitude}`
  }).then((res) => {
    return res.data.regeocode
  })
}
