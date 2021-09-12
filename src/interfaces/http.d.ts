declare interface IHttp {
  request: any
  response: any
}

declare namespace AMap {
  interface CommonApiRequest {
    key: string
  }

  interface ParsedLocation {
    addressComponent: {
      adcode: string
      city: string
      citycode: string
      country: string
    }
    formatted_address: string
  }

  // https://lbs.amap.com/api/webservice/guide/api/georegeo
  interface ParseLocationRequest extends IHttp {
    request: {
      location: string
    } & CommonApiRequest
    response: {
      regeocode: ParsedLocation
    }
  }

  interface LiveWeatherInfo {
    adcode: string
    city: string
    humidity: string
    province: string
    reporttime: string
    temperature: string
    weather: string
    winddirection: string
    windpower: string
  }

  interface ForecastWeatherInfo {
    adcode: string
    city: string
    province: string
    reporttime: string
    cat: {
      date: string
      daypower: string
      daytemp: string
      dayweather: string
      daywind: string
      nightpower: string
      nighttemp: string
      nightweather: string
      nightwind: string
      week: string
    }
  }

  // base 返回实况天气，all 返回预报天气
  type GetWeatherType = "base" | "all"

  interface GetWeatherRequest<E extends GetWeatherType = "base"> extends IHttp {
    request: {
      city: string
      extensions?: GetWeatherType
    } & CommonApiRequest
    response: E extends "base"
      ? { lives: LiveWeatherInfo[] }
      : { forecasts: ForecastWeatherInfo[] }
  }

}

