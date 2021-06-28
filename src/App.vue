<template>
    <div class="app">
        <n-message-provider>
            <router-view></router-view>
        </n-message-provider>
    </div>

</template>

<script lang="ts">
import { useRoute, useRouter } from "vue-router";
import { NMessageProvider, NConfigProvider, darkTheme } from "naive-ui";
import { defineComponent, onMounted } from "vue";
import { menuOptions } from "./utils/config";
import { isEmpty } from "./utils/common";
import { menuItemConfig } from "./utils/config";

export default defineComponent({
    name: "App",
    components: {
        NMessageProvider,
        NConfigProvider,
    },
    setup() {
        const router = useRouter();

        router.beforeEach((to, from, next) => {
            if (isEmpty(to.name)) {
                next({ name: "404" });
            } else {
                let isMatch: boolean = false;
                for (let i = 0; i < menuOptions.length; i++) {
                    if (isEmpty(menuOptions[i].children)) {
                        if (menuOptions[i].key === to.name) {
                            isMatch = true;
                        }
                    } else {
                        for ( let j = 0; j < (menuOptions[i].children as Array<menuItemConfig>).length; j++ ) {
                            if ((menuOptions[i].children as Array<menuItemConfig>)[j].key === to.name) {
                                isMatch = true;
                            }
                        }
                    }
                }
                if (isMatch) {
                    next();
                } else {
                    next({ name: "404" });
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
