<template>
  <div @mousewheel="handleDetailsJump">
    <div class="msg" ref="text">W<span class="highlight">U</span>HAN <br>
      UN<span class="highlight">I</span>VERSITY <br>
      <span class="highlight">130</span>TH <br>
      ANNIVERSARY
    </div>
    <div class="video-container">
      <video autoplay muted loop class="background-video">
        <source src='@/assets/Homepage/BackgroundVideo.mp4'  />
      </video>
    </div>
    <div class="overlay"></div>
    <div class="logo">
      <img src="@\assets\Homepage\logo.png" alt="Logo" />
    </div>
    <div>
      <img src="@\assets\Homepage\mouse.png" alt="Mouse" class="mouse" />
      <img src="@\assets\Homepage\Arrow.png" alt="Arrow" class="arrow" @click="handleDetailsJump" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import TypeIt from 'typeit'
import router from "../router";
const text = ref(null)
onMounted(() => {
  new (TypeIt)(text.value, {
    cursorChar: "<span class='cursorChar'>|<span>",
    speed: 40,
    lifeLike: false,
    cursor: true,
    breakLines: true,
    loop: false,
  }).go()
})

const handleDetailsJump = () => {
  router.push('/details')
}
</script>



<script>
export default {
  name: 'BackgroundVideo',
}
</script>

<style scoped>
.video-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.background-video {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -9999;
  transform: translate(-50%, -50%);
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(8, 8, 8, 0.5);
}

.logo {
  position: absolute;
  top: 20px;
  left: 30px;
  z-index: 1000;
}

.logo img {
  width: 40%;
  height: auto;
}

.msg {
  position: absolute;
  top: 43%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  letter-spacing: 2px;
  font-size: clamp(1.875rem, 0.966rem + 4.55vw, 4.375rem);
  /* 字体大小随窗口缩放改变 */
  font-weight: bold;
  line-height: 85px;
  z-index: 1000;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.msg ::v-deep .cursorChar {
  display: inline-block;
  margin-left: 2px;
  color: #ee4f87;
}

.highlight {
  color: #ee4f87;
  font-size: clamp(1.875rem, 0.966rem + 4.55vw, 4.375rem);
  font-weight: bold;
  line-height: 80px;
  z-index: 1000;
}

.mouse {
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  width: auto;
  height: 40px;
  animation: KeepCenter 2s infinite;
}

.arrow {
  position: absolute;
  top: 83%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1001;
  width: auto;
  height: 40px;
  animation: slideDown 2s infinite;
}

@keyframes KeepCenter {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(1px);
  }

  100% {
    transform: translateY(0);
  }
}

@keyframes slideDown {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(30px);
  }

  100% {
    transform: translateY(0);
  }
}
</style>
