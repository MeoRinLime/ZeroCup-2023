<script>
export default {
    data() {
        return {
            choice: 0,
            style_choosebar1: 'chosen',
            style_choosebar2: 'not-chosen',
            year_choice: 0,
            text_short: [
                '自强学堂成立',
                '狮子山宿舍',
                '侵华日军航拍武大照片',

                '国立武汉大学珞珈山校舍第一校门',
                '新武大诞生',
                '百卅校庆',
            ],
            imgs: [
                '/src/assets/History/自强学堂.jpg',
                '/src/assets/History/狮子山宿舍.jpeg',
                '/src/assets/History/武大航拍图.jpg',
                '/src/assets/History/校门.jpeg',
                '/src/assets/History/新武大成立.jpg',
                '/src/assets/History/百卅校庆.jpg',
            ],
            display_mode_img: '',
            display_mode_text: 'display-none',
            year: [1893, 1932, 1938, 1946, 2000, 2023],
            title: [
                '自强学堂成立',
                '狮子山宿舍',
                '侵华日军航拍武大照片',
                '武大迁回珞珈山',
                '新武大诞生',
                '百卅校庆'],
            text: ['武汉大学的前身是清末湖广总督张之洞创办的自强学堂。1893年，湖广总督张之洞在武昌创办自强学堂，开设方言（即外国语言）、算学、格致、商务四门，专门培养外语和商务人才。1902年自强学堂更名为方言学堂。辛亥革命后，北洋政府以方言学堂为基础，于1913年建立国立武昌高等师范学校。1923年更名为国立武昌师范大学，1925年又更名为国立武昌大学。',
                '狮子山宿舍（也叫老斋舍）是武汉大学最早的学生宿舍，也是校园早期建筑群之一，于1930年3月开工建设，1931年9月竣工。有四栋宿舍组成，这四栋宿舍由三座罗马券拱门连为一体。以花岗岩的灰色为主色调，入口处修建有多层阶梯（百步梯）。1932年春，全校师生迁入狮子山新校舍。',
                '1938年，日军侵华，学校西迁四川乐山，农学院并入中央大学。该照片为侵华日军于1938年航拍的武汉大学全景照，是武汉大学民国时期唯一一张航拍照。张照片涵盖了当时武汉大学珞珈山全景，图书馆、文法理工学院、男女生宿舍、宋卿体育馆、华中水工试验所等建筑群错落有致，进入武汉大学的两条路及校园背后的东湖清晰可见。在离教学区不远处的珞珈山脚下，有数个村湾。',
                '1946年10月武汉大学迁回武昌珞珈山。至1946年底，学校已设有"文法理工农医"六大学院，包括21个系和8个研究所，在国内外享有很高声望。中华人民共和国成立后，武汉大学办学规模进一步扩大，教学质量和科研水平进一步提高。1952年全国高校院系调整，武汉大学成为直属中华人民共和国教育部领导的重点文理综合大学。改革开放以来，武汉大学发展速度加快，总体水平有了很大提高，办学规模进一步扩大，办学实力进一步增强，现已形成多学科综合发展、多种办学层次并存的格局。',
                '2000年8月2日，武汉大学、武汉水利电力大学、武汉测绘科技大学、湖北医科大学合并成组建新的武汉大学。新武汉大学办学规模扩大，学科门类更加齐全，师资力量更加雄厚，实现了强强联合、优势互补，形成了实现跨越式发展、建设世界一流和知名高水平大学的强大综合优势。',

                '时光荏苒，武大百卅诞辰将至。时代潮头，始终有武大人的身影。也许我们的大学生涯仅仅只是130年校史中的恍惚一刻，但令人感动的瞬间在眼前交织，难以忘怀的光景于脑海上演。这些真切可感的细节，这些共克时艰的痕迹，这些掩藏于微末的爱、责任与坚守，才是我们所深爱的武大。'],
        }
    },
    watch: {
        choice: function (newValue, oldValue) {
            if (newValue === 0) {
                this.style_choosebar1 = 'chosen'
                this.style_choosebar2 = 'not-chosen'
                this.display_mode_img = ''
                this.display_mode_text = 'display-none'
            }
            if (newValue === 1) {
                this.style_choosebar1 = 'not-chosen'
                this.style_choosebar2 = 'chosen'
                this.display_mode_img = 'display-none'
                this.display_mode_text = ''
            }
        },
        year_choice: function (newValue, oldValue) {
            if (newValue === 1893) {
                this.text_short
                console.log(newValue);
            }
        }
    }
}
</script>

<template>
    <img src="/src/assets/History/页面背景2.png" alt=""
        style="width: 100%;  height: 87%;  top: 13%;  z-index: -1;  position: absolute;">
    <!-- <div>
        <div class="gradient"></div>
        <div class="vertical-text"><b>WUHAN UNIVERSITY 130TH ANNIVERSARY</b></div>
    </div> -->
    <!-- <div style="background: url('/src/assets/History/页面背景2.png') center center no-repeat;    background-size: 100% 100%; width: 100%; height: 100%;"> -->
    <div class="container clearfix">
        <!-- <img src="../assets/History/页面背景2.png" style="position: relative; z-index: -99;"> -->
        <div class="left leftfix">
            <!-- <img src="../assets/History/装饰块.png" alt=""
                style="width: 61px; height: 61px; margin-top: 600px; margin-bottom: 200px;"> -->
        </div>
        <div class="right rightfix">


            <div style="position: absolute; top: 60%; left: -9%;">
                <img src="../assets/History/装饰块.png" alt="" style="width: 61px; height: 61px;">
            </div>
            <div style="position: absolute; top: 72%; left: -9%; background-color: #E9A9C0; height: 2px; width: 61px;"></div>
            <div style="position: absolute; top: 74%; left: -9%; background-color: #EBBECE; height: 2px; width: 61px;"></div>
            <div class="choosebar clearfix">
                <div class="text-choice leftfix to-cursor" :class="style_choosebar1" @click="choice = 0">图像信息</div>
                <div class="text-choice leftfix to-cursor" :class="style_choosebar2" @click="choice = 1">文字信息</div>

            </div>
            <div class="img-box">
                <img src="../assets/History/sakura装饰.png" alt="" class="rightfix"
                    style="position: absolute; bottom: 79%; left: 89%; transform: rotate(240deg); width: 204px; height: 194px;">
                <img :src="imgs[year_choice]" alt="house" class="img" :class="display_mode_img">
                <!-- <div class="img" :class="display_mode_img" style="background-image:);"></div> -->
                <div class='intro-box' :class="display_mode_text">
                    <div
                        style="font: 40px 'Source Han Serif SC'; color: white; background-image: url('/src/assets/History/文字背景渐变.png'); background-size: 100% 100%; width: fit-content;">
                        {{ year[year_choice] }}
                    </div>
                    <div style="background-image: url();">
                        <div style="font: 35px 'Source Han Serif SC'; line-height: 200%; text-align: center;">{{
                            title[year_choice] }}</div>
                        <div style="font: 25px 'Source Han Sans CN'; line-height: 170%;">{{ text[year_choice] }}</div>
                    </div>

                </div>
                <img src="../assets/History/sakura线稿.png" alt="" :class="display_mode_text"
                    style="position: absolute; z-index = -100; width: 394px; height: 375px; transform: rotate(50deg); filter: saturate(40%);filter: brightness(88%);">

                <div class="text-short" :class="display_mode_img">{{ text_short[year_choice] }}</div>
            </div>
            <div class="scroll">
                <span :class="{ 'year': true, 'to-cursor': true, 'active': year_choice === 0 }" @click="year_choice = 0"> {{ year[0] }} </span>
                <img src="../assets/History/arrow-right.svg" alt="" class="arrow">
                <span :class="{ 'year': true, 'to-cursor': true, 'active': year_choice === 1 }" @click="year_choice = 1"> {{ year[1] }} </span>
                <img src="../assets/History/arrow-right.svg" alt="" class="arrow">
                <span :class="{ 'year': true, 'to-cursor': true, 'active': year_choice === 2 }" @click="year_choice = 2"> {{ year[2] }} </span>
                <img src="../assets/History/arrow-right.svg" alt="" class="arrow">
                <span :class="{ 'year': true, 'to-cursor': true, 'active': year_choice === 3 }" @click="year_choice = 3"> {{ year[3] }} </span>
                <img src="../assets/History/arrow-right.svg" alt="" class="arrow">
                <span :class="{ 'year': true, 'to-cursor': true, 'active': year_choice === 4 }" @click="year_choice = 4"> {{ year[4] }} </span>
                <img src="../assets/History/arrow-right.svg" alt="" class="arrow">
                <span :class="{ 'year': true, 'to-cursor': true, 'active': year_choice === 5 }" @click="year_choice = 5"> {{ year[5] }} </span>
            </div>
        </div>
    </div>
    <!-- </div> -->
</template>

<style scoped>
.leftfix {
    float: left;
}

.rightfix {
    float: right;
    /* left :10%;
    top: 250%; */
}

.clearfix::after {
    content: '';
    display: block;
    clear: both;
}

.container {

    width: 1400px;
    /* width: 70%; */
    margin: 0 auto;
}

.left {
    margin: 10px 30px;
    position: relative;
    /* left: 100px; */
}

.right {
    margin: 1% 6% 1%;
    /* height: 700px; */
    height: 100%;
    width: 80%;
    position: relative;
}

.img-box {
    width: 90%;
    height: 60vh;
    /* width: 938px;
    height: 480px; */
    border: 1px solid #797979;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
}

.img {
    /* margin-top: 18px;
    max-height: 498px;
    min-width: 500px;
    height: 400px; */

    /* min-width: 500px;
    max-width: 80%;
    height: 20%; */
    margin-top: 2%;
    width: auto;
    height: 80%;
    /* max-height: 40vh; */
}

.choosebar {
    height: 35px;
    margin: 1px;
    /* padding: 15px 0; */
}

.text-choice {
    font-family: 'Microsoft YaHei';
    font-size: 18px;
    padding: 15px 30px;
    transition: background 0.5s;
}

.text-choice:hover {
    cursor: pointer;
	-moz-box-shadow: 0px 0px 25px rgb(227, 131, 217);
	-webkit-box-shadow: 0px 0px 25px rgba(0, 255, 179, 0.762);
	box-shadow: 0px 0px 25px rgb(225, 152, 221);
	cursor: pointer;
    background: #E9A9C0;
    color: whitesmoke;
}


.text-short {
    font-family: "思源黑体";
    font-size: 25px;
    margin: 1% 0;
}

.chosen {
    background-color: #F0B8CC;
    color: #FFFFFF;
}

.not-chosen {
    background-color: #FFFFFF;
    color: #000000;
}

.year {
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    font-size: 35px;
}

.year:hover {
    -moz-box-shadow: 0px 0px 25px rgb(227, 131, 217);
    -webkit-box-shadow: 0px 0px 25px rgba(0, 255, 179, 0.762);
    box-shadow: 0px 0px 25px rgb(225, 152, 221);
    background: transparent;
    border-radius: 20px;
    cursor: pointer;
}

.active {
    transition: all 0.5s;
    background-image: linear-gradient(to right, #4feeb66b, rgba(170, 206, 204, 0.461));
    color:#E9A9C0;
    border-radius: 20px;
}

.arrow {
    position: relative;
    top: 20px;
}

.scroll {
    margin: 0 6%;
}

.display-none {
    display: none;
}

.intro-box {
    /* margin-top: 18px;
    height: 498px;
    width: 734px; */
    position: relative;
    z-index: 1;
    margin: 0% 5%;
    height: 80%;
    bottom: 6%;
}

.to-cursor:hover {
    cursor: pointer;
}

.vertical-text {
    position: absolute;
    z-index: 3;
    text-align: justify;
    left: 4.3%;
    top: 57%;
    font-family: "Microsoft YaHei";
    font-size: 13px;
    color: gray;
    border: 1px;
    max-height: 50%;
    max-width: 10%;
    writing-mode: vertical-rl;
}

.gradient {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    top: 50%;
    left: 4.3%;
    background-image: url("../assets/Buildings/渐变.png");
    background-size: 85% 100%;
    max-width: 2%;
    max-height: 40%;
    background-repeat: no-repeat;
}
</style>