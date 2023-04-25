<template>
  <div class="container">
    <h1>Vue Future Slider</h1>
    <div class="slider">
      <VueFutureSlider :items="images">

        <template slot="arrow-left">
          <!-- div, img or svg -->
        </template>

        <template slot="arrow-right">
          <!-- div, img or svg -->
        </template>

      </VueFutureSlider>
    </div>
  </div>
</template>

<script>
import VueFutureSlider from "@/components/slider.vue";

export default {
  name: 'App',
  components: {VueFutureSlider},
  data: function () {
    return {
      images: [
        {image: 'https://dummyimage.com/1000x500/000/fff'},
        {image: 'https://dummyimage.com/1000x500/000e4f/000000'},
        {image: 'https://dummyimage.com/1000x500/121e1f/000000'},
        {image: 'https://dummyimage.com/1000x500/121e1f/b00000'}
      ],
      settings: {
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true
      }
    }
  }
}
</script>

<style lang="scss">
.container {
  width: 1000px;
  height: 500px;
  margin-inline: auto;

  .slider {
    width: inherit;
    height: inherit;
  }
}

</style>
