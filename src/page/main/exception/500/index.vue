<template>
    <div class="page500">
        <n-result status="500" title="500 服务器错误" description="锦水汤汤，与君长诀。">
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
.page500 {
    padding-top: 100px;
}
</style>