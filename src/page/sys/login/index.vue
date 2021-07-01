<template>
    <div class="login">
        <div class="login-content">
            <div class="login-content-title">Vue3测试管理系统</div>
            <div class="login-content-info">
                <div class="login-content-username">
                    <n-input id="username" placeholder="请输入用户名" clearable v-model:value="loginInfo.username" @input="changeUsername">
                        <template #prefix>
                            <n-icon>
                                <person />
                            </n-icon>
                        </template>
                    </n-input>
                </div>
                <div class="login-content-password">
                    <n-input id="password" type="password" placeholder="请输入密码" clearable v-model:value="loginInfo.password" @input="changePassword">
                        <template #prefix>
                            <n-icon>
                                <lockClosed />
                            </n-icon>
                        </template>
                    </n-input>
                </div>

                <div class="login-content-next">
                    <n-button circle @click="goLogin">
                        <n-icon size="40" color="#fff">
                            <arrowForwardCircleSharp />
                        </n-icon>
                    </n-button>
                </div>

            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, getCurrentInstance, ComponentInternalInstance } from "vue";
import { NInput, NIcon, useMessage, NMessageProvider } from "naive-ui";
import { Person, LockClosed, ArrowForwardCircleSharp } from "@vicons/ionicons5";
import { isEmpty } from '../../../utils/common';
import { useRouter } from 'vue-router'
import { userInfoConfig } from './data'

interface loginInfoConfig {
    username: string;
    password: string;
}

export default defineComponent({
    components: {
        NInput,
        NIcon,
        Person,
        LockClosed,
        ArrowForwardCircleSharp,
        NMessageProvider,
    },
    setup() {
        const vueInstance: ComponentInternalInstance | null = getCurrentInstance();
        window.$message = useMessage()
        const router = useRouter()
        const loginInfo = reactive<loginInfoConfig>({
            username: "1006364428",
            password: "514273",
        });
        
        /**
         * 用户名输入框值改变时触发
         * @param
         * @return
         */
        const changeUsername = (e: string) => {
            loginInfo.username = e;
        };

        /**
         * 密码输入框值改变时触发
         * @param
         * @return
         */
        const changePassword = (e: string) => {
            loginInfo.password = e;
        };
        /**
         * 点击登录按钮时触发
         * @param
         * @return
         */
        const goLogin = () => {
            if(isEmpty(loginInfo.username)) {
                window.$message.error('请输入用户名')
                return
            }
            if(isEmpty(loginInfo.password)) {
                window.$message.error('请输入密码')
                return
            }
            (vueInstance as any).proxy.$axios
                .post(`http://116.62.141.204:3000/login`, loginInfo)
                .then((res:response<userInfoConfig>) => {
                    if (res.code === 200) {
                        router.push({
                            name: 'userList'
                        })
                    }
                });
        };

        return {
            loginInfo,
            changeUsername,
            changePassword,
            goLogin,
        };
    },
});
</script>

<style lang="scss" scoped>
@import "../../../assets/css/base.scss";
.login {
    position: relative;
    height: 100%;
    background: url("../../../assets/img/page/sys/login/login_bg.jpg");
    background-size: cover;
    .login-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: absolute;
        left: 0;
        right: 0;
        top: 50%;
        height: 220px;
        transform: translateY(-60%);
        background: rgb(31, 128, 239, 0.5);
        .login-content-title {
            font-size: 32px;
            margin-bottom: 48px;
            color: #fff;
        }
        .login-content-info {
            display: flex;
            flex-direction: row;
            > div {
                display: flex;
                flex-direction: row;
            }
            .login-content-password,
            .login-content-next {
                margin-left: $comMg;
            }
        }
    }
}
</style>
