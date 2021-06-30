<template>
    <div class="main">
        <n-layout has-sider class="main-layout">
            <!-- 使用深色模式 -->
            <n-config-provider :theme="darkTheme" style="height: 100%">
                <n-layout-sider class="main-layout-sider" :width="isCollapsed ? 96 : 208">
                    <div class="main-layout-logo">
                        <img src="../../assets/img/page/main/index/logo.png" alt="">
                        <span v-show="!isCollapsed">Next Vue</span>
                    </div>
                    <div class="main-layout-sider-content">
                        <n-menu v-model:value="menuValue" :options="menuOptions" @update:value="updateMenu" :default-expanded-keys="defaultExpandedKeys" :collapsed="isCollapsed" :collapsed-width="96"></n-menu>
                    </div>
                </n-layout-sider>
            </n-config-provider>

            <n-layout class="main-layout-box">
                <n-layout-header class="main-layout-header">
                    <div class="main-layout-header-box">

                        <div class="main-layout-header-shrink" @click="isCollapsed = !isCollapsed">
                            <n-icon size="26" color="#333" v-show="!isCollapsed" >
                                <Contract />
                            </n-icon>

                            <n-icon size="26" color="#333" v-show="isCollapsed">
                                <Expand />
                            </n-icon>

                        </div>

                        <div class="main-layout-header-title">
                            Vue3测试管理系统
                        </div>

                        <div class="main-layout-header-github" @click="goGithub">
                            <n-icon size="22" color="#333">
                                <LogoGithub />
                            </n-icon>
                        </div>

                        <div class="main-layout-header-message">
                            <n-popover trigger="hover">
                                <template #trigger>
                                    <n-badge value="12">
                                        <n-icon size="22" color="#333">
                                            <NotificationsOutline />
                                        </n-icon>
                                    </n-badge>
                                </template>
                                <span>装饰使用~</span>
                            </n-popover>

                        </div>

                        <n-popselect :options="popselectOptions" @update:value="logOut">
                            <n-avatar class="main-layout-header-avatar" circle :size="36" :src="avatar" />
                        </n-popselect>
                        <span class="main-layout-header-welcome">欢迎您，{{username}}</span>
                    </div>
                </n-layout-header>
                <n-layout-content class="main-layout-content">
                    <router-view></router-view>
                </n-layout-content>
            </n-layout>
        </n-layout>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, computed, ComputedRef } from "vue";
import { useRouter, onBeforeRouteUpdate, useRoute } from "vue-router";
import {
    NAnchor,
    NLayout,
    NLayoutSider,
    NLayoutHeader,
    NLayoutContent,
    NMenu,
    NConfigProvider,
    darkTheme,
    NAvatar,
    NPopselect,
    NBadge,
    NIcon,
    NPopover,
    NBreadcrumb,
    NBreadcrumbItem,
} from "naive-ui";
import { NotificationsOutline, LogoGithub, Expand, Contract } from "@vicons/ionicons5";
import { menuOptions } from "../../utils/config";
import avatar from "../../assets/img/page/main/index/avatar.jpg";
import { useStore } from 'vuex'

const popselectOptions = [
    {
        label: "退出登录",
        value: "logOut",
    },
];

export default defineComponent({
    components: {
        NIcon,
        NAnchor,
        NLayout,
        NLayoutSider,
        NLayoutHeader,
        NLayoutContent,
        NMenu,
        NAvatar,
        NConfigProvider,
        NPopselect,
        NBadge,
        NotificationsOutline,
        Expand,
        Contract,
        LogoGithub,
        NPopover,
        NBreadcrumb,
        NBreadcrumbItem,
    },
    setup() {
        const router = useRouter();
        const store = useStore()
        const username:ComputedRef<string> = computed(()=> store.getters.username)
        const menuValue = ref<string>("");
        const defaultExpandedKeys = ref<string[]>([]);
        const isCollapsed = ref<boolean>(false)
        /**
         * 路由钩子函数(路由更新前触发)
         * @param
         * @return
         */
        onBeforeRouteUpdate((to: any, from: any, next: any) => {
            from
            menuValue.value = to.name;
            next();
        });
        /**
         * 钩子函数(Vue实例挂载完成触发)
         * @param
         * @return
         */
        onMounted(() => {
            (menuValue as any).value = useRoute().name;
        });
        /**
         * 点击退出登录触发
         * @param
         * @return
         */
        const logOut = () => {
            router.push({
                name: "login",
            });
        };
        /**
         * 点击github头像时触发
         * @param
         * @return
         */
        const goGithub = () => {
            window.location.href = "https://github.com/sudong0701/nextVue";
        };

        /**
         * 菜单项改变时触发
         * @param {String} routerName 改变后的路由name
         * @return
         */
        const updateMenu = (routerName: string) => {
            router.push({
                name: routerName,
            });
        };

        return {
            menuValue,
            defaultExpandedKeys,
            isCollapsed,
            menuOptions,
            avatar,
            darkTheme,
            popselectOptions,
            logOut,
            goGithub,
            updateMenu,
            username
        };
    },
});
</script>

<style lang="scss" scoped>
@import "../../assets/css/base.scss";
.main {
    height: 100%;
    .main-layout {
        height: 100%;
        .main-layout-sider {
            height: 100%;
            transition: all .3s !important;
            .main-layout-logo {
                display: flex;
                align-items: center;
                justify-content: center;
                padding: $comMg;
                img {
                    width: 32px;
                }
                span {
                    margin-left: $elMg;
                    color: #fff;
                    font-weight: bold;
                    font-size: 18px;
                }
            }
        }
        .main-layout-box {
            display: flex;
            flex-direction: column;
            background: #f0f2f5;
            .main-layout-header {
                background: #fff;
                .main-layout-header-box {
                    position: relative;
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-end;
                    align-items: center;
                    padding: $elMg $sBMg;
                    min-width: 800px;
                    overflow-x: auto;
                    .main-layout-header-shrink {
                        position: absolute;
                        left: $comMg;
                        width: 26px;
                        height: 26px;
                        cursor: pointer;
                    }
                    .main-layout-header-title {
                        position: absolute;
                        left: 64px;
                        font-size: 26px;
                        font-weight: bold;
                    }
                    .main-layout-header-github {
                        cursor: pointer;
                    }
                    .main-layout-header-message {
                        margin: 0 $bBMg 0 $comMg;
                        cursor: pointer;
                    }
                    .main-layout-header-avatar {
                        margin-right: $elMg;
                        cursor: pointer;
                    }
                    .main-layout-header-welcome {
                        margin-left: $elMg;
                    }
                }
            }
            .main-layout-content {
                flex: 1;
                padding: $comMg;
                background: rgb(240, 242, 245);
            }
        }
    }
}
</style>
