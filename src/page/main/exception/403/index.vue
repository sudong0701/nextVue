<template>
    <div class="page403">
        <n-result status="403" title="403 禁止访问" description="问君能有几多愁，恰似一江春水向东流。">
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
.page403 {
    padding-top: 100px;
}
</style>