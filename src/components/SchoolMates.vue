<script>
export default {
    data() {
        return {
            nameArray: ["雷军", "陈东升", "黄春华", "于刚", "易中天", "韩松"],
            lableArray: ["小米集团CEO", "泰康保险集团CEO", "柏嘉金融公司创始人", "111集团CEO", "我国著名作家、科学家", "我国著名科幻作家"],
            name:"雷军",
            lable:"小米集团CEO",
            tag:0,
            introduction:" 雷军，男，1969年12月16日出生，1987年考上了武汉大学计算机系。  现任第十四届全国人大代表，中国民间商会副会长，北京市工商联副主席，小米科技有限责任公司董事长兼首席执行官，北京金山软件有限公司董事长，小米智能技术有限公司法定代表人、执行董事、经理 ，小米汽车有限公司法定代表人、执行董事、经理。 ",
            LEI: " 雷军，男，1969年12月16日出生，1987年考上了武汉大学计算机系。  现任第十四届全国人大代表，中国民间商会副会长，北京市工商联副主席，小米科技有限责任公司董事长兼首席执行官，北京金山软件有限公司董事长，小米智能技术有限公司法定代表人、执行董事、经理 ，小米汽车有限公司法定代表人、执行董事、经理。 ",
            CHEN: "陈东升，男，武汉大学经济学博士。  陈东升是“92派”企业家代表人物，被评为“改革开放40年百名杰出企业家”和“第五届非公有制经济优秀中国特色社会主义建设者”。2020年，他所领导的楚商联合会和泰康旗下泰康同济（武汉）医院，双双荣获“全国抗击新冠肺炎疫情先进集体”表彰，个人被评为“全国抗击新冠肺炎疫情民营经济先进个人”。",
            HUANG: "黄春华，男，1964年生，1986年本科就读于武汉大学经济管理系，美国柏嘉金融公司创始人、董事长，英诺医疗集团创始人，黄春华基金会主席。  2020年，黄春华校友创立英诺医疗集团。作为英国乃至全球最大的新冠病毒检测试剂供应商，英诺为帮助全球控制新冠疫情做出了重要成就。",
            YU: "于刚，男，1959年6月2日生。1982年毕业于武汉大学物理系，同年经李政道CUSPEA项目赴美国留学，1986年获美国康乃尔大学物理硕士，1990年获美国宾夕发尼亚大学沃顿管理学院博士学位。  中国科学院数学与系统科学研究院教授、博士生导师，武汉大学数学与统计学院教授、博士生导师，弗郎兹·艾德尔曼管理科学成就奖获得者。",
            YI: "易中天，男，1947年出生，1977年—1981年就读于武汉大学中文系，获文学硕士学位并留校执教，1992年到厦门大学任教。  易中天长期从事多科或跨学科研究，在文学、艺术、美学、心理学、人类学、历史学等领域皆有涉猎，有学术论文、文艺评论多篇，文学作品多部，部分著作被译为外文在国外出版。",
            HAN: "韩松，男，1984～1991年就读于武汉大学英文系、新闻系，获文学学士学位及法学硕士学位。被列入当代中国科幻“四大天王”之一。1991年，以优异的考试成绩进入新华社。出版的中短篇小说集有《宇宙墓碑》、《再生砖》、《独唱者》、《沙漠古船》、《看的恐惧》等。其他长篇作品包括《红色海洋》、《地铁》、《高铁》、《轨道》等 。",
         
        }
    },
    methods:{
        changePage:function(){
          this.name=this.nameArray[0]
          this.lable=this.lableArray[0]
          this.introduction=this.LEI
          this.tag=0
        },
        changePage1:function(){
          this.name=this.nameArray[1]
          this.lable=this.lableArray[1]
          this.introduction=this.CHEN
          this.tag=1
        },
        changePage2:function(){
          this.name=this.nameArray[2]
          this.lable=this.lableArray[2]
          this.introduction=this.HUANG
          this.tag=2
        },
        changePage3:function(){
          this.name=this.nameArray[3]
          this.lable=this.lableArray[3]
          this.introduction=this.YU
          this.tag=3
        },
        changePage4:function(){
          this.name=this.nameArray[4]
          this.lable=this.lableArray[4]
          this.introduction=this.YI
          this.tag=4
        },
        changePage5:function(){
          this.name=this.nameArray[5]
          this.lable=this.lableArray[5]
          this.introduction=this.HAN
          this.tag=5
        }
    }
}
</script>

<template>
    <div class="img-list" >
        <img class="bg-container" src="../assets/SchoolMates/页面背景2.png" alt="背景" />
        <img class="decorationblock" src="../assets/SchoolMates/装饰块.png" alt="装饰块"/>
        <img class="decoration" src="../assets/SchoolMates/人物介绍背景装饰.png" alt="人物背景" />
        <!-- <img class="line" src="../assets/SchoolMates/文字背景渐变.png"  alt="文字背景"/> -->

        <img class="people" src="../assets/SchoolMates/雷军.png" alt="雷军"  v-show="tag==0"/>
        <img class="people" src="../assets/SchoolMates/陈东升.png" alt="陈东升"  v-show="tag==1"/>
        <img class="people" src="../assets/SchoolMates/黄春华.png" alt="黄春华"  v-show="tag==2"/>
        <img class="people" src="../assets/SchoolMates/于刚.png" alt="于刚"  v-show="tag==3"/>
        <img class="people" src="../assets/SchoolMates/易中天.png" alt="易中天"  v-show="tag==4"/>
        <img class="people" src="../assets/SchoolMates/韩松.png" alt="易中天"  v-show="tag==5"/>
        <div>
            <!-- <transition name="fade" mode="out-in">
                <div key="content"> -->
                    <p class="name">{{ name }}</p>
                    <p class="lable">{{ lable }}</p>
                    <p class="introduction">{{ introduction }}</p>
                <!-- </div>
            </transition> -->
            <p><button class="button1" @click="changePage">雷军</button></p>
            <p><button class="button2" @click="changePage1">陈东升</button></p>
            <p><button class="button3" @click="changePage2">黄春华</button></p>
            <p><button class="button4" @click="changePage3">于刚</button></p>
            <p><button class="button5" @click="changePage4">易中天</button></p>
            <p><button class="button6" @click="changePage5">韩松</button></p>
        </div>
    </div>
</template>


<style scoped>

.bg-container {
    position: absolute;
    top: 13%;
    left: 0;
    width: 100%;
    height: 87%;
    overflow: hidden;

}
.line{
    width: 1%;
    height: 20%;
    left: 2%;
    top: 41%; 
    position: absolute;
    writing-mode:vertical-lr;

}
.Anniversary{
    left: 2%;
    top: 55%; 
    position: absolute;
    font-size: 15px;
    color: black;
    writing-mode:vertical-lr;
    text-decoration:underline ;
    z-index: 2;

}

.people {
    top: 12%;
    left: 8%;
    width: auto;
    height: 88%;
    position: absolute;
    z-index: 1;
}
.decorationblock{
    width: 3%;
    height: 6%;
    left: 50%;
    top: 38%;
    position: absolute;
    z-index: 2;
}

.decoration {
    top: 0;
    left: 47.5%;
    width: auto;
    height: 100%;
    position: absolute;
    z-index: 1;
    overflow: hidden;
}

.name {
    width: fit-content;
    height: fit-content;
    left: 55%;
    top: 15%;
    position: absolute;
    font-size: 50px;
    color: black;
    z-index: 2;

}

.lable {
    left: 55%;
    top: 25%;
    position: absolute;
    font-size: 30px;
    color: white;
    background: linear-gradient(to left, pink, #ec7fa7);
    z-index: 2;
}

.introduction {
    border-bottom: medium solid pink;
    border-top: medium solid pink;
    width: 30%;
    left: 55%;
    top: 38%;
    right: 10%;
    position: absolute;
    z-index: 2;
    padding-top: 1%;
    padding-bottom: 2%;
    font-size: 25px;
}

.container {
    position: relative;
}

.button1 {
    left: 55%;
    top: 85%;
    width: 5%;
    height: 5%;
    margin: 1%;
    border-radius: 18px;
    background: transparent;
    border-color: whitesmoke;
    transition: background 0.5s;
    text-align: center;
    display: inline-block;
    color:rgb(0, 0, 0);
    position: absolute;
    font-size: large;
    z-index: 3;
}

button:hover {
	-moz-box-shadow: 0px 0px 25px rgb(227, 131, 217);
	-webkit-box-shadow: 0px 0px 25px rgba(0, 255, 179, 0.762);
	box-shadow: 0px 0px 25px rgb(225, 152, 221);
	cursor: pointer;
    background: #E9A9C0;
    color: whitesmoke;
}

#button-fade-in
{
  opacity: 50%;
}

#button-fade-in:hover
{
  opacity: 100%;
  Transition: opacity 2s;
}

/* 这个暂时没什么用s 
@keyframes kirakira {
  0% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
} */


.button2 {
    left: 60%;
    top: 85%;
    width: 5%;
    height: 5%;
    background-color: #E9A9C0;
    border-radius: 18px;
    background: transparent;
    border-color: whitesmoke;
    transition: background 0.5s;
    text-align: center;
    margin: 1%;
    display: inline-block;
    color:rgb(0, 0, 0);
    position: absolute;
    font-size: large;
    z-index: 3;
}
.button3 {
    left: 65%;
    top: 85%;
    width: 5%;
    height: 5%;
    background-color: #E9A9C0;
    border-radius: 18px;
    background: transparent;
    border-color: whitesmoke;
    transition: background 0.5s;
    text-align: center;
    margin: 1%;
    display: inline-block;
    color:rgb(0, 0, 0);
    position: absolute;
    font-size: large;
    z-index: 3;
}
.button4 {
    left: 70%;
    top: 85%;
    width: 5%;
    height: 5%;
    background-color: #E9A9C0;
    border-radius: 18px;
    background: transparent;
    border-color: whitesmoke;
    transition: background 0.5s;
    text-align: center;
    margin: 1%;
    display: inline-block;
    color:rgb(0, 0, 0);
    position: absolute;
    font-size: large;
    z-index: 3;
}
.button5 {
    left: 75%;
    top: 85%;
    width: 5%;
    height: 5%;
    background-color: #E9A9C0;
    border-radius: 18px;
    background: transparent;
    border-color: whitesmoke;
    transition: background 0.5s;
    text-align: center;
    margin: 1%;
    display: inline-block;
    color:rgb(0, 0, 0);
    position: absolute;
    font-size: large;
    z-index: 3;
}
.button6 {
    left: 80%;
    top: 85%;
    width: 5%;
    height: 5%;
    background-color: #E9A9C0;
    border-radius: 18px;
    background: transparent;
    border-color: whitesmoke;
    transition: background 0.5s;
    text-align: center;
    margin: 1%;
    display: inline-block;
    color:rgb(0, 0, 0);
    position: absolute;
    font-size: large;
    z-index: 3;
}


/* .fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
} */

</style>
