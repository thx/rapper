import { NODE_ENV_TYPE } from '../const'
import { IConfigOptions } from 'models/types'

let configObj: IConfigOptions

switch (process.env.NODE_ENV) {
  case NODE_ENV_TYPE.DEV:
    configObj = require('./config.dev').default
    break
  case NODE_ENV_TYPE.PROD:
    configObj = require('./config.prod').default
    break
  default:
    throw new Error(`Unsupported NODE_ENV=${process.env.NODE_ENV}`)
}

export default configObj
