<template>
    <div class="box">
        <dj-progres bg-width="330px" bg-height="17px" bg-color="#314175" in-color="f5cb6c" :value="valuePercent1"></dj-progres>
        <dj-progres bg-width="330px" bg-height="17px" bg-color="#314175" in-color="#4ae60e" :value="valuePercent2"></dj-progres>

        <!-- <div style="padding-top:100px;width:330px">
            <progress-bar :size="20" :val="valuePercent3" :text="valuePercent3+'%'" bg-color="#314175" bar-color="#4ae60e" :bar-border-radius="5" bar-transition="all 0.5s linear"/>
        </div> -->
    </div>
</template>

<script>
import DjProgres from "@/components/djProgress/index.vue";
import ProgressBar from 'vue-simple-progress'
export default {
    name: "test",
    components: {
        DjProgres,
        ProgressBar
    },
    data() {
        return {
            valuePercent1: 0,
            valuePercent2:33,
            valuePercent3:0
        };
    },
    created() {
        // this.changeValue1();
        // this.changeValue2();
    },
    mounted() {},
    methods: {
        // changeValue1() {
        //     let timer = setInterval(() => {
        //         this.valuePercent1++;
        //         if (this.valuePercent1 == 100) {
        //             clearInterval(timer);           
        //         }
        //     }, 30);
        // },
        // changeValue2() {
        //     let timer = setInterval(() => {
        //         this.valuePercent2++;
        //         if (this.valuePercent2 == 100) {
        //             clearInterval(timer);           
        //         }
        //     }, 30);
        // }
    },
};
</script>

<style lang="scss" scoped>
.box {
    width: 100%;
    height: 100%;
    background: blue;
}
</style>