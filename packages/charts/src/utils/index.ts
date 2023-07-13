import { merge } from 'lodash-es'
import { unref } from 'vue-demi'
import type { Injection } from '../types'

type Attrs = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

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

// Copied from
const onRE = /^on[^a-z]/
export const isOn = (key: string): boolean => onRE.test(key)

export function omitOn(attrs: Attrs): Attrs {
  const result: Attrs = {}
  for (const key in attrs) {
    if (!isOn(key)) {
      result[key] = attrs[key]
    }
  }

  return result
}

export function unwrapInjected<T, V>(
  injection: Injection<T>,
  defaultValue: V
): T | V {
  const value = unref(injection)

  if (
    value &&
    typeof value === 'object' &&
    'value' in value
  ) {
    return value.value || defaultValue
  }

  return value || defaultValue
}

export const trim = function (string: string) {
  return (string || '').replace(
    /^[\s\uFEFF]+|[\s\uFEFF]+$/g,
    ''
  )
}

export const isFunction = (obj: any) => {
  return typeof obj === 'function'
}

export const isArray = (obj: any) => {
  return Array.isArray(obj)
}
