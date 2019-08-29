import { createModel } from './index'
import { resolve } from 'path'

createModel({
    projectId: 3564, // 直通车2428
    baseFetchPath: resolve(__dirname, './basefetch.ts'),
    additionalProperties: false,
    useCommonJsModule: true,
    optionalExtra: false,
    type: 'redux',
    outputPath: resolve(__dirname, '../test_data/model') /** 输出文件的目录 */,
})
    .then(() => {
        console.log('rapper:generate model success')
    })
    .catch(err => {
        console.log('rapper:generate model failed', err)
    })
