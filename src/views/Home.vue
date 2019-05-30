<template lang="pug">
main
    mm-start
    mm-hero(
        title="Cotiza tu mudanza en CDMX",
        :subtitle="subtitle",
        photo="init",
        formName="página de inicio",
        formIcon="truck-moving",
        blackFormTitle="Cotiza tu ",
        redFormTitle="mudanza aquí",
    )
    mm-features
    mm-shared-moving
    mm-trucks
    mm-testimonials
</template>

<script>
import mmStart from '@/views/Start.vue';
import mmHero from '../components/sections/Hero.vue';
import mmFeatures from '@/components/sections/Features.vue';
import mmSharedMoving from '@/components/sections/SharedMoving.vue';
import mmTrucks from '@/components/sections/Trucks.vue';
import mmTestimonials from '@/components/sections/Testimonials.vue';

export default {
  components: {
    mmHero,
    mmFeatures,
    mmSharedMoving,
    mmStart,
    mmTrucks,
    mmTestimonials,
  },
  data() {
    return {
      subtitle: 'Cotiza tu servicio de mudanzas df, contamos con unidades en excelente estado, personal capacitado para mudar tu patrimonio',
    };
  },
};
</script>
