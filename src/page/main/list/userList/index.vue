<template>
    <div>
        <ml-input v-model:value="inputData.value" @update:value="update" clearable></ml-input>
        <n-data-table :columns="columns" :data="data" :pagination="pagination" />
    </div>
</template>

<script lang="ts">
import { h, defineComponent, ref, reactive } from "vue";
import { NDataTable, NTag, NButton } from "naive-ui";
import { useStore } from "vuex";

interface createDataConfig {
    key: number;
    name: string;
    age: number;
    address: string;
    tags: Array<string>;
}

const createColumns = (changeUsername: Function) => {
    return [
        {
            title: "姓名",
            key: "name",
        },
        {
            title: "年龄",
            key: "age",
        },
        {
            title: "地址",
            key: "address",
        },
        {
            title: "标签",
            key: "tags",
            render(row: any) {
                const tags = row.tags.map((tagKey: any) => {
                    return h(
                        NTag,
                        {
                            style: {
                                marginRight: "6px",
                            },
                            type: "info",
                        },
                        {
                            default: () => tagKey,
                        }
                    );
                });
                return tags;
            },
        },
        {
            title: "操作",
            key: "actions",
            render(row: createDataConfig) {
                return h(
                    NButton,
                    {
                        size: "small",
                        onClick: () => changeUsername(row),
                    },
                    { default: () => "改变用户" }
                );
            },
        },
    ];
};

const createData = (): Array<createDataConfig> => [
    {
        key: 0,
        name: "树洞丶",
        age: 27,
        address: "江苏省南京市雨花台区",
        tags: ["游戏人生", "程序员"],
    },
    {
        key: 1,
        name: "龙少丶",
        age: 27,
        address: "山东省青岛市即墨区",
        tags: ["酒桶", "程序员"],
    },
    {
        key: 2,
        name: "林少丶",
        age: 23,
        address: "内蒙古自治区鄂尔多斯市",
        tags: ["搞笑担当"],
    },
    {
        key: 3,
        name: "举少丶",
        age: 24,
        address: "广东省广州市",
        tags: ["运动大人", "程序员"],
    },
];

export default defineComponent({
    components: {
        NDataTable,
        NTag,
        NButton,
    },
    setup() {
        const store = useStore();
        const inputData = reactive({ value: "" });
        /**
         * 改变vuex里的username
         * @param
         * @return
         */
        const changeUsername = (rowData: createDataConfig) => {
            store.commit("SET_USERNAME", rowData.name);
        };

        return {
            inputData,
            data: createData(),
            columns: createColumns(changeUsername),
            pagination: {
                pageSize: 10
            },
            /**
             * 输入框值change时触发
             * @param
             * @return
             */
            update() {
                
            }
        };
    },
});
</script>