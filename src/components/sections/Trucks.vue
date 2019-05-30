<template lang="pug">
.trucks
  .container
    h2.title
      template {{title.normal}}
      strong {{title.strong}}
    p.copy {{copy}}
    .trucks-slider
      .selector
        ul
          li.back(@click="back")
            fa(icon="chevron-circle-left")
          li(
            v-for="(t,i) in trucks",
            v-if="idx === i")
            transition(name="title")
              p(v-if="showDisplayer") {{t.name}}
          li.next(@click="next")
            fa(icon="chevron-circle-right")
      .displayer
        transition(name="photo")
          .photo(v-if="showDisplayer", :class="trucks[idx].photoClass")
        transition(name="desc")
          .desc(v-if="showDisplayer")
            p {{trucks[idx].desc}}
            ul.feautres
              li(v-for="(l,i) in trucks[idx].list")
                fal.bullet
                  fa.circle(icon="circle")
                  falt(
                    class="fa-inverse",
                    transform="shrink-5",
                    :value="i+1")
                template {{l}}
            mm-button.btn(
              label="Cotizar Mudanza",
              size="small",
              :showLoading="false",
              @click="submit")
</template>

<script>
import mmButton from '@/components/shared/Button.vue';
import { setTimeout } from 'timers';

export default {
  components: {
    mmButton,
  },
  data() {
    return {
      idx: 0,
      showDisplayer: true,
      title: {
        normal: 'Nuestras',
        strong: ' Unidades',
      },
      copy: 'Contamos con unidades para mudanzas de modelos recientes en excelente estado',
      trucks: [
        {
          name: 'Camioneta Pick Up',
          desc: 'Unidad para mudanzas pequeñas, normalmente mide 2 metros de ancho por 2.8 metros de largo y una altura de 2.4 metros. Los servicios de este tipo de camioneta pueden incluir:',
          list: [
            'Colchoneta y plástico adherible para proteger tus muebles',
            'Carga y descarga de tus muebles',
            'Traslado de tus muebles en unidad cerrada',
            'Podemos incluir seguro de riesgo ordinario de transporte',
          ],
          photoClass: 'pickup',
        },
        {
          name: 'Camioneta de 3.5 Toneladas Larga',
          desc: 'Unidad para mudanzas grandes, normalmente mide 2.2  metros de ancho por 5 metros de largo y una altura de 2.6 metros. Los servicios  de este tipo de camioneta pueden incluir:',
          list: [
            'Colchoneta y plástico adherible para proteger tus muebles',
            'Carga y descarga de tus muebles',
            'Traslado de tus muebles en unidad cerrada',
            'Podemos incluir seguro de riesgo ordinario de transporte',
          ],
          photoClass: 'larga',
        },
      ],
    };
  },
  methods: {
    submit() {
      // eslint-disable-next-line
      location.href = '#cotizar';
    },
    back() {
      setTimeout(() => {
        this.idx = (this.idx === 0) ? (this.trucks.length - 1) : this.idx - 1;
        this.showDisplayer = true;
      }, 1000);

      setTimeout(() => {
        this.showDisplayer = false;
      }, 500);
    },
    next() {
      setTimeout(() => {
        this.idx = (this.idx === (this.trucks.length - 1)) ? 0 : this.idx + 1;
        this.showDisplayer = true;
      }, 1000);

      setTimeout(() => {
        this.showDisplayer = false;
      }, 500);
    },
  },
};
</script>

<style lang="scss" scoped>
@import './src/scss/mixins.scss';

/* TRANSITIONS */
.title-enter-active, .title-leave-active {
  transition: all .7s;
}

.title-enter, .title-leave-to {
  opacity: 0;
}

.photo-enter-active, .photo-leave-active {
  transition: all .5s;
}

.photo-enter, .photo-leave-to {
  opacity: 0;
}

.photo-enter {
  transform: translateX(-100px);
}

.photo-leave-to {
  transform: translateX(100px);
}

.desc-enter-active, .desc-leave-active {
  transition: opacity 1s;
}

.desc-enter, .desc-leave-to {
  opacity: 0;
}

/* PRIVATE MIXINS */
@mixin setPhoto($name) {
  background-image: url('../../assets/img/trucks/' + $name + '.png');
}

/* STYLES */
.trucks {
  background-color: $gray-color;
  text-align: center;
  display:flex;
  align-items: center;
  justify-content: center;

  .container {
    z-index: $capa-1;
    @include mobile-margin;
    color: $black-color;

    .title {
      padding-top: 50px;
    }

    .copy {
      padding-top: 10px;
      color: $black-color;
    }

    .trucks-slider {

      .selector {
        ul {
          list-style: none;
          padding: 0;

          // display: flex;
          // justify-content: center;
          // align-items: center;

          display: grid;
          grid-template-columns: 1fr 220px 1fr;

          li {
            align-self:center;

            p {
              min-height: 61px;
              color: $white-color;
              text-transform: uppercase;
              font-size: 20px;

              display: flex;
              align-items: center;
              justify-content: center;
            }

            &.back, &.next {
              color: $red-color;
              font-size: 24px;
              cursor: pointer;

              transition: all 1s ease;

              &:hover {
                color: $orangetish-color;
              }
            }

            &.back {
              margin-right: 15px;
              justify-self: right;
            }

            &.next {
              margin-left: 15px;
              justify-self: left;
            }
          }
        }
      }

      .displayer {

        padding-bottom: 30px;
        display: grid;

        @include mobile-landscape-up {
          grid-template-columns: 1fr 1fr;
        }

        .photo {
          width: 100%;
          background-position: center;
          background-size: contain;
          background-repeat: no-repeat;

          height: 150px;
          @include mobile-landscape-up {
            height: 300px;
          }

          &.pickup { @include setPhoto('pickup'); }
          &.larga { @include setPhoto('35ton'); }
        }

        .desc {
          font-size: 15px;
          font-weight: 300;
          line-height: 19px;

          @include mobile-landscape-up {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 2rem;
            text-align: left;
          }

          ul {
            list-style: none;
            padding: 0;
            text-align: left;

            li {
              padding-top: -10px;

              &:not(:last-child) {
                padding-bottom: 9px;
              }

              .bullet {
                font-size: 20px;
                padding-right: 15px;

                .circle {
                  color: $red-color;
                }
              }
            }
          }

          .btn {
            align-self: center;
          }
        }
      }
    }
  }
}
</style>
