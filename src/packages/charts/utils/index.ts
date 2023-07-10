import { merge } from 'lodash-es'
/**
 * 对象深度合并
 * @param obj1
 * @param obj2
 */
export const _merge = (
  source: Recordable,
  target: Recordable
) => {
  return merge(source, target)
}
