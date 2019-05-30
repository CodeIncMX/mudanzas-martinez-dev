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
      title: 'Cotiza tu traslado de auto',
      subtitle: 'En Mudanzas Martinez puedes cotizar tu servicio de mudanzas con una excelente calidad y precio',
      photo: 'car',
      formName: 'cotizar-servicio-de-mudanzas',
      formIcon: 'truck-loading',
      blackFormTitle: 'Cotiza tu ',
      redFormTitle: 'traslado aquí',
    };
  },
};
</script>
