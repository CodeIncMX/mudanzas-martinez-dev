<template lang="pug">
    button.btn(
        @click="event",
        :disabled="disabled",
        :class="style"
    )
        span.label {{ label }}
        fa.loading(v-if="showLoading", icon="spinner", spin)
</template>

<script>
export default {
  props: {
    label: { type: String, required: true },
    color: { type: String, default: 'red' },
    size: { type: String, default: 'normal' },
    showLoading: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
  },
  data() {
    return {
      style: '',
    };
  },
  methods: {
    event() {
      this.$emit('click');
    },
  },
  created() {
    this.style = `${this.color} ${this.size}`;
  },
};
</script>

<style lang="scss">
@import './src/scss/variables.scss';

// $botton-color: $orangetish-color;
$botton-color: $second-red-color;

.btn {
    margin-top: 7px;
    border-radius: $button-border-radius;
    height: $button-height;

    cursor: pointer;
    outline: none;
    color: $white-color;
    font-family: $primary-font;
    font-weight: 600;
    letter-spacing: 0.5px;

    &.red {
        background-color: $botton-color;
        border: none;

        transition: all 1s ease;

        &:hover {
          background-color: $orangetish-color;
        }
    }

    &.transparent {
        background-color: transparent;
        border: 2px solid $white-color;

        transition: all 0.5s ease;

        &:hover {
            background-color: $white-color;
            color: $botton-color;
        }
    }

    &.normal {
        width: 100%;
        font-size: 22px;
    }

    &.small {
        width: 200px;
        font-size: 18px;
        font-weight: 500;
        letter-spacing: 0.75px;
    }

    position: relative;

    .loading {
        position: absolute;
        top: 10px;
        right: 10px;
    }

}
</style>
