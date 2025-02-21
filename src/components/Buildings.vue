<template>

<div>
  <img src="..\assets\Buildings\background2.png" alt="Buildings" class="background-image">
</div>


<div>
  <div id="list">
    <ul>
        <li v-for="item in choiceList" :key="item.id">
            <button class="custom-button"  @click="clickResponse(item)"  
            :class="{ 'selected-button': item.id === selectedChoice.id }">{{ item.name }}</button>
        </li>
    </ul>
    <div class="decoration fade-in fade-in-end"></div>
    <img src="../assets/Buildings/行政楼矢量图.png" class="background-layer slide-in" alt="行政楼矢量图" v-if="selectedChoice.id === 1">
    <img src="../assets/Buildings/理学楼.png" class="background-layer slide-in" alt="理学楼" v-if="selectedChoice.id === 2">
    <img src="../assets/Buildings/工主教.png" class="background-layer slide-in" alt="工主教" v-if="selectedChoice.id === 3">
    <img src="../assets/Buildings/老图.png" class="background-layer slide-in" alt="老图" v-if="selectedChoice.id === 4">
    <img src="../assets/Buildings/万林.png" class="background-layer slide-in" alt="万林" v-if="selectedChoice.id === 5">
    <img src="../assets/Buildings/牌坊.png" class="background-layer slide-in" alt="牌坊" v-if="selectedChoice.id === 6">
  </div>
    
  <div class="box fade-in fade-in-end">
    <div v-for="choice in choices" :key="choice.id">
      <div v-if="selectedChoice.id === choice.id" class="top-text"><h3>{{ choice.text1 }}</h3></div>
      <div class="line1"></div>
      <div v-if="selectedChoice.id === choice.id" class="top-text2"><h6 :title="choice.SupplementaryText">{{ choice.text2 }}</h6></div>
    </div>

    <div>
        <p v-if="selectedChoice.id === 1" class="introduceText">
            行政楼为武汉大学早期著名建筑之一，由美国建筑工程师开尔斯设计，采用中西结合的设计理念，建筑风格别具一格。
            行政楼主楼是四角重檐攒尖顶的正方形大楼，下沿采用孔雀蓝琉璃瓦，顶部则全部用重檐四坡玻璃盖顶；中央为一个集中采光的封闭天井形成一个通高五层的共享式大厅；四周绕以回廊，作为楼层水平连系的通道。
            主楼的四角上各有一个配楼，面向主楼，对称布局，四隅相望。
            春天，樱花盛开，行政楼掩映在粉色的花海中，古朴的建筑与星星点点的樱花交相辉映。
            而这座既古老又年轻的行政大楼，也在历史的穿梭中见证一代代武大学子的成长，彰显着不老的青春底色。
        </p>
        <p v-if="selectedChoice.id === 2" class="introduceText">
            理学楼位于武汉大学文理学部的中央，坐落于狮子山东部。
            背临东湖，西接老图，正向奥场，主露穹窿圆屋顶的理学楼，与南面四角重檐攒尖顶的行政楼遥相呼应，正和“天圆地方”之理。
            历史上，这里曾是理学院上课的地方，因此命名为“理学楼”。
            而如今，这里已经拓展成为了整个文理学部的主要教学楼之一。
            理学楼西皮而中骨，蕴藉着民国之美。
            踏入其中，暗黄的墙壁，红漆的门窗，旋转的楼梯，和附于其上的精致花纹，共同构成了这幅仿佛浸透着历史的画卷。
            几何图形极为精妙地装饰在布满岁月痕迹的墙面上，展示出数与理的别样之美。
            理学楼依据山势，建成“天平地不平”的结构，形成中国最早的天然阶梯教室，令人感叹其中蕴含的精妙与智慧。
        </p>
        <p v-if="selectedChoice.id === 3" class="introduceText">
            目前的工学部主教大楼为南北朝向，秉承“一轴承脉，山水相望”的设计构思，采用三横一纵的布局模式，从松园中路向下望去，六层高的大楼，内凹式的宽阔广场，尽显一派恢弘气势。
            清澈的池水景观，映衬了自然生态的形象。
            在设计上，教学楼采用工学部教学建筑庭院式的布局传统，打造了许多景观庭院。
            值得一提的是，所有的庭院均为开放的半围式空间，身处其中不会觉得压抑，反而倍觉开阔。
            在细节上，二楼自习区和楼梯间的景观灯在保障照明的基础上，拼接组合成珞珈山的造型突显武大特色除了华丽之外，内部也十分高级，“智能化”是其最大的特点。
            不过，正如施工方技术总监所言，“与其强调设备的智能化，不如说是借助它们传达一种新的、智能化的教学理念。”
        </p>
        <p v-if="selectedChoice.id === 4" class="introduceText">
          武汉大学老图书馆，简称老图，是武汉大学的标志性建筑。2001年，老图及周围的建筑群被列入第五批全国重点文物保护单位，这在国内图书馆界绝无仅有。
          故宫式的房顶，飞檐画角、龙凤卷云，体现了中国传统宫殿式建筑的威武与庄严。
          推门而入，西式的回廊、吊脚楼显得洋派十足，将中西合璧的建筑风格发挥的完美而极致。
          对于大多数武大学子而言，老图早已成了学校的精神地标。
          人八十岁而耄耋，老态丛生。
          但八十岁对于一座历史建筑来说却还是年轻。
          站在武汉大学狮子山脚下抬头仰望，历经近百年风雨的老图依然巍然屹立。
          </p>
        <p v-if="selectedChoice.id === 5" class="introduceText">
            万林艺术博物馆，作为武大迈入21世纪后的一幢新式建筑，既以其浓郁的艺术气息承接着武大老建筑的气质与风范，又因其新式的建筑风格和材质彰显着来自21世纪的科技感与创新感。
            作为博物馆，形形色色的艺术展是它最好的名片。
            万林的艺术展，涵盖科技、文化、自然、艺术等多个领域。
            曾经举办过的“珞珞如石”自然主题展，通过展出近1300件鸟类标本、140多件哺乳动物标本及400余件文物，展现出生命的演化和繁华，历史的沉淀与深邃。
            曾经举办过的“返本开新”书画精品展，则通过80余幅别具匠心的作品，传达出历代中国文人和艺术家们穿梭千年的情感和求索。
        </p>
        <p v-if="selectedChoice.id === 6" class="introduceText">
            历经八十余年，武汉大学校门牌坊的地理位置与“版本”几经变迁，而不变的，则是“辟门吁俊”，“得天下英才而教之”的宏愿与热忱。
            入口台阶处连升三级，寓意步入知识殿堂，学识步步升高；走进校门牌坊，是刻有“自强，弘毅，求是，拓新”的校训石；校训石背后，是一个长方形花坛。
            400盆色彩明艳的三色堇，呈S型曲线，红黄相间，形似自由飘逸的彩带；12根祥云石柱，单列12个以纪念120周年校庆，双列寓意24节气，激励学子：“凡古之大成者，知天文、晓地理、应四时、读‘大学’、求‘大道’。”
            东湖之滨，珞珈山下，八一路吟唱历史风华，珞珈牌坊守护风雨兼程，伫立岁岁年年。
        </p>
    </div>
  </div>

</div>

</template>


<script>
    export default {
      name: 'app',
      data() {
        return {
          choiceList: [
            { id: 1, name: '行政楼', isclick: true },
            { id: 2, name: '理学楼', isclick: false },
            { id: 3, name: '工主教', isclick: false },
            { id: 4, name: '老图', isclick: false },
            { id: 5, name: '万林', isclick: false },
            { id: 6, name: '牌坊', isclick: false },
          ],
       
          choices: [
      { id: 1, text1: '行政楼', text2: 'ADMINISTRATION BUILDING' },
      { id: 2, text1: '理学楼', text2: 'SCIENCE BUILDING' },
      { id: 3, text1: '工主教', text2: 'MTB OF THE ED', SupplementaryText: 'Main Teaching Building of the Engineering Department' },
      { id: 4, text1: '老图', text2: 'OLD LIBRARY' },
      { id: 5, text1: '万林', text2: 'WANLIN MUSEUM' },
      { id: 6, text1: '牌坊', text2: 'MEMORIAL ARCHWAY' },
    ],

          selectedChoice: { id: 1 }, // 初始化选中的选项
        
        };
      },
      methods: {
        clickResponse(clickedItem) {
          this.selectedChoice = clickedItem;
        }
       
      },
    };

</script>


<style scoped>



body {
  height: 100%;
  width: 100%;
  margin:0 0 0 0!important;
  overflow:hidden hidden hidden hidden;
}

@media (max-width: 1400px) {
  html {
    font-size: 25px;
  }
}
@media (max-width: 1200px) {
  html {
    font-size: 20px;
  }
}
@media (max-width: 992px) {
  html {
    font-size: 15px;
  }
}
@media (max-width: 768px) {
  html {
    font-size: 10px;
  }
}


/* 
div{
  display: inline-block;
  width: 100%;
  height: 100%;
} */

.background-image{
  width: 100%;
  height: 86%;
  top:14%;
  z-index: 0;
  position: absolute;
}

.background-layer {
  z-index: 3;
  position: absolute;
  width: 46%;
  height:73%;
  left: 10%;
  top: 20%;
  background-size: cover;
  background-repeat: no-repeat;
}



.custom-button {
  position: absolute;
  z-index: 3;
  font-size: 20px;
  font-weight: bold;
  color: gray;
  font-family: "Microsoft YaHei";
  border: 0px;
  background: transparent;
  }

.custom-button:hover{
  color: rgb(212, 131, 144);
}

ul {
  list-style-type: none;
}

#list ul li:nth-child(1) .custom-button {
    left: 57.2%;
    top: 35%;
}

#list ul li:nth-child(2) .custom-button {
    left: 57.2%;
    top: 41%;
}

#list ul li:nth-child(3) .custom-button {
    left: 57.2%;
    top: 47%;
}

#list ul li:nth-child(4) .custom-button {
    left: 57.5%;
    top: 53%;
}

#list ul li:nth-child(5) .custom-button {
    left: 57.5%;
    top: 59%;
}

#list ul li:nth-child(6) .custom-button {
    left: 57.5%;
    top: 65%;
}
.selected-button {
  color:  rgb(212, 131, 144); 
}

.box{  
  position: relative;  
  border:gray;  
  border-radius: 18px;  
  border-width: 1px;  
  border-style: solid;  
  height: 30rem;  
  width: 25rem;  
  left: 70%;  
  top: 50%;  
  z-index: 0;  
}  
.line1 {
  z-index: 2;
  position: absolute;
  top: 15%;
  left: 70%;
  transform: rotate(70deg);
  max-width: 40%;
  height: 20%;
  background-repeat: no-repeat;
  border: 2px solid rgb(237, 143, 158); 
}
.top-text{  
  position: absolute;  
  z-index: 2;  
  left:2%;  
  top: -10%;  
  font-family: "宋体";  
  font-size: 444%;  
  max-width: 80%;  
  max-height: 40%;  
}  
  
.top-text2 {
  position: absolute;
  z-index: 2;
  left: 25%;
  top: 20%;
  font-family: "宋体";
  font-size: 218%;
  max-width: 100%;
  max-height: 30%;

  background: linear-gradient(to right, #ee4f87, #32d1d3);
  -webkit-background-clip: text;
  color: transparent;
}
.introduceText{  
  position: absolute;  
  text-align: justify;  
  line-height: 40px;  
  z-index: 2;  
  left: 10%;  
  top: 35%;  
  font-family: "Microsoft YaHei";  
  font-size: 120%;  
  color:gray;  
  max-width: fit-content;  
  max-height: fit-content;  
  width: 80%;  
  height: 55%;  
  border: 0px;  
  user-select: all;  
  overflow:scroll;  
  text-indent: 2em;
}  
::-webkit-scrollbar{
  width: 18px;
  background-color: transparent;
}

::-webkit-scrollbar-track{
  background:transparent;
  border-radius:15px ;
}

::-webkit-scrollbar-thumb{
  background:linear-gradient(180deg,#FFFAF0,#FFB9C1);
}

.decoration{ 
  position: absolute;
  z-index: 2;
  width: 100%;  
  height: 100%;  
  left: 57.5%;  
  top: 24%;  
  background-image: url("../assets/Buildings/装饰块.png");  
  max-width: 4%;  
  max-height: 8%;  
  background-repeat: no-repeat;  
}

.fade-in {
  opacity: 0;
  animation: fadeIn 3s; /* 移除了forwards */
}

/* 定义淡入动画 */
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100%{
    opacity: 1;
  }
}

/* 确保动画结束后元素保持不透明 */
.fade-in-end {
  opacity: 1;
}
.slide-in{
  position: absolute;
  animation: slideIn 3s forwards;
}

@keyframes slideIn {
  0% {
    left: -100%;
  }
  100% {
    left: 7.5%; 
  }
}



</style>
