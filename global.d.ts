declare type Fn<T = any, R = T> = {
  (...arg: T[]): R
}

declare type PromiseFn<T = any, R = T> = {
  (...arg: T[]): Promise<R>
}

declare type IObj<T = any> = {
  [key: string]: T
  [key: number]: T
}

declare function parseInt(
  s: string | number,
  radix?: number
): number

declare function parseFloat(string: string | number): number

declare type Dictionary<T> = Record<string, T>

declare type Nullable<T> = T | null

declare type RefInstanceType<T> = {
  $: T
} | null

declare type RefType<T> = T | null

declare type CustomizedHTMLElement<T> = HTMLElement & T

declare type Indexable<T = any> = {
  [key: string]: T
}
declare type Recordable<T = any> = Record<string, T>

declare type Hash<T> = Indexable<T>

declare type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>
}

// type DeepPartial<T> = T extends Function
//   ? T
//   : T extends object
//   ? { [K in keyof T]?: DeepPartial<T[K]> }
//   : T;

declare type LabelValueOptions = {
  label: string
  value: any
}[]

declare type EmitType = (
  event: string,
  ...args: any[]
) => void

declare type TargetContext = '_self' | '_blank'

declare type TimeoutHandle = ReturnType<typeof setTimeout>

declare type IntervalHandle = ReturnType<typeof setInterval>

declare interface ComponentElRef<
  T extends HTMLElement = HTMLDivElement
> {
  $el: T
}

declare type ComponentRef<
  T extends HTMLElement = HTMLDivElement
> = ComponentElRef<T> | null

declare type ElRef<T extends HTMLElement = HTMLDivElement> =
  Nullable<T>

declare interface Window {
  $: void
  echarts: void
}
