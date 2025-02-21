<script>
import router from "../router";
export default {
    data() {
        return {
            choice: -1,
            card1: '',
            card2: 'red-card',
            card3: '',
            card4: '',
            tab_length: [0, 0, 0],
            barWidth: 0,
            barOffset: 0,
        }
    },
    watch: {
        choice: function (newValue, oldValue) {
            if (newValue === 0) {
                router.push('/')
                this.updateBar(0)
                this.card1 = ''
                this.card2 = 'red-card'
                this.card3 = ''
                this.card4 = ''
            }
            if (newValue === 1) {
                router.push('/details/buildings')
                this.updateBar(1)
                this.card1 = ''
                this.card2 = 'red-card'
                this.card3 = ''
                this.card4 = ''
            }
            if (newValue === 2) {
                router.push('/details/schoolmates')
                this.updateBar(2)
                this.card1 = ''
                this.card2 = ''
                this.card3 = 'red-card'
                this.card4 = ''
            }
            if (newValue === 3) {
                router.push('/details/history')
                this.updateBar(3)
                this.card1 = ''
                this.card2 = ''
                this.card3 = ''
                this.card4 = 'red-card'
            }
        }
    },
    mounted() {
        this.updateBar(1)
    },
    computed: {
        barStyle() {
            return {
                width: `${this.barWidth}px`,
                transform: `translate3d(${this.barOffset}px,0px,0px)`
            }
        }
    },
    methods: {
        updateBar(index) {
            const elemTabs = this.$refs.tabs.querySelectorAll('.header-text')
            //获取当前选中的元素
            const elemTab = elemTabs[index]
            this.barWidth = elemTab ? elemTab.offsetWidth - 80 : 0

            //计算需要移动的距离,当index > 0时进行累加
            if (index > 0) {
                let offset = 40
                for (let i = 0; i < index; i++) {
                    offset += elemTabs[i].offsetWidth
                }
                this.barOffset = offset
            } else {
                this.barOffset = 0
            }

        }
    }
}
</script>

<template>
    <div class="header clearfix">
        <div class="header-left leftfix">
            <img src="../assets/Homepage/logo.png" alt="WHU logo"
                style="height: 69px; width: 219px; margin-left: 21px; margin-top: 16px;">
        </div>
        <div ref="tabs" class="header-right rightfix">
            <div class="tab-bar" :style="barStyle"></div>

            <div ref="tab_bar0" class="border-right header-text to-cursor" :class="card1" @click="choice = 0">首页</div>
            <div ref="tab_bar1" class="border-right header-text to-cursor" :class="card2" @click="choice = 1">建筑剪影</div>
            <div ref="tab_bar2" class="border-right header-text to-cursor" :class="card3" @click="choice = 2">校友风采</div>
            <div ref="tab_bar3" class="header-text to-cursor" :class="card4" @click="choice = 3">百年历程</div>
        </div>
    </div>
    <div>
        <div class="gradient"></div>
        <div class="vertical-text"><b>WUHAN UNIVERSITY 130TH ANNIVERSARY</b></div>
    </div>
    <router-view></router-view>
</template>

<style scoped>
* {
    padding: 0px;
    margin: 0px;
}

.leftfix {
    float: left;
}

.rightfix {
    float: right;
}

.clearfix::after {
    content: '';
    display: block;
    clear: both;
}

.header {
    height: 100px;
    border-top: 1px solid transparent;
    border-bottom: 1px solid #797979;
    position: relative;
    z-index: 10;
}

.header-right {
    position: relative;
    top: 30px;
    right: 40px
}

.header-text {
    font-size: 24px;
    font-family: 'Microsoft YaHei';
    margin: 25px 0;
    padding: 0px 40px;
    display: inline-block;
    position: relative;
    bottom: 18px;
}

.border-right {
    border-right: 1px solid #777777;
    position: relative;
}

.tab-bar {
    position: absolute;
    left: 0;
    bottom: 20px;
    background-color: #ee4f87;
    height: 3px;
    transition: transform 300ms ease-in-out;
}

.to-cursor:hover {
    cursor: pointer;
}

.red-card {
    color: #ee4f87;
}

.gradient {
    position: absolute;
    width: 2.5vh;
    max-height: 50%;
    height: 30%;
    left: 2.5%;
    top: 26%;
    background-image: linear-gradient(to bottom, #FFB9C1, #a6d2d3);
    transition: background-image 0.5s ease-in-out infinite;
    z-index: 1;
}

.vertical-text {
    display: inline-block;
    position: absolute;
    z-index: 2;
    text-align: justify;
    writing-mode: vertical-rl;
    left: 2.5%;
    top: 37%;
    font-family: "Microsoft YaHei";
    font-size: 13px;
    color: gray;
    background: linear-gradient(to bottom, #ee4f87 0%, #FFB9C1 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    border-inline-color: transparent;
    border: 1px;
    /* max-height: 30%; */
    max-width: 1%;
}
</style>