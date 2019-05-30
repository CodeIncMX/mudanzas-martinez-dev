<template lang="pug">
.map#map(:class="classes")
    transition(name="data")
      .data(v-if="showData")
        h3.title
            template {{ title.normal }}
            strong {{ title.strong }}
        fa.origin(icon="map-marker-alt", size="2x")
        fa.destination(icon="map-marker-alt", size="2x")
        p.date
            template {{ info + '&nbsp&nbsp' }}
            fa.calendar(:icon="['far','calendar']")
</template>

<script>
export default {
  data() {
    return {
      startAnimation: false,
      animationFirstDelay: 3000,
      animationDelay: 5000,
      offset: 1000,
      scrollY: 0,
      title: {
        normal: '',
        strong: '',
      },
      info: '',
      classes: '',
      showData: false,
      idx: 0,
      outs: [
        {
          title: {
            normal: 'CDMX - ',
            strong: 'Cancún',
          },
          info: '28 de cada mes',
          classes: 'to-cancun',
        },
        {
          title: {
            normal: 'CDMX - ',
            strong: 'Monterrey',
          },
          info: 'Cada 15 días',
          classes: 'to-monterrey',
        },
        {
          title: {
            normal: 'Cancún - ',
            strong: 'CDMX',
          },
          info: '28 de cada mes',
          classes: 'to-cdmx',
        },
        {
          title: {
            normal: 'CDMX - ',
            strong: 'Hermosillo',
          },
          info: 'Cada 15 días',
          classes: 'to-hermosillo',
        },
      ],
    };
  },
  watch: {
    scrollY(value) {
      if (!this.startAnimation) {
        const pos = document.getElementById('map').offsetTop - this.offset;
        if (pos < value) {
          this.startAnimation = true;
        }
      }
    },
    startAnimation() {
      this.next();
    },
  },
  methods: {
    handleScroll() {
      this.scrollY = window.scrollY;
    },
    next() {
      setTimeout(() => {
        this.idx = (this.idx === (this.outs.length - 1)) ? 0 : this.idx + 1;
        this.title = this.outs[this.idx].title;
        this.info = this.outs[this.idx].info;
        this.classes = this.outs[this.idx].classes;
        this.animationFirstDelay = 0;
        this.next();
      }, (this.animationFirstDelay > 0) ? this.animationFirstDelay : this.animationDelay);

      // Show data after 0.5 sec the map appers
      if (this.animationFirstDelay === 0) {
        setTimeout(() => {
          this.showData = true;
        }, 500);
      }

      // Hide data before 0.5 sec the map appers
      if (this.animationFirstDelay === 0) {
        setTimeout(() => {
          this.showData = false;
        }, this.animationDelay - 500);
      }
    },
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>

<style lang="scss" scoped>
@import './src/scss/mixins.scss';

/* TRANSITIONS */
.data-enter-active, .data-leave-active {
  transition: all 0.5s ease;
}

.data-enter, .data-leave-to {
  opacity: 0;
}

/* STYLES */

.map {
    margin-top: 20px;
    width: 100%;
    height: 270px;
    @include background-image('../../../assets/img/shared_moving', 'map', 'png');
    background-repeat: no-repeat;

    background-size: 100% auto;
    background-position: 0 0;

    transition: all 0.5s ease;

    position: relative;

    .origin {
      color: $gray-color;
      position: absolute;
    }

    .destination {
      color: $orangetish-color;
      position: absolute;
    }

    &.to-cancun {
      background-size: auto 100%;
      background-position: 110% -65px;

    .origin {
      top: 100px;
      right: 230px;
    }

    .destination {
      top: 105px;
      right: 20px;
    }
  }

        &.to-monterrey {
          background-size: auto 90%;
          background-position: 0 -10px;

          .origin {
            top: 130px;
            left: 180px;
          }

          .destination {
            top: 60px;
            left: 200px;
          }
        }

        &.to-hermosillo {
          background-size: auto 95%;
          background-position: 0 20px;

          .origin {
            top: 160px;
            left: 190px;
          }

          .destination {
            top: 55px;
            left: 85px;
          }
        }

        &.to-cdmx {
          background-size: auto 100%;
          background-position: 100% -65px;

          .origin {
            top: 100px;
            right: 5px;
          }

          .destination {
            top: 90px;
            right: 220px;
          }
        }

        .title {
            padding-top: 40px;
        }

        .date {
            padding-top: 150px;
            // text-align: left;

            .calendar {
                color: $red-color;
            }
        }
    }
</style>
