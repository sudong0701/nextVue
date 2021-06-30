


import { axios } from '@bundled-es-modules/axios'
import { router } from '../router'


 
//设置请求头
axios.defaults.headers.post['Content-Type'] = 'application/json'
//请求前拦截
axios.interceptors.request.use(
    (config:any) => {
        config.transformResponse = [(data:any)=> {
            return JSON.parse(data)
        }]

        return config
    },
    (error:any) => {
        return error
    }
)
//请求返回拦截
axios.interceptors.response.use(
    (response: any) => {
        // IE 8-9
        if (response.data == null && response.config.responseType === 'json' && response.request.responseText != null) {
            try {
                // eslint-disable-next-line no-param-reassign
                response.data = JSON.parse(response.request.responseText);
            } catch (e) {
                // ignored
            }
            return response.data
        } else {
            const result = response.data
            if (result.code === 200) {
                window.$message.success('请求成功')
                return result
            } else {
                window.$message.error(result.note)
                router.push('/')
                return result
            }
        }
    },
    (error: any) => {
        if (error.response) {
            return error.response.data
        }
    }
)

export { axios }