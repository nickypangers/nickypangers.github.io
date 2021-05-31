<template>
  <div class="resume">
    <div class="container">
      <div class="col-12 d-flex flex-column align-items-center">
        <div class="pt-5 pb-4">
          <h3>Employment</h3>
        </div>
        <Experience
          company-name="Mosaic Digital Group"
          position="Web/Mobile App Developer"
          description="Web Development | Mobile App Development"
          link="http://google.com"
        />
        <Experience
          company-name="Mosaic Digital Group"
          position="Web/Mobile App Developer"
          description="Web Development | Mobile App Development"
          link="http://google.com"
        />
      </div>
      <div class="col-12 d-flex flex-column align-items-center">
        <div class="pt-5 pb-4 title">
          <h3>Skills</h3>
        </div>
        <Experience
          company-name="Mosaic Digital Group"
          position="Web/Mobile App Developer"
          description="Web Development | Mobile App Development"
          link="http://google.com"
        />
        <Experience
          company-name="Mosaic Digital Group"
          position="Web/Mobile App Developer"
          description="Web Development | Mobile App Development"
          link="http://google.com"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Experience from "@/components/Experience.vue";

export default {
  name: "Resume",
  components: {
    Experience,
  },
};
</script>

<style scoped>
h3 {
  color: #dbe8d4;
  font-weight: bold;
}

h3 {
  text-transform: uppercase;
  position: relative;
}

h3::after {
  content: "";
  left: 50%;
  top: 3rem;
  margin-left: -5rem;
  width: 10rem;
  height: 4px;
  background-color: #525e65;
  display: block;
  position: absolute;
}
</style>
