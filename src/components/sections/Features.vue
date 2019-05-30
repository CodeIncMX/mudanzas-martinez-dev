<template lang="pug">
.features
    .container
        .desc.container
            h2.title
                template {{ title.normal }}
                strong {{ title.bold }}
            p.copy {{ copy }}
        .features-grid
            mm-feature-card(v-for="(f,i) in features",
                :image="f.image",
                :icon="f.icon",
                :title="f.title",
                :desc="f.desc",
                :url="f.url",
                :key="i"
            )
</template>

<script>
import mmFeatureCard from '@/components/sections/features/FeatureCard.vue';

export default {
  components: {
    mmFeatureCard,
  },
  data() {
    return {
      title: {
        normal: 'Nuestros',
        bold: ' Servicios',
      },
      copy: 'Sabemos que una mudanza es un gran momento para ti y tu familia, por eso te ofrecemos los siguientes servicios:',
      features: [
        {
          image: 'moving',
          icon: 'truck-loading',
          title: 'Servicio de Mudanzas',
          desc: 'Protegemos tus muebles con colchones y plástico adherible',
          url: 'moving',
        },
        {
          image: 'freight',
          icon: 'truck-moving',
          title: 'Servicio de Fletes',
          desc: 'Cargamos, transportamos y entregamos la mercancia que necesitas',
          url: 'freight',
        },
        {
          image: 'flown',
          icon: 'people-carry',
          title: 'Servicio de Volado de Muebles',
          desc: 'Subimos y bajamos muebles mediante volados, contamos con equipo especializado',
          url: 'flown',
        },
        {
          image: 'packing',
          icon: 'box-open',
          title: 'Empacados y desempacados',
          desc: 'Para tu mudanza con o sin material incluido (cajas para mudanza y material de protección)',
          url: 'packing',
        },
        {
          image: 'shared',
          icon: 'user-friends',
          title: 'Mudanzas Compartidas',
          desc: 'Ahorra dinero en tu mudanza y contrata un servicio compartido',
          url: 'shared',
        },
        {
          image: 'car',
          icon: 'car',
          title: 'Traslado de Vehículos',
          desc: 'Envía tu auto en una unidad cerrada y evita el desgaste',
          url: 'car',
        },
      ],
    };
  },

};
</script>

<style lang="scss" scoped>
@import './src/scss/mixins.scss';

/* STYLES */
.features {

    background-image: $red-gradient-inverted;
    text-align: center;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .desc.container {
        @include mobile-margin;

        .title {
            padding-top: 50px;
        }

        .copy {
            padding-top: 10px;
        }
    }

    .features-grid {

        box-shadow: $general-shadow-inverted;
        border: 1px solid $second-red-color;
        overflow: hidden;

        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        grid-template-rows: repeat(auto-fit, 300px);
        grid-gap: 30px;

        margin: 15px 0 70px 0;

        @include mobile-landscape-up {
            grid-gap: 0;
            border-radius: 20px;
        }
    }

}
</style>
