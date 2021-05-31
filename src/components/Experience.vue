<template>
  <div class="experience_content mt-5">
    <h2>{{ companyName }}</h2>
    <h3 class="experience_position">{{ position }}</h3>
    <p class="no-uppercase">{{ description }}</p>
    <a :href="link" v-show="link.trim().length > 0">Visit website »</a>
    <p class="mt-2">{{ getWorkPeriod }}</p>
  </div>
</template>

<script>
export default {
  name: "Experience",
  props: {
    companyName: String,
    position: String,
    description: String,
    link: {
      type: String,
    },
    from: {
      type: String,
      default: function () {
        return `${new Date().getFullYear()}`;
      },
    },
    to: {
      type: String,
      default: "Present",
    },
  },
  computed: {
    getWorkPeriod: function () {
      return `${this.from} - ${this.to}`;
    },
  },
};
</script>

<style scoped>
.experience_content {
  text-transform: uppercase;
}

.no-uppercase {
  text-transform: none;
}

.experience_position {
  color: rgba(219, 232, 212, 0.5);
}

a {
  text-decoration: none;
  color: #73cca8;
}

a:hover {
  text-decoration: underline;
  transition: 0.3 ease-in;
  color: #73cca8;
}
</style>
