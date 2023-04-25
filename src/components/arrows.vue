<template>
  <div class="future-arrows">

    <button class="arrow" @click="$emit('click-left')">
      <svg v-if="!this.$slots['arrow-left']" width="16px" height="16px" viewBox="-4.5 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg"
           xmlns:xlink="http://www.w3.org/1999/xlink">
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="Dribbble-Light-Preview" transform="translate(-345.000000, -6679.000000)" fill="#000000">
            <g id="icons" transform="translate(56.000000, 160.000000)">
              <path
                  d="M299.633777,6519.29231 L299.633777,6519.29231 C299.228878,6518.90256 298.573377,6518.90256 298.169513,6519.29231 L289.606572,6527.55587 C288.797809,6528.33636 288.797809,6529.60253 289.606572,6530.38301 L298.231646,6538.70754 C298.632403,6539.09329 299.27962,6539.09828 299.685554,6538.71753 L299.685554,6538.71753 C300.100809,6538.32879 300.104951,6537.68821 299.696945,6537.29347 L291.802968,6529.67648 C291.398069,6529.28574 291.398069,6528.65315 291.802968,6528.26241 L299.633777,6520.70538 C300.038676,6520.31563 300.038676,6519.68305 299.633777,6519.29231"
                  id="arrow_left-[#335]">

              </path>
            </g>
          </g>
        </g>
      </svg>
      <slot v-else name="arrow-left"/>
    </button>


    <button class="arrow" @click="$emit('click-right')">
      <svg v-if="!this.$slots['arrow-right']" width="16px" height="16px" viewBox="-4.5 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg"
           xmlns:xlink="http://www.w3.org/1999/xlink">
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="Dribbble-Light-Preview" transform="translate(-305.000000, -6679.000000)" fill="#000000">
            <g id="icons" transform="translate(56.000000, 160.000000)">
              <path
                  d="M249.365851,6538.70769 L249.365851,6538.70769 C249.770764,6539.09744 250.426289,6539.09744 250.830166,6538.70769 L259.393407,6530.44413 C260.202198,6529.66364 260.202198,6528.39747 259.393407,6527.61699 L250.768031,6519.29246 C250.367261,6518.90671 249.720021,6518.90172 249.314072,6519.28247 L249.314072,6519.28247 C248.899839,6519.67121 248.894661,6520.31179 249.302681,6520.70653 L257.196934,6528.32352 C257.601847,6528.71426 257.601847,6529.34685 257.196934,6529.73759 L249.365851,6537.29462 C248.960938,6537.68437 248.960938,6538.31795 249.365851,6538.70769"
                  id="arrow_right-[#336]">

              </path>
            </g>
          </g>
        </g>
      </svg>
      <slot v-else name="arrow-right"/>
    </button>

  </div>
</template>

<script>
export default {
  name: `Arrows`,
  props: {},
  mounted() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
.future-arrows {
  display: flex;
  justify-content: space-between;
  width: inherit;
  z-index: 1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  button.arrow {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    user-select: none;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background: #ccc;
    opacity: .7;
    border: none;

    &:hover {
      opacity: 1;
    }

    svg {
      min-width: 16px;
      min-height: 16px;
    }

    &:first-child {
      margin-left: 5px;
    }

    &:last-child {
      margin-right: 5px;
    }
  }
}

</style>
