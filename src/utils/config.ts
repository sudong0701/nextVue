import { h } from 'vue'
import { NIcon } from 'naive-ui'
import { PersonSharp, ListCircle, AlertCircleSharp, CheckmarkCircleSharp, Warning, Create, SettingsSharp, PeopleSharp } from '@vicons/ionicons5'
function renderIcon(icon:any):any {
    return () => h(NIcon, null, { default: () => h(icon) })
}

export interface menuItemConfig {
    label: string,
    key: string,
    icon?: any,
    children?:Array<menuItemConfig>
}


export const menuOptions:Array<menuItemConfig> = [
    {
        label: '列表页',
        key: 'list',
        icon: renderIcon(ListCircle),
        children: [
            {
                label: '用户列表',
                key: 'userList',
            },
            {
                label: '搜索列表',
                key: 'searchList',
            },
            {
                label: '查询表格',
                key: 'qyeryTable',
            },
            {
                label: '标准列表',
                key: 'standardList',
            },
            {
                label: '卡片列表',
                key: 'cardList',
            }
        ],
    },
    {
        label: '表单页',
        key: 'form',
        icon: renderIcon(Create),
        children: [
            {
                label: '基础表单',
                key: 'basicsForm'
            },
            {
                label: '分布表单',
                key: 'distributeForm'
            },
            {
                label: '高级表单',
                key: 'advancedForm'
            }
        ]
    },
    {
        label: '详情页',
        key: 'detail',
        icon: renderIcon(AlertCircleSharp),
        children: [
            {
                label: '基础详情页',
                key: 'basicsDetail',
            },
            {
                label: '高级详情页',
                key: 'advancedDetail',
            },
        ],
    },
    {
        label: '结果页',
        key: 'result',
        icon: renderIcon(CheckmarkCircleSharp),
        children: [
            {
                label: '成功页',
                key: 'success',
            },
            {
                label: '失败页',
                key: 'fail',
            },
        ],
    },
    {
        label: '异常页',
        key: 'exception',
        icon: renderIcon(Warning),
        children: [
            {
                label: '403',
                key: '403',
            },
            {
                label: '404',
                key: '404',
            },
            {
                label: '500',
                key: '500',
            },
        ],
    },
    {
        label: '个人页',
        key: 'personal',
        icon: renderIcon(PersonSharp),
        children: [
            {
                label: '个人中心',
                key: 'personalCenter',
            },
            {
                label: '个人设置',
                key: 'personalSetting',
            },
        ],
    },
    {
        label: '权限管理',
        key: 'authoritySetting',
        icon: renderIcon(PeopleSharp),
        children: [
            {
                label: '用户管理',
                key: 'userManagement',
            },
            {
                label: '角色管理',
                key: 'roleManagement',
            },
            {
                label: '应用分配',
                key: 'appAllocation',
            },
            {
                label: '操作记录',
                key: 'operationRecord',
            },
        ],
    },
    {
        label: '系统设置',
        key: 'setting',
        icon: renderIcon(SettingsSharp),
        children: [
            {
                label: '基础资料',
                key: 'basicsInfo',
            }
        ],
    },
]