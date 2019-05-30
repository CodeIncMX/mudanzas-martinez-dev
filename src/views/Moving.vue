<template lang="pug">
main
    mm-start
    mm-hero(
        title="Cotiza tu servicio de mudanzas",
        :subtitle="subtitle",
        photo="moving",
        formName="cotizar-servicio-de-mudanzas",
        formIcon="truck-loading",
        blackFormTitle="Cotiza tu ",
        redFormTitle="mudanza aquí",
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
      subtitle: 'En Mudanzas Martinez puedes cotizar tu servicio de mudanzas con una excelente calidad y precio',
    };
  },
};
</script>
