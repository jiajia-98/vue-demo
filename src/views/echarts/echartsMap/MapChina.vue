<template>
    <div class="app-container">
        <div class="ehcarts-china" ref="echartsRef"></div>
    </div>
</template>

<script>
import "echarts/map//js/china.js"
export default {
    name: "mapchina",
    data() {
        return {
            echartsObj: null,
            map_option: {
                title: {
                    text: "中国地图",
                    textStyle: {
                        fontSize: 18,
                        fontWeight: 500,
                        color: "#b6d7ff",
                    },
                },
                geo: {
                    map: "china",
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
                    itemStyle: {
                        areaColor: "#2ca2e6",
                        borderColor: "#fff",
                    },
                    emphasis: {
                        itemStyle: {
                            areaColor: "#a1d1e5",
                            borderColor: "#fff",
                        },
                    },
                    regions: [
                        {
                            name: "江西",
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
                series: [
                    {
                        type: "effectScatter",
                        coordinateSystem: "geo",
                        showEffectOn: "render",
                        zlevel: 1,
                        rippleEffect: {
                            period: 15,
                            scale: 4,
                            brushType: "fill",
                        },
                        hoverAnimation: true,
                        label: {
                            normal: {
                                formatter: "{b}",
                                position: "right",
                                offset: [15, 0],
                                color: "#1DE9B6",
                                show: true,
                            },
                        },
                        itemStyle: {
                            normal: {
                                color: "#1DE9B6",
                                /* function (value){ //随机颜色
                                        return "#"+("00000"+((Math.random()*16777215+0.5)>>0).toString(16)).slice(-6);
                                }*/
                                shadowBlur: 10,
                                shadowColor: "#333",
                            },
                        },
                        symbolSize: 12,
                        data: [
                            {
                                value: [118.8062, 31.9208],
                                itemStyle: { color: "#4ab2e5" },
                            },
                            {
                                value: [127.9688, 45.368],
                                itemStyle: { color: "#4fb6d2" },
                            },
                            {
                                value: [110.3467, 41.4899],
                                itemStyle: { color: "#52b9c7" },
                            },
                            {
                                value: [125.8154, 44.2584],
                                itemStyle: { color: "#5abead" },
                            },
                            {
                                value: [116.4551, 40.2539],
                                itemStyle: { color: "#f34e2b" },
                            },
                            {
                                value: [123.1238, 42.1216],
                                itemStyle: { color: "#f56321" },
                            },
                            {
                                value: [114.4995, 38.1006],
                                itemStyle: { color: "#f56f1c" },
                            },
                            {
                                value: [117.4219, 39.4189],
                                itemStyle: { color: "#f58414" },
                            },
                            {
                                value: [112.3352, 37.9413],
                                itemStyle: { color: "#f58f0e" },
                            },
                            {
                                value: [109.1162, 34.2004],
                                itemStyle: { color: "#f5a305" },
                            },
                            {
                                value: [103.5901, 36.3043],
                                itemStyle: { color: "#e7ab0b" },
                            },
                            {
                                value: [106.3586, 38.1775],
                                itemStyle: { color: "#dfae10" },
                            },
                            {
                                value: [101.4038, 36.8207],
                                itemStyle: { color: "#d5b314" },
                            },
                            {
                                value: [103.9526, 30.7617],
                                itemStyle: { color: "#c1bb1f" },
                            },
                            {
                                value: [108.384366, 30.439702],
                                itemStyle: { color: "#b9be23" },
                            },
                            {
                                value: [113.0823, 28.2568],
                                itemStyle: { color: "#a6c62c" },
                            },
                            {
                                value: [102.9199, 25.46639],
                                itemStyle: { color: "#96cc34" },
                            },
                            { value: [117.07, 28.27] },
                            { value: [87.9236, 43.5883] },
                            
                        ],
                    }, //地图线的动画效果
                    {
                        type: "lines",
                        zlevel: 2,
                        effect: {
                            show: true,
                            period: 4, //箭头指向速度，值越小速度越快
                            trailLength: 0.4, //特效尾迹长度[0,1]值越大，尾迹越长重
                            symbol: "arrow", //箭头图标
                            symbolSize: 7, //图标大小
                        },
                        lineStyle: {
                            normal: {
                                color: "#1DE9B6",
                                /* function (value){ //随机颜色
                                    ['#f21347','#f3243e','#f33736','#f34131','#f34e2b',
                                    '#f56321','#f56f1c','#f58414','#f58f0e','#f5a305',
                                    '#e7ab0b','#dfae10','#d5b314','#c1bb1f','#b9be23',
                                    '#a6c62c','#96cc34','#89d23b','#7ed741','#77d64c',
                                    '#71d162','#6bcc75','#65c78b','#5fc2a0','#5abead',
                                    '#52b9c7','#4fb6d2','#4ab2e5']
                                return "#"+("00000"+((Math.random()*16777215+0.5)>>0).toString(16)).slice(-6);
                                }*/
                                width: 1, //线条宽度
                                opacity: 0.1, //尾迹线条透明度
                                curveness: 0.3, //尾迹线条曲直度
                            },
                        },
                        data: [
                            {
                                coords: [
                                    [117.07, 28.27],
                                    [118.8062, 31.9208],
                                ],
                                lineStyle: { color: "#4ab2e5" },
                            },
                            {
                                coords: [
                                    [117.07, 28.27],
                                    [127.9688, 45.368],
                                ],
                                lineStyle: { color: "#4fb6d2" },
                            },
                            {
                                coords: [
                                    [117.07, 28.27],
                                    [110.3467, 41.4899],
                                ],
                                lineStyle: { color: "#52b9c7" },
                            },
                            {
                                coords: [
                                    [117.07, 28.27],
                                    [125.8154, 44.2584],
                                ],
                                lineStyle: { color: "#5abead" },
                            },
                            {
                                coords: [
                                    [117.07, 28.27],
                                    [116.4551, 40.2539],
                                ],
                                lineStyle: { color: "#f34e2b" },
                            },
                            {
                                coords: [
                                    [117.07, 28.27],
                                    [123.1238, 42.1216],
                                ],
                                lineStyle: { color: "#f56321" },
                            },
                            {
                                coords: [
                                    [117.07, 28.27],
                                    [114.4995, 38.1006],
                                ],
                                lineStyle: { color: "#f56f1c" },
                            },
                            {
                                coords: [
                                    [117.07, 28.27],
                                    [117.4219, 39.4189],
                                ],
                                lineStyle: { color: "#f58414" },
                            },
                            {
                                coords: [
                                    [117.07, 28.27],
                                    [112.3352, 37.9413],
                                ],
                                lineStyle: { color: "#f58f0e" },
                            },
                            {
                                coords: [
                                    [117.07, 28.27],
                                    [109.1162, 34.2004],
                                ],
                                lineStyle: { color: "#f5a305" },
                            },
                            {
                                coords: [
                                    [117.07, 28.27],
                                    [103.5901, 36.3043],
                                ],
                                lineStyle: { color: "#e7ab0b" },
                            },
                            {
                                coords: [
                                    [117.07, 28.27],
                                    [106.3586, 38.1775],
                                ],
                                lineStyle: { color: "#dfae10" },
                            },
                            {
                                coords: [
                                    [117.07, 28.27],
                                    [101.4038, 36.8207],
                                ],
                                lineStyle: { color: "#d5b314" },
                            },
                            {
                                coords: [
                                    [117.07, 28.27],
                                    [103.9526, 30.7617],
                                ],
                                lineStyle: { color: "#c1bb1f" },
                            },
                            {
                                coords: [
                                    [117.07, 28.27],
                                    [108.384366, 30.439702],
                                ],
                                lineStyle: { color: "#b9be23" },
                            },
                            {
                                coords: [
                                    [117.07, 28.27],
                                    [113.0823, 28.2568],
                                ],
                                lineStyle: { color: "#a6c62c" },
                            },
                            {
                                coords: [
                                    [117.07, 28.27],
                                    [102.9199, 25.46639],
                                ],
                                lineStyle: { color: "#96cc34" },
                            },
                            {
                                coords: [
                                    [117.07, 28.27],
                                    [87.9236, 43.5883],
                                ],
                                lineStyle: { color: "#96cc34" },
                            },
                            
                        ],
                    },
                ],
            },
        };
    },
    mounted() {
        this.echartsObj = this.$echarts.init(this.$refs.echartsRef);
        // this.$echarts.registerMap("中国", JSON);
        if (this.echartsObj !== null) {
            this.echartsObj.setOption(this.map_option, true);
        }
    },
    methods: {},
};
</script>

<style lang="scss" scoped>
.ehcarts-china {
    width: 75%;
    height: 100%;
}
</style>