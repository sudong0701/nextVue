<template>
    <div class="page404">
        <n-result status="404" title="404 资源不存在" description="别是一番滋味在心头">
            <template #footer>
                <n-button @click="goUserList">去用户列表页</n-button>
            </template>
        </n-result>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { NResult, NButton }  from 'naive-ui'
import { useRouter }  from 'vue-router'

export default defineComponent({
    components: {
        NResult,
        NButton
    },
    setup() {
        const router = useRouter()

        const goUserList = ()=> {
            router.push({
                name: 'userList'
            })
        }
        return {
            goUserList
        }
    },
})
</script>

<style lang="scss" scoped>
.page404 {
    padding-top: 100px;
}
</style>