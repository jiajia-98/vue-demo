<template>
    <div class="dj-progress" :style="stylebg">
        <div class="progress-inline" :style="stylein">
            <div class="progress-present" :style="stylenum">{{value}}</div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        bgHeight:{
          type:String,
          defalut:"17px"
        },
        bgWidth:{
          type:String,
          defalut:"330px"
        },
        bgColor:{
          type:String,
          defalut:"black"
        },
        inColor:{
          type:String,
          defalut:"#fff"
        },
        value:{
            type:Number,
            default:0
        }
    },
    data() {
        return {
            stylebg: {
                width: "330px",
                height: "17px",
                background: "#314175",
                borderRadius: "5px",
            },
            stylein: {
                position: "relative",
                width: "0px",
                height: "17px",
                background: "#4fa6cc",
                borderRadius: "5px",
                transition: "width .5s ease"
            },
            stylenum: {
                position: "absolute",
                right: "-30px",
                color: "#fff",
                opacity: "0.5",
            },
            percent: 0,
        };
    },
    mounted() {
      this.handleStyle();
      this.handleValue();
    },
    methods: {
      handleStyle() {
        this.stylebg.width = this.bgWidth;
        this.stylebg.height = this.bgHeight;
        this.stylein.height = this.bgHeight;
        this.stylebg.background = this.bgColor;
        this.stylein.background = this.inColor
      },
      handleValue() {
        let bgLength = document.querySelector(".dj-progress").clientWidth;
        let inLength = (this.value / 100) * bgLength;
        this.stylein.width = inLength + "px";
      },
    },
    watch: {
        value(newValue, oldValue) {
            if(newValue){
                this.handleValue();
            }
        }
    },
}
</script>

<style lang="scss" scoped>
</style>