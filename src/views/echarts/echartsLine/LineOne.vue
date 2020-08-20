<template>
    <div class="app-container">
        <div class="ehcarts" ref="echartsRef"></div>
    </div>
</template>

<script>
export default {
    name: "lineone",
    data() {
        return {
            echartsObj: null,
            line_option: {
                title: {
                    text: "不同区间不同颜色的折线图",
                    left: "center",
                },
                xAxis: {
                    type: "category",
                    data: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
                },
                yAxis: {
                    type: "value",
                    axisLabel: {
                        formatter: (v) => {
                            return this.tranNumber(v);
                        },
                    },
                },
                series: [
                    {
                        data: [
                            8200,
                            932000,
                            901,
                            934,
                            1290000,
                            1330000,
                            1320,
                            9990000,
                            88800000,
                            6660000,
                        ],
                        type: "line",
                        lineStyle: {
                            color: {
                                colorStops: [
                                    {
                                        offset: 0,
                                        color: "blue", // 第一段颜色-开始
                                    },
                                    {
                                        offset: 2 / 9,
                                        color: "blue", // 第一段颜色-结束
                                    },
                                    //
                                    {
                                        offset: 2 / 9,
                                        color: "red", // 第二段颜色-开始
                                    },
                                    {
                                        offset: 4 / 9,
                                        color: "red", // 第二段颜色-结束
                                    },

                                    {
                                        offset: 4 / 9,
                                        color: "yellow", // 第三段颜色-开始
                                    },
                                    {
                                        offset: 6 / 9,
                                        color: "yellow", // 第三段颜色-开始
                                    },
                                    {
                                        offset: 6 / 9,
                                        color: "blue", // 第四段颜色-开始
                                    },
                                    {
                                        offset: 1,
                                        color: "blue", // 第四段颜色-结束
                                    },
                                ],
                            },
                        },
                    },
                ],
            },
        };
    },
    mounted() {
        this.echartsObj = this.$echarts.init(this.$refs.echartsRef);
        console.log(this.echartsObj);
        if (this.echartsObj) {
            this.echartsObj.setOption(this.line_option);
        }
    },
    methods: {
        tranNumber(num) {
            var numStr = num.toString();
            // 十万以内直接返回
            if (numStr.length < 5) {
                return numStr;
            }
            //大于8位数是亿
            else if (numStr.length > 8) {
                var decimal = numStr.substring(
                    numStr.length - 8,
                    numStr.length - 8
                );
                return (
                    parseFloat(parseInt(num / 100000000) + "." + decimal) + "亿"
                );
            }
            //大于6位数是十万 (以10W分割 10W以下全部显示)
            else if (numStr.length > 5) {
                var decimal = numStr.substring(
                    numStr.length - 4,
                    numStr.length - 4
                );
                return parseFloat(parseInt(num / 10000) + "." + decimal) + "万";
            } else if (numStr.length == 5) {
                var decimal = numStr.substring(
                    numStr.length - 3,
                    numStr.length - 4
                );
                return parseFloat(parseInt(num / 10000) + "." + decimal) + "万";
            }
        },
    },
};
</script>
<style lang="scss" scoped>
// .ehcarts {
//     width: 100%;
//     height: 100%;
// }
::v-deep .ehcarts {
    width: 80%;
    height: 100%;
}
</style>