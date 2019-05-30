<template lang="pug">
    transition(appear name="start-screen" v-on:after-enter="afterEnter")
        .start-screen
            transition(appear name="start-logo")
                .logo-container
                    mm-logo(:big="true")
</template>

<script>
import mmLogo from '@/components/shared/Logo.vue';

export default {
  components: {
    mmLogo,
  },
  methods: {
    afterEnter(el) {
      el.classList.add('animation-ended');
    },
  },
};
</script>


<style lang="scss" scoped>
@import './src/scss/mixins.scss';

.start-screen {
    width: 100vw;
    height: $max-viewport-height;
    background-image: $red-gradient;
    position: fixed;
    opacity:0;

    z-index: 1000;
    &.animation-ended {
        z-index: 0;
    }

    display: flex;
    justify-content: center;
    align-items: center;
}

/* Transitions */

.start-screen-enter-active {
    transition: all $start-transition-duration ease-in $start-tansition-delay;
}

.start-screen-enter {
    opacity: 1;
}

.logo-container{
    opacity: 0;
}

.start-logo-enter-active {
    transition: $start-logo-transition;
}

.start-logo-enter {
    opacity: 1;
}

</style>
