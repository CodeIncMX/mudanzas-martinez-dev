<template lang="pug">
  #app(data-server-rendered="true")
    mm-header
    router-view
    mm-footer
</template>

<script>
import mmHeader from '@/components/layout/Header.vue';
import mmStart from '@/views/Start.vue';
import mmFooter from '@/components/layout/Footer.vue';

export default {
  name: 'app',
  components: {
    mmHeader,
    mmStart,
    mmFooter,
  },
  created() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  },
};
</script>


<style lang="scss">
@import 'scss/fonts.scss';
@import 'scss/mixins.scss';

body {
  margin: 0;

  font-family: $primary-font;

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  h1 {
    font-weight: 600;

    font-size: 38px;
    line-height: 39px;

    @include tablet-up {
      font-size: 42px;
      line-height: 43px;
    }

    @include desktop {
      font-size: 46px;
      line-height: 48px;
    }

    @include desktop-large {
      font-size: 64px;
      line-height: 65px;
    }
  }

  h2 {
    font-weight: 600;

    font-size: 26px;
    line-height: 32px;
    letter-spacing: -0.05px;

    @include desktop-up {
      font-size: 32px;
      line-height: 23px;
      letter-spacing: -0.5px;
    }
  }

  h3 {
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 0.2px;
    line-height: 0.17px;
  }

  a {
    color: $gray-color;
    text-decoration: underline;
    cursor: pointer;

    transition: all 0.3s ease;

    &:hover {
      color: $red-color;
    }

  }

  p {
    color: $black-color;
  }

  strong {
    color: $red-color;
  }

  .container {

    @include tablet {
      width: $max-width-tablet;
    }

    @include desktop {
      width: $max-width-desktop;
    }

    @include desktop-large {
      width: $max-width-desktop-large;
    }
  }

  .absolute-right-side-margin {
    position: absolute;
    right: $mobile-side-margin;

    @include tablet {
      right: $tablet-side-margin;
    }

    @include desktop {
      right: $desktop-side-margin;
    }

    @include desktop-large {
      right: $desktop-large-side-margin;
    }
  }
}
</style>
