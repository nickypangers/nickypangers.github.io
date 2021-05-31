<template>
  <div class="container">
    <div class="home col-12">
      <Banner />
      <Description />
    </div>
  </div>
</template>

<script>
// // @ is an alias to /src
import Banner from "@/components/Banner.vue";
import Description from "@/components/Description.vue";

export default {
  name: "Home",
  components: {
    Banner,
    Description,
  },
};
</script>

Description
<style scoped>
.home {
  text-align: left;
}

.text-underline {
  text-decoration: underline;
}

.subtitle {
  color: #566573;
}
</style>
