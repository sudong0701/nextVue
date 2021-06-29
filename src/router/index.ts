import { createRouter, createWebHashHistory } from 'vue-router'
import { ComponentOptions }  from 'vue'

export interface routerConfig {
    path: string,
    name: string,
    component: ComponentOptions,
    children?: Array<routerConfig>
}

//page

import login from '../page/sys/login.vue'

import main from '../page/main/index.vue'

import list from '../page/main/list/index.vue'
import userList from '../page/main/list/userList/index.vue'
import searchList from '../page/main/list/searchList/index.vue'
import qyeryTable from '../page/main/list/qyeryTable/index.vue'
import standardList from '../page/main/list/standardList/index.vue'
import cardList from '../page/main/list/cardList/index.vue'

import form from '../page/main/form/index.vue'
import basicsForm from '../page/main/form/basicsForm/index.vue'
import distributeForm from '../page/main/form/distributeForm/index.vue'
import advancedForm from '../page/main/form/advancedForm/index.vue'

import detail from '../page/main/detail/index.vue'
import basicsDetail from '../page/main/detail/basicsDetail/index.vue'
import advancedDetail from '../page/main/detail/advancedDetail/index.vue'

import result from '../page/main/result/index.vue'
import success from '../page/main/result/success/index.vue'
import fail from '../page/main/result/fail/index.vue'

import exception from '../page/main/exception/index.vue'
import page403 from '../page/main/exception/403/index.vue'
import page404 from '../page/main/exception/404/index.vue'
import page500 from '../page/main/exception/500/index.vue'

import personal from '../page/main/personal/index.vue'
import personalCenter from '../page/main/personal/personalCenter/index.vue'
import personalSetting from '../page/main/personal/personalSetting/index.vue'

import authoritySetting from '../page/main/authoritySetting/index.vue'
import userManagement from '../page/main/authoritySetting/userManagement/index.vue'
import roleManagement from '../page/main/authoritySetting/roleManagement/index.vue'
import appAllocation from '../page/main/authoritySetting/appAllocation/index.vue'
import operationRecord from '../page/main/authoritySetting/operationRecord/index.vue'

import setting from '../page/main/setting/index.vue'
import basicsInfo from '../page/main/setting/basicsInfo/index.vue'



export const routerList: Array<routerConfig> = [
    {
        path: '/',
        name: 'login',
        component: login
    },
    {
        path: '/main',
        name: 'main',
        component: main,
        children: [
            {
                path: 'list',
                name: 'list',
                component: list,
                children: [
                    {
                        path: 'userList',
                        name: 'userList',
                        component: userList,
                    },
                    {
                        path: 'searchList',
                        name: 'searchList',
                        component: searchList,
                    },
                    {
                        path: 'qyeryTable',
                        name: 'qyeryTable',
                        component: qyeryTable,
                    },
                    {
                        path: 'standardList',
                        name: 'standardList',
                        component: standardList,
                    },
                    {
                        path: 'cardList',
                        name: 'cardList',
                        component: cardList,
                    }
                ]
            },
            {
                path: 'form',
                name: 'form',
                component: form,
                children: [
                    {
                        path: 'basicsForm',
                        name: 'basicsForm',
                        component: basicsForm,
                    },
                    {
                        path: 'distributeForm',
                        name: 'distributeForm',
                        component: distributeForm,
                    },
                    {
                        path: 'advancedForm',
                        name: 'advancedForm',
                        component: advancedForm,
                    }
                ]
            },
            {
                path: 'detail',
                name: 'detail',
                component: detail,
                children: [
                    {
                        path: 'basicsDetail',
                        name: 'basicsDetail',
                        component: basicsDetail,
                    },
                    {
                        path: 'advancedDetail',
                        name: 'advancedDetail',
                        component: advancedDetail,
                    }
                ]
            },
            {
                path: 'result',
                name: 'result',
                component: result,
                children: [
                    {
                        path: 'success',
                        name: 'success',
                        component: success,
                    },
                    {
                        path: 'fail',
                        name: 'fail',
                        component: fail,
                    }
                ]
            },
            {
                path: 'exception',
                name: 'exception',
                component: exception,
                children: [
                    {
                        path: '403',
                        name: '403',
                        component: page403,
                    },
                    {
                        path: '404',
                        name: '404',
                        component: page404,
                    },
                    {
                        path: '500',
                        name: '500',
                        component: page500,
                    }
                ]
            },
            {
                path: 'personal',
                name: 'personal',
                component: personal,
                children: [
                    {
                        path: 'personalCenter',
                        name: 'personalCenter',
                        component: personalCenter,
                    },
                    {
                        path: 'personalSetting',
                        name: 'personalSetting',
                        component: personalSetting,
                    }
                ]
            },
            {
                path: 'authoritySetting',
                name: 'authoritySetting',
                component: authoritySetting,
                children: [
                    {
                        path: 'userManagement',
                        name: 'userManagement',
                        component: userManagement,
                    },
                    {
                        path: 'roleManagement',
                        name: 'roleManagement',
                        component: roleManagement,
                    },
                    {
                        path: 'appAllocation',
                        name: 'appAllocation',
                        component: appAllocation,
                    },
                    {
                        path: 'operationRecord',
                        name: 'operationRecord',
                        component: operationRecord,
                    }
                ]
            },
            {
                path: 'setting',
                name: 'setting',
                component: setting,
                children: [
                    {
                        path: 'basicsInfo',
                        name: 'basicsInfo',
                        component: basicsInfo,
                    }
                ]
            }
        ]
    }
]


export const router = createRouter({
    history: createWebHashHistory(),
    routes: routerList
})
