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
      title: 'Cotiza tu servicio de flete',
      subtitle: 'Contamos con personal capacitado y unidades en buen estado para realizar todo tipo de fletes',
      photo: 'freight',
      formName: 'cotizar-flete',
      formIcon: 'truck-moving',
      blackFormTitle: 'Cotiza tu ',
      redFormTitle: 'flete aquí',
    };
  },
};
</script>
