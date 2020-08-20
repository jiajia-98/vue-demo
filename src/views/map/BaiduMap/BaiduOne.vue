<template>
    <div class="app-container">
        <el-row class="location">
            <el-col :span="18">
                <el-input v-model="temp.address" placeholder="请输入地址来直接查找相关位置" clearable />
            </el-col>
            <el-col :span="6">
                <el-button style="margin-left:20px;" type="primary" @click="searchSite">定位</el-button>
            </el-col>
        </el-row>

        <baidu-map
            class="bm-view"
            :center="center"
            :zoom="6"
            :scroll-wheel-zoom="true"
            @click="getPoint"
            @ready="handler"
        >
            <bm-view class="map" />
            <bm-local-search
                :keyword="keyword"
                :auto-viewport="true"
                :location="location"
                style="width:0px;height:0px;overflow: hidden;"
            />
            <template v-for="(item,index) in routes">
                <bm-driving
                    :start="item.start"
                    :end="item.end"
                    :startCity="item.startCity"
                    :endCity="item.endCity"
                    :auto-viewport="true"
                    :panel="false"
                    @markersset="markersset"
                ></bm-driving>
            </template>
        </baidu-map>
    </div>
</template>

<script>
export default {
    name: "baiduone",
    data() {
        return {
            temp: {
                address: "",
                lng: "",
                lat: "",
            },
            center: {
                lng: 108.911638,
                lat: 34.356988,
            },
            location: "鹰潭市",
            keyword: "", // 地图搜索关键字
            routes: [
                {
                    id:1,
                    start: "鹰潭中臻铜业有限公司",
                    end: "太原火车站",
                    startCity: "鹰潭",
                    endCity: "太原",
                },
                {
                    id:1,
                    start: "鹰潭中臻铜业有限公司",
                    end: "西安火车站",
                    startCity: "鹰潭",
                    endCity: "西安",
                },
            ],
            routePoints:[]
        };
    },
    mounted() {
      // this.handler()
      //this.markersset()
    },
    methods: {
        getPoint(e) {
            console.log(e);
            // 地图点击事件 =》获取经纬度
            this.temp.lng = e.point.lng;
            this.temp.lat = e.point.lat;
            /* global BMap */
            const geocoder = new BMap.Geocoder(); // 创建地址解析器的实例
            geocoder.getLocation(e.point, (res) => {
                this.temp.address = res.address;
            });
        },

        searchSite() {
            // 定位
            this.keyword = this.temp.address;
        },
        handler({ BMap, map }) {
            // console.log(BMap);
            // console.log(map);
            // map.removeOverlay(this.routePoints[0].marker)
            // map.removeOverlay(this.routePoints[1].marker)
        },

        markersset(obj) {
          console.log(obj[0]);
          console.log(obj[1]);
          this.routePoints = obj;

        }
    },
};
</script>

<style lang="scss" scoped>
.bm-view {
    width: 100%;
    height: 90%;
}
.map {
    width: 100%;
    height: 100%;
}
.location {
    margin-bottom: 10px;
}
.BMap_Marker {
    display: none;
}
.BMap_noprint {
    display: none;
}
</style>
