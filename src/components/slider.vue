<template>
  <div class="future-slider-wrapper">

    <div class="future-slider" ref="slider">

      <div class="future-slider-body" ref="body"
           :style="{left: left, transition: transition}">

        <div class="future-slide"
             v-for="(item, index) in _items" :key="index"
             :style="{width}">

          <img :src="item[field]" alt=""
               :style="{width: width, 'border-radius': border}">

        </div>

      </div>

    </div>

    <arrows
        v-if="arrows && sliderAllCount > 1"
        @click-left="prevSlide"
        @click-right="nextSlide">

      <template slot="arrow-left">
        <slot name="arrow-left"/>
      </template>

      <template slot="arrow-right">
        <slot name="arrow-right"/>
      </template>

    </arrows>

  </div>
</template>

<script>
import Arrows from './arrows.vue';
import LoadingSpinner from './loading.vue';
import {props} from '@/core/props'

export default {
  name: 'VueFutureSlider',
  components: {LoadingSpinner, Arrows},
  props,
  data: function () {
    return {
      sliderAllCount: 0,
      sliderActive: 1,
      sliderOffsetLeft: 0,
      sliderOffsetStep: 0,
      sliderOffsetWidth: 0,
      list: [],
      limit: this.slideToShow,
      loading: true,
      isPressed: false,
    }
  },
  computed: {
    _items: function () {
      if (this.loadingByOne) {
        return this.items.slice(0, this.limit)
      } else {
        return this.items
      }
    },
    left: function () {
      return this.sliderOffsetLeft + 'px'
    },
    border: function () {
      return this.cssBorder + 'px'
    },
    transition: function () {
      return 'all ' + this.speed + 's ease'
    },
    width: function () {
      return this.sliderOffsetWidth / this.slideToShow + 'px'
    },
  },
  mounted() {
    this.init()

    window.addEventListener('resize', () => {
      this.init()
    })

    if (this.autoplay) {
      setInterval(() => {
        this.nextSlide()
      }, this.autoplaySpeed)
    }
  },
  methods: {
    init: function () {
      let slider = this.$refs.slider

      if (slider) {
        this.sliderOffsetWidth = slider.offsetWidth
        this.sliderOffsetStep = slider.clientWidth
        this.sliderAllCount = Math.ceil(this.items.length / this.slideToShow)
      }
    },
    openSlide: function (id) {
      if (id > 0 && id <= this.sliderAllCount) {
        this.sliderActive = id
        // Move slide
        this.sliderOffsetLeft = -(this.sliderActive * this.sliderOffsetStep - this.sliderOffsetStep)
      }
    },
    // Следующий слайд
    nextSlide: function () {
      if (this.sliderActive < this.sliderAllCount) {
        this.limit += this.slideToShow
        this.sliderActive += 1
        this.openSlide(this.sliderActive)
      } else {
        this.openSlide(1)
      }
    },
    // Предыдущий слайд
    prevSlide: function () {
      if (this.sliderActive > 1) {
        this.sliderActive -= 1
        this.openSlide(this.sliderActive)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.future-slider-wrapper {
  position: relative;
  width: inherit;
  height: inherit;
  max-width: inherit;
  max-height: inherit;

  .future-slider {
    width: inherit;
    height: inherit;
    max-width: inherit;
    max-height: inherit;
    position: relative;
    overflow: hidden;

    .future-slider-body {
      width: inherit;
      height: inherit;
      max-width: inherit;
      max-height: inherit;
      display: flex;
      position: relative;
      align-items: stretch;
      transition: all .5s ease;
      user-select: none;

      .future-slide {
        width: inherit;
        height: inherit;
        max-width: inherit;
        max-height: inherit;
        background-size: cover;
        background-position: center;
        flex: 1 100%;
        user-select: none;

        img {
          width: inherit;
          height: inherit;
          max-width: inherit;
          max-height: inherit;
          pointer-events: none;
        }
      }
    }
  }
}


</style>
