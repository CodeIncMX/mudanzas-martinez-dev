<template lang="pug">
.testimonials
  .container
    h2.title
      template {{title.normal}}
      strong {{title.strong}}
    p.copy {{copy}}
    .quotes
      .quote(v-for="t in testimonials")
        span.name {{t.name}}
        p.comment {{t.comment}}
        span.date {{t.date}}
</template>

<script>
export default {
  data() {
    return {
      title: {
        normal: 'Lo que opinan de',
        strong: ' Mudanzas Martínez',
      },
      copy: 'Sabemos que la confuanza al contratar un servicio es muy importante, por eso nos gustaría compartirte lo que piensan nuestros clientes',
      testimonials: [
        {
          comment: 'Agradezco mucho sus atenciones, siempre quedan bien en todos los servicios, nunca ha habido queja, es un placer contratarlos. Gracias! Abrazo y saludos!',
          name: 'Arie',
          date: '19 Mayo 2017',
        },
        {
          comment: 'Excelente servicio en logistica y preparacion del proceso de mudanza, los recomiendo ampliamente',
          name: 'Jorge',
          date: '11 Enero 2017',
        },
        {
          comment: 'Excelente servicio, atención personal de inicio a fin, cuidado de mis muebles, excelente trato del personal, amables, respetuosos y serviciales, el precio justo, por mucho la mejor mudanza que he contratado',
          name: 'Aurora',
          date: '6 Mayo 2017',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import './src/scss/mixins.scss';

/* STYLES */
.testimonials {
  background-color: $darken-gray-color;
  text-align: center;
  padding-bottom: 50px;

  display:flex;
  align-items: center;
  justify-content: center;

  p {
    margin: 0;
  }

  .container {
    @include mobile-margin;
    color: $white-color;

    .title {
      padding-top: 50px;

      strong {
        color: $black-color;
      }
    }

    .copy {
      padding-top: 25px;
      color: $white-color;
    }

    .quotes {
      padding-top: 35px;

      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
      gap: 30px;

      .quote {
        color: $white-color;
        border-radius: 10px;
        background-color: $white-color;
        padding: 20px;

        .name {
          color: $red-color;
          font-size: 22px;
        }

        .comment {
          margin-top: 15px;
          font-size: 15px;
          line-height: 22px;
          margin-bottom: 15px;
        }

        .date {
          color: $darken-gray-color;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
