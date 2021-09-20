export const getClassNames = (classObj: {[className in string]: boolean}): string => {
  return Object.keys(classObj).reduce((result, current) => {
    return classObj[current]
      ? result + ` ${current}`
      : result
  }, '')
}
