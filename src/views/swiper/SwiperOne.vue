<template>
    <div class="swiper-box">
        <div class="item-one">
            <swiper
                class="swiper"
                :options="swiperOption1"
                ref="mySwiper1"
                @mouseover.native="mouseover(1)"
                @mouseout.native="mouseout(1)"
            >
                <swiper-slide
                    v-for="item in dataList"
                    :key="item.id"
                    :class="item.status == 1 ? 'status1' : 'status0'"
                >{{item.id}}</swiper-slide>
            </swiper>
            <div class="arrow">
                <div class="toprev" @click="handlePre(1)">↑</div>
                <div class="tonext" @click="handleNext(1)">↓</div>
            </div>
        </div>
        <div class="item-two">
            <swiper
                class="swiper"
                :options="swiperOption2"
                ref="mySwiper2"
                @mouseover.native="mouseover(2)"
                @mouseout.native="mouseout(2)"
            >
                <swiper-slide
                    v-for="item in dataList"
                    :key="item.id"
                    :class="item.status == 1 ? 'status1' : 'status0'"
                >{{item.id}}</swiper-slide>
            </swiper>
            <div class="arrow">
                <div class="toprev" @click="handlePre(2)">↑</div>
                <div class="tonext" @click="handleNext(2)">↓</div>
            </div>
        </div>
        <div class="item-three">
            <swiper
                class="swiper"
                :options="swiperOption3"
                ref="mySwiper3"
                @mouseover.native="mouseover(3)"
                @mouseout.native="mouseout(3)"
            >
                <swiper-slide
                    v-for="item in dataList"
                    :key="item.id"
                    :class="item.status == 1 ? 'status1' : 'status0'"
                >{{item.id}}</swiper-slide>
            </swiper>
            <div class="arrow">
                <div class="toprev" @click="handlePre(3)">↑</div>
                <div class="tonext" @click="handleNext(3)">↓</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "swiperone",
    data() {
        return {
            dataList: [
                {
                    id: 1,
                    status: 0,
                },
                {
                    id: 2,
                    status: 0,
                },
                {
                    id: 3,
                    status: 0,
                },
                {
                    id: 4,
                    status: 1,
                },
                {
                    id: 5,
                    status: 0,
                },
                {
                    id: 6,
                    status: 0,
                },
                {
                    id: 7,
                    status: 1,
                },
                {
                    id: 8,
                    status: 0,
                },
                {
                    id: 9,
                    status: 0,
                },
            ],
            swiperOption1: {
                direction: "vertical",
                loop: true,
                slidesPerView: 5,
                spaceBetween: 20,
                centeredSlides: true,
                autoplay: {
                    delay: 1500,
                    disableOnInteraction: false,
                },
            },
            swiperOption2: {
                direction: "vertical",
                loop: true,
                slidesPerView: 5,
                spaceBetween: 20,
                centeredSlides: true,
                autoplay: {
                    delay: 1500,
                    disableOnInteraction: false,
                },
            },
            swiperOption3: {
                direction: "vertical",
                loop: true,
                slidesPerView: 5,
                spaceBetween: 20,
                centeredSlides: true,
                autoplay: {
                    delay: 1500,
                    disableOnInteraction: false,
                },
            },
        };
    },
    computed: {
        swiper1() {
            return this.$refs.mySwiper1.swiper;
        },
        swiper2() {
            return this.$refs.mySwiper2.swiper;
        },
        swiper3() {
            return this.$refs.mySwiper3.swiper;
        },
    },
    created() {},
    mounted() {},
    methods: {
        mouseover(type) {
            if (type == 1) {
                this.swiper1.autoplay.stop();
            } else if (type == 2) {
                this.swiper2.autoplay.stop();
            } else if (type == 3) {
                this.swiper3.autoplay.stop();
            }
        },
        mouseout(type) {
            if (type == 1) {
                this.swiper1.autoplay.start();
            } else if (type == 2) {
                this.swiper2.autoplay.start();
            } else if (type == 3) {
                this.swiper3.autoplay.start();
            }
        },
        handlePre(type) {
            if (type == 1) {
                this.swiper1.slidePrev();
            } else if (type == 2) {
                this.swiper2.slidePrev();
            } else if (type == 3) {
                this.swiper3.slidePrev();
            }
        },
        handleNext(type) {
            if (type == 1) {
                this.swiper1.slideNext();
            } else if (type == 2) {
                this.swiper2.slideNext();
            } else if (type == 3) {
                this.swiper3.slideNext();
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.swiper-box {
    width: 100%;
    height: 300px;
    display: flex;
}
.swiper {
    width: 100%;
    height: 100%;
}
.item-one {
    flex: 1;
    margin-right: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.item-two {
    flex: 1;
    margin-right: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.item-three {
    flex: 1;
    margin-right: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.arrow {
    margin-left: 10px;
    cursor: pointer;
}
.status1 {
    background: red;
    color: #fff;
}
.status0 {
    background: blue;
    color: red;
}
</style>