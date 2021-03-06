import { Products } from './types'

export const categorizedProducts = (data: Products) => {
  // return data.reduce((acc, v) => {
  //   if (!acc[v.category]) {
  //     acc[v.category] = []
  //   }
  //   acc[v.category].push(v)
  //   return acc
  // }, {})

  let result: any = {}
  for (let obj of data) {
    if (!result[obj.category]) {
      result[obj.category] = [obj]
    } else {
      result[obj.category].push(obj)
    }
  }
  return result
}
