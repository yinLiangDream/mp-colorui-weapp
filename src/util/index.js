/**
 * @description 将驼峰式转化为 -
 * @param str
 * @returns {*}
 */
export const toMidLine = str => str.replace(/[A-Z]/g, match => '-' + match.toLowerCase())

export default {
  toMidLine
}
