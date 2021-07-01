<template>
    <div class="ml-input">
        <NInput v-model:value="comValue" @update:value="update" :placeholder="placeholder" :disabled="disabled" :minlength="minlength" :round="round" :maxLength="maxLength" :clearable="clearable" @blur="blur" @clear="clear" @focus="focus"></NInput>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, onMounted, watch } from "vue";
import { NInput } from "naive-ui";
import { propsTypeEnum } from "./data.d";

export default defineComponent({
    name: "mlInput",
    components: {
        NInput,
    },
    props: {
        value: {
            //输入框的初始值
            type: [String, Number],
            default: "",
        },
        type: {
            //输入框类型
            type: String,
            default: "text", //text number decimal
        },
        decimal: {
            //保留的小数位
            type: [String, Number],
            default: 0,
        },
        maxLength: {
            //最大长度
            type: [Number],
            default: undefined,
        },
        minlength: {
            //最小长度
            type: [Number],
            default: undefined,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        placeholder: {
            type: String,
            default: "请输入",
        },
		round: {
			type:Boolean,
			default: false
		},
		clearable: {   //是否展示清空按钮
			type:Boolean,
			default: false
		}
    },
    emits: ["change", "update:value", "blur", "clear", "focus"],
    setup(props, { emit }) {
        const computedProps = computed(() => ({ ...props }));
        const comValue = ref<string | number>("");

        /**
         * 输入框值change时触发
         * @param {string} val 输入框的值
         * @return
         */
        const update = (val: string) => {
            if (props.type === propsTypeEnum.NUMBER) {
                val = val.replace(/[^\d]/g, "");
            } else if (props.type === propsTypeEnum.DECIMAL) {
                val = val.replace(/[^\d\.]/g, ""); //过滤非数字和.
                val = val
                    .replace(".", "$#$")
                    .replace(/\./g, "")
                    .replace("$#$", "."); //去除多余的.
                let regStr = "^(\\-)*(\\d+)\\.(";
                for (let i = 0; i < props.decimal; i++) {
                    regStr += "\\d";
                }
                regStr += ").*$";
                const decimalReg = new RegExp(regStr);
                val = val.replace(decimalReg, "$1$2.$3"); //小数点后最多 this.decimalLength 位
            } else if (props.type === propsTypeEnum.WORD) {
                val = val.replace(/[^A-Za-z0-9\u4e00-\u9fa5]/g, "");
            }
            comValue.value = val;
            emit("update:value", val);
        };

		/**
         * 输入框获焦时触发
         * @param {Event} e 事件参数
         * @return
         */
		const focus = (e:Event)=> {
			emit("focus", e)
		}

		/**
         * 输入框失焦时触发
         * @param {Event} e 事件参数
         * @return
         */
		const blur = (e:Event)=> {
			emit("blur", e)
		}

		/**
         * 点击清空按钮时触发
         * @param {Event} e 事件参数
         * @return
         */
		const clear = ()=> {
			emit("clear")
		}

        /**
         * 钩子函数(Vue实例挂载完成触发)
         * @param
         * @return
         */
        onMounted(() => {
            comValue.value = props.value;
        });

        /**
         * 监听输入框值改变
         * @param
         * @return
         */
        watch(
            () => {
                return props.value;
            },
            (val) => {
                comValue.value = val;
            }
        );

        return {
            computedProps,
			comValue,
            update,
			blur,
			focus,
			clear
        };
    },
});
</script>

<style lang="scss" scoped>
.ml-input {
    display: inline-block;
}
</style>
