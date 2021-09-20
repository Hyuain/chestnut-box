export const getFriendlyTime = (time: string | Date) => {
  time = new Date(time)
  return `${time.getMonth() + 1}月${time.getDate()}日`
}
