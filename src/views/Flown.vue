<template lang="pug">
main
    mm-start
    mm-hero(
        :title="title",
        :subtitle="subtitle",
        :photo="photo",
        :formName="formName",
        :formIcon="formIcon",
        :blackFormTitle="blackFormTitle",
        :redFormTitle="redFormTitle",
    )
    mm-features
</template>

<script>
import mmStart from '@/views/Start.vue';
import mmHero from '../components/sections/Hero.vue';
import mmFeatures from '@/components/sections/Features.vue';

export default {
  components: {
    mmHero,
    mmFeatures,
    mmStart,
  },
  data() {
    return {
      title: 'Cotiza tu volado de muebles',
      subtitle: 'En ocasiones no es posible suir o bajar por escaleras los muebles, en este caso lo ideal es usar el volado de muebles',
      photo: 'flown',
      formName: 'cotizar-volados',
      formIcon: 'people-carry',
      blackFormTitle: 'Cotiza tu ',
      redFormTitle: 'volado aquí',
    };
  },
};
</script>
