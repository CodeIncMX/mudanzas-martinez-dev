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
import mmHero from '@/components/sections/Hero.vue';
import mmFeatures from '@/components/sections/Features.vue';

export default {
  components: {
    mmHero,
    mmFeatures,
    mmStart,
  },
  data() {
    return {
      title: 'Cotiza tu mudanza compartida',
      subtitle: 'Las mudanzas compartidas son una excelent opción para ahorrar diner en un servicio de mudanza',
      photo: 'shared',
      formName: 'cotizar-volados',
      formIcon: 'user-friends',
      blackFormTitle: 'Cotiza ',
      redFormTitle: 'Mudanza Compartida',
    };
  },
};
</script>
