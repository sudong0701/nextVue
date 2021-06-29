<template>
    <div class="page404">
        <n-result status="404" title="404 资源不存在" description="别是一番滋味在心头">
            <template #footer>
                <n-button @click="goIssues">去提个Issues</n-button>
            </template>
        </n-result>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { NResult, NButton }  from 'naive-ui'

export default defineComponent({
    components: {
        NResult,
        NButton
    },
    setup() {
        const goIssues = ()=> {
            window.location.href = "https://github.com/sudong0701/nextVue/issues";
        }
        return {
            goIssues
        }
    },
})
</script>

<style lang="scss" scoped>
.page404 {
    padding-top: 100px;
}
</style>