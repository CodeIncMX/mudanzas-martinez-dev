<template lang="pug">
.feature-card(
    @mouseover="setImage",
    @mouseleave="clearImage",
    :class="classes"
)
    .info
        fa( :icon="icon"
            transform="shrink-7.5"
            mask="circle"
            size="5x")
        h3.service-name {{title}}
        p.service-desc {{desc}}
        mm-button(label="COTIZAR", color="transparent", size="small", @click="submit")
</template>

<script>
import mmButton from '@/components/shared/Button.vue';

export default {
  components: {
    mmButton,
  },
  props: {
    image: { type: String, required: true },
    icon: { type: String, required: true },
    title: { type: String, required: true },
    desc: { type: String, required: true },
    url: { type: String, required: true },
  },
  methods: {
    setImage() {
      this.classes = this.image;
    },
    clearImage() {
      if (this.isMobile) {
        this.classes = '';
      }
    },
    submit() {
      if (this.$route.name === this.url) {
        // eslint-disable-next-line
        location.href = '#cotizar';
      } else {
        this.$router.push({ name: this.url });
      }
    },
  },
  data() {
    return {
      isMobile: true,
      classes: '',
    };
  },
  created() {
    // width screen under 992 is consider as mobile device
    if (window.innerWidth < 992) {
      this.isMobile = true;
      this.setImage();
    }
  },
};
</script>

<style lang="scss" scoped>
@import './src/scss/mixins.scss';

/* PRIVATE MIXINS */
@mixin setPhoto($name) {
  background-image: url('../../../assets/img/features/' + $name + '.jpg');
}

.feature-card {
    height: 300px;
    background-repeat: no-repeat;
    background-size: cover;
    color: $white-color;
    display: flex;
    align-items: center;
    justify-content: center;

    box-shadow: $general-shadow-down;

    @include mobile-landscape-up {
        box-shadow: none;
    }

    position: relative;

    &:before {
        content:'';
        background: $item-background-color;
        height: 300px;
        width: 100%;
        position: absolute;
        opacity: $item-opacity;
    }

    &.moving { @include setPhoto('moving'); }
    &.freight { @include setPhoto('freight'); }
    &.flown { @include setPhoto('flown'); }
    &.packing { @include setPhoto('packing'); }
    &.shared { @include setPhoto('shared'); }
    &.car { @include setPhoto('car'); }

    .info {

        margin: 0 20px 0 20px;
        position: relative;

        .service-name {
            padding-top: 20px;
            font-size: 19px;
            font-weight: 600;
            line-height: 20px;
            height: 41px;

            display: flex;
            align-items: center;
            justify-content: center;
        }

        .service-desc {
            margin-top: 10px;
            font-weight: 300;
            font-size: 14px;
            line-height: 17px;
            color: inherit;
        }
    }
}
</style>
