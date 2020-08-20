<template>
    <div class="app-container">
        <div class="app-container">
            <div class="ehcarts" ref="echartsRef"></div>
        </div>
    </div>
</template>

<script>
import JSON from "../../../assets/json/city/jiangxi/yingtan/data.json";
export default {
    name: "mapcity",
    data() {
        return {
            echartsObj: null,
            map_option: {
                title: {
                    text: "鹰潭地图",
                    top: "3%",
                    left: "5%",
                    textStyle: {
                        fontSize: 18,
                        fontWeight: 500,
                        color: "#b6d7ff",
                    },
                },
                geo: {
                    map: "鹰潭",
                    label: {
                        normal: {
                            show: true,
                            color: "#000",
                        },
                        emphasis: {
                            show: true,
                            color: "#fff",
                        },
                    },
                    regions: [
                        {
                            name: "贵溪",
                            itemStyle: {
                                areaColor: "red",
                                color: "red",
                            },
                        },
                    ],
                    roam: false,
                    left: "5%",
                    right: "5%",
                    top: "5%",
                    bottom: "5%",
                },
                series: [],
            },
        };
    },
    mounted() {
        this.echartsObj = this.$echarts.init(this.$refs.echartsRef);
        this.$echarts.registerMap("鹰潭", JSON);

        console.log(this.map_option);
        if (this.echartsObj !== null) {
            this.echartsObj.setOption(this.map_option);
        }
    },
    methods: {},
};
</script>

<style lang="scss" scoped>
.ehcarts {
    width: 40%;
    height: 100%;
}
</style>