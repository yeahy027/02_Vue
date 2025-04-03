<template>
  <div class="card card-body">
    <h2>About</h2>
    <p>요청경로 : {{ $route.fullPath }}</p>
  </div>
</template>
<script>
export default {
  name: 'About',
  created() {
    console.log(this.$route);
  },
};
</script>

<!-- 출력결과 다름, 실제 사용 route 정보만 포함된 객체 출력 -->
<!-- <template>
  <div class="card card-body">
    <h2>About</h2>
    <p>요청경로 : {{ route.fullPath }}</p>
  </div>
</template>

<script>
import { onMounted } from "vue";
import { useRoute } from "vue-router";

export default {
  name: "About",
  setup() {
    const route = useRoute();

    onMounted(() => {
      console.log(route);
    });

    return { route };
  },
};
</script> -->
