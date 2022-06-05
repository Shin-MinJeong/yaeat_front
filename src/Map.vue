<template>
<div id="map"></div>
</template>

<script>
export default {
     mounted() {
    if (window.kakao && window.kakao.maps) {
      this.initMap();
    } else {
      const script = document.createElement("script");
      script.onload = () => kakao.maps.load(this.initMap);
      script.src =
        "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=b580fc7b8f0a72cc51842b80bda0f987";
      document.head.appendChild(script);
    }
  },
  methods: {
    initMap() {
      const container = document.getElementById("map");
      const options = {
        center: new kakao.maps.LatLng(35.81309491574391, 127.0896040302128),
        level: 4,
      };

      //지도 객체를 등록합니다.
      //지도 객체는 반응형 관리 대상이 아니므로 initMap에서 선언합니다.
      this.map = new kakao.maps.Map(container, options);
    },
  }
}
</script>

<style scoped>
#map {
    position: fixed;
    width: 800px;
    height: 450px;
    left: 25%;
    top: 32%;
    border: 2px solid #575756;
}

</style>