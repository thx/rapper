/// <reference types="react-scripts" />

declare interface IOption {
  text: string
  value: string | number
}

declare interface INumItem {
  value: number
  label: string
}

declare interface IStrItem {
  value: string
  text: string
}

declare interface IItem {
  value: string | number
  text: string
}

declare interface ICommonRes {
  info: {
    errorCode: string
    message: string
    ok: boolean
  }
}

declare interface IName {
  id: number
  name: string
}
