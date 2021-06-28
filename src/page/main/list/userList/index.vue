<template>
    <div>
        <n-data-table :columns="columns" :data="data" :pagination="pagination" />
    </div>
</template>

<script lang="ts">
import { h, defineComponent } from "vue";
import { NDataTable, NTag, NButton } from "naive-ui";

const createColumns = () => {
    return [
        {
            title: "Name",
            key: "name",
        },
        {
            title: "Age",
            key: "age",
        },
        {
            title: "Address",
            key: "address",
        },
        {
            title: "Tags",
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
            title: "Action",
            key: "actions",
            render(row: any) {
                return h(
                    NButton,
                    {
                        size: "small",
                    },
                    { default: () => "Send Email" }
                );
            },
        },
    ];
};

const createData = () => [
    {
        key: 0,
        name: "John Brown",
        age: 32,
        address: "New York No. 1 Lake Park",
        tags: ["nice", "developer"],
    },
    {
        key: 1,
        name: "Jim Green",
        age: 42,
        address: "London No. 1 Lake Park",
        tags: ["wow"],
    },
    {
        key: 2,
        name: "Joe Black",
        age: 32,
        address: "Sidney No. 1 Lake Park",
        tags: ["cool", "teacher"],
    },
];

export default defineComponent({
    components: {
        NDataTable,
        NTag,
        NButton,
    },
    setup() {
        return {
            data: createData(),
            columns: createColumns(),
            pagination: {
                pageSize: 10,
            },
        };
    },
});
</script>