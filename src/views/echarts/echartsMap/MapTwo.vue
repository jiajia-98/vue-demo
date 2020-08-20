<template>
    <div class="app-container">
        <div class="ehcarts" ref="echartsRef"></div>
    </div>
</template>

<script>
import JSON from "echarts/map/json/province/jiangxi.json";
export default {
    name: "maptwo",
    data() {
        return {
            echartsObj: null,
            geoCoordMap: {
                赣州市: [114.940278, 25.85097],
                吉安市: [114.986373, 27.111699],
                上饶市: [117.971185, 28.44442],
                九江市: [115.992811, 29.712034],
                抚州市: [116.358351, 27.98385],
                宜春市: [114.391136, 27.8043],
                南昌市: [115.892151, 28.676493],
                景德镇市: [117.214664, 29.29256],
                萍乡市: [113.852186, 27.622946],
                鹰潭市: [117.033838, 28.238638],
                新余市: [114.930835, 27.810834],
            },
            map_option: {
                title: {
                    text: "江西地图",
                    top: "3%",
                    left: "5%",
                    textStyle: {
                        fontSize: 18,
                        fontWeight: 500,
                        color: "#b6d7ff",
                    },
                },
                geo: {
                    map: "江西",
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
                    roam: false,
                    regions: [
                        {
                            name: "南昌市",
                            itemStyle: {
                                areaColor: "red",
                                color: "red",
                            },
                        },
                        {
                            name: "鹰潭市",
                            itemStyle: {
                                areaColor: "blue",
                                color: "blue",
                            },
                        },
                        {
                            name: "抚州市",
                            itemStyle: {
                                areaColor: "green",
                                color: "green",
                            },
                        },
                        {
                            name: "上饶市",
                            itemStyle: {
                                areaColor: "yellow",
                                color: "yellow",
                            },
                        },
                        {
                            name: "景德镇市",
                            itemStyle: {
                                areaColor: "purple",
                                color: "purple",
                            },
                        },
                        {
                            name: "九江市",
                            itemStyle: {
                                areaColor: "orange",
                                color: "orange",
                            },
                        },
                        {
                            name: "宜春市",
                            itemStyle: {
                                areaColor: "blue",
                                color: "blue",
                            },
                        },
                        {
                            name: "新余市",
                            itemStyle: {
                                areaColor: "yellow",
                                color: "yellow",
                            },
                        },
                        {
                            name: "吉安市",
                            itemStyle: {
                                areaColor: "orange",
                                color: "orange",
                            },
                        },
                        {
                            name: "赣州市",
                            itemStyle: {
                                areaColor: "purple",
                                color: "purple",
                            },
                        },
                        {
                            name: "萍乡市",
                            itemStyle: {
                                areaColor: "purple",
                                color: "purple",
                            },
                        },
                    ],
                    left: "5%",
                    right: "5%",
                    top: "5%",
                    bottom: "5%",
                },
                series: [],
            },
        };
    },
    created() {},
    mounted() {
        this.echartsObj = this.$echarts.init(this.$refs.echartsRef);
        this.$echarts.registerMap("江西", JSON);
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