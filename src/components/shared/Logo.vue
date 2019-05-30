<template lang="pug">
router-link(to="/")
    .logo(:class="style" )
</template>

<script>
export default {
  props: {
    big: { type: Boolean, default: false },
    color: { type: String, default: 'original' },
  },
  data() {
    return {
      style: '',
    };
  },
  created() {
    this.style = ` ${this.big ? 'big' : ''} ${this.color}`;
  },
};
</script>


<style lang="scss" scoped>
@import './src/scss/mixins.scss';

.logo {
    width: $logo-width;
    height: $logo-heigth;
    background-size: 100% 100%;
    background-position: 0 0;
    background-repeat: no-repeat;
    cursor: pointer;

    &.white {
        @include background-image('../../assets/img/shared/','logo', 'png');
    }

    &.original {
        @include background-image('../../assets/img/shared/','original-logo', 'png');
    }

    &.big {
        width: 250px;
        height: 115px;
        @include background-image('../../assets/img/shared/','big-logo', 'png');
    }
}
</style>
