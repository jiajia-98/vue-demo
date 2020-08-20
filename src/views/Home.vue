<template>
    <div class="home-container">
        <el-container>
            <el-header>
                <h3>巴佳巴佳</h3>
                <div>{{dateDay}}&nbsp;{{dateSecond}}</div>
                <h3>欢迎您！</h3>
            </el-header>
            <el-container>
                <el-aside width="200px">
                    <el-menu
                        default-active="firstpage"
                        background-color="#545c64"
                        text-color="#fff"
                        active-text-color="#ffd04b"
                        router
                    >
                        <el-menu-item index="firstpage">
                            <i class="el-icon-menu"></i>
                            <span slot="title">首页</span>
                        </el-menu-item>
                        <el-menu-item index="test">
                            <i class="el-icon-document"></i>
                            <span slot="title">测试组件</span>
                        </el-menu-item>
                        <el-menu-item index="mapone">
                            <i class="el-icon-document"></i>
                            <span slot="title">地图重庆</span>
                        </el-menu-item>
                        <el-menu-item index="mapcity">
                            <i class="el-icon-document"></i>
                            <span slot="title">地图鹰潭</span>
                        </el-menu-item>
                        <el-menu-item index="maptwo">
                            <i class="el-icon-document"></i>
                            <span slot="title">地图江西</span>
                        </el-menu-item>
                        <el-menu-item index="mapchina">
                            <i class="el-icon-document"></i>
                            <span slot="title">地图中国</span>
                        </el-menu-item>
                        <el-menu-item index="baiduone">
                            <i class="el-icon-document"></i>
                            <span slot="title">百度地图一</span>
                        </el-menu-item>
                        <el-menu-item index="lineone">
                            <i class="el-icon-document"></i>
                            <span slot="title">x轴区间不同颜色折线图</span>
                        </el-menu-item>
                        <el-menu-item index="swiperone">
                            <i class="el-icon-document"></i>
                            <span slot="title">swiper</span>
                        </el-menu-item>
                        
                    </el-menu>
                </el-aside>
                <el-main>
                    <router-view />
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
export default {
    name: "home",
    data() {
        return {
            dateDay: "",
            dateSecond: "",
        };
    },
    created() {
        this.handleTime();
    },
    methods: {
        handleTime() {
            setInterval(() => {
                let date = new Date();
                let year = date.getFullYear();
                let month =
                    date.getMonth() + 1 >= 10
                        ? date.getMonth() + 1
                        : "0" + (date.getMonth()+1);
                let day =
                    date.getDate() >= 10
                        ? date.getDate()
                        : "0" + date.getDate();

                let date1 = `${year}.${month}.${day}`;

                let hour =
                    date.getHours() >= 10
                        ? date.getHours()
                        : "0" + date.getHours();
                let minute =
                    date.getMinutes() >= 10
                        ? date.getMinutes()
                        : "0" + date.getMinutes();
                let second =
                    date.getSeconds() >= 10
                        ? date.getSeconds()
                        : "0" + date.getSeconds();
                let date2 = `${hour}:${minute}:${second}`;
                this.dateDay = date1;
                this.dateSecond = date2;
            }, 1000);
        },
    },
};
</script>

<style lang="scss" scoped>
.home-container {
    width: 100%;
    height: 100%;
}
.el-container {
    width: 100%;
    height: 100%;
    .el-header {
        background: #3264ec;
        color: #fff;
        line-height: 60px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 22px;
    }
    .el-aside {
        height: 100%;
        .el-menu {
            height: 100%;
        }
    }
}
</style>

