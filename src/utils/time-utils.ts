export const getFriendlyTime = (time: string | Date) => {
  time = new Date(time)
  return `${time.getMonth() + 1}月${time.getDate()}日`
}

export const formatTime = (time: Date | string | number, format: string = 'YYYY-MM-DD') => {
  time = new Date(time)
  const YYYY = time.getFullYear().toString()
  const M = (time.getMonth() + 1).toString()
  const D = time.getDate().toString()
  const H = time.getHours().toString()
  const m = time.getMinutes().toString()
  const s = time.getSeconds().toString()
  return format
    .replace('YYYY', YYYY)
    .replace('MM', M.padStart(2, '0'))
    .replace('M', M)
    .replace('DD', D.padStart(2, '0'))
    .replace('D', D)
    .replace('HH', H.padStart(2, '0'))
    .replace('H', H)
    .replace('mm', m.padStart(2, '0'))
    .replace('m', m)
    .replace('ss', s.padStart(2, '0'))
    .replace('s', s)
}
