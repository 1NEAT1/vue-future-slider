import FutureSlider from "./components/slider.vue";

const Slider = {
    install(Vue) {
        Vue.component('future-slider', FutureSlider);
    }
};

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(Slider);
}

export default Slider;

