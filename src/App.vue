<template>
    <div class="app">
        <n-message-provider>
            <router-view></router-view>
        </n-message-provider>
    </div>

</template>

<script lang="ts">
import { useRouter } from "vue-router";
import { NMessageProvider, NConfigProvider, darkTheme } from "naive-ui";
import { defineComponent } from "vue";
import { isEmpty } from "./utils/common";
import { routerList, routerConfig } from "./router";

export default defineComponent({
    name: "App",
    components: {
        NMessageProvider,
        NConfigProvider,
    },
    setup() {
        const router = useRouter();

        router.beforeEach((to, from, next) => {
            from
            if (isEmpty(to.name)) {
                next({ name: "global404" });
            } else {
                let isMatch: boolean = false;
                const matchFuc = (routerList: Array<routerConfig>) => {
                    for (let i = 0; i < routerList.length; i++) {
                        if (isEmpty(routerList[i].children)) {
                            if (routerList[i].name === to.name) {
                                isMatch = true;
                            }
                        } else {
                            matchFuc(routerList[i].children as Array<routerConfig>)
                        }
                    }
                };
                matchFuc(routerList)
                if (isMatch) {
                    next();
                } else {
                    next({ name: "global404" });
                }
            }
        });

        return {
            darkTheme,
        };
    },
});
</script>

<style lang="scss" scoped>
.app {
    height: 100%;
}
</style>
