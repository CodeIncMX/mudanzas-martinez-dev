<template lang="pug">
.shared-moving
    .container
        .data
          div.copy
            h2.title
                template {{ title.normal }}
                strong {{ title.bold }}
            p {{ copy }}
          mm-map-slider
          mm-button.button(
            label="Cotizar",
            @click="submit",
            :showLoading="false",
            size="small")
</template>

<script>
import mmMapSlider from '@/components/sections/shared_moving/MapSlider.vue';
import mmButton from '@/components/shared/Button.vue';

export default {
  components: {
    mmMapSlider,
    mmButton,
  },
  data() {
    return {
      title: {
        normal: 'Mudanzas',
        bold: ' Compartidas',
      },
      copy: 'Ahorra al ralizar tu mudanza, una excelente opción es contratar una mudanza compartida. Revisa aquí nuestras próximas salidas.',
    };
  },
  methods: {
    submit() {
      if (this.$route.name === this.url) {
        // eslint-disable-next-line
        location.href = '#cotizar';
      } else {
        this.$router.push({ name: 'shared' });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import './src/scss/mixins.scss';

/* STYLES */
.shared-moving {

    background-color: $white-color;
    text-align: center;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @include  mobile-margin;

    .data {
      @include mobile-landscape-up {
        margin-top: 30px;
        display: grid;
        grid-template-columns: 1fr minmax(300px, 400px);
      }

      .copy {
          padding-top: 10px;

          @include mobile-landscape-up {
            padding: 0 2rem 0 2rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }

          @include desktop-up {
            padding: 0 7rem 0 7rem;
          }

          .title {
              padding-top: 30px;

              @include mobile-landscape-up {
                padding-top: 0;
              }
          }
      }

      .button {
        grid-column: 1 / 3;
        justify-self: center;
        margin-bottom: 40px;
      }
    }
}
</style>
