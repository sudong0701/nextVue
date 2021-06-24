<template>
    <div class="app">
        <n-message-provider>
            <router-view>

            </router-view>
        </n-message-provider>
    </div>

</template>

<script lang="ts">
import { NMessageProvider } from "naive-ui";
import { defineComponent } from "vue";

export default defineComponent({
    name: "App",
    components: {
        NMessageProvider,
    },
    setup() {

    },
});
</script>

<style lang="scss" scoped>
.app {
    height: 100%;
}
</style>
