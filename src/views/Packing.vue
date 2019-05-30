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
      title: 'Cotiza tu servicio de empacado',
      subtitle: 'Contamos con cajas para mudanzas y matrial especial para proteger tus pertenencias, antes, durante y después de la mudanza',
      photo: 'packing',
      formName: 'cotizar-empacado',
      formIcon: 'box-open',
      blackFormTitle: 'Cotiza tu ',
      redFormTitle: 'empacado aquí',
    };
  },
};
</script>
