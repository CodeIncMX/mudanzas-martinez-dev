<template lang="pug">
.footer
  .container
    .us
      h2.title {{us.title}}
      p.copy {{us.copy}}
      p.message {{us.message}}
      .social-media
        a(target="_blank",
            @click.native="showItemsFlag = false",
            href="https://www.facebook.com/mudanzasmartinez2099/")
            fa(:icon="['fab','facebook-f']")
        a(target="_blank",
            @click.native="showItemsFlag = false",
            href="https://www.facebook.com/transportesymudanzasmartinez.martinez")
            fa(:icon="['fab','twitter']")
        a(target="_blank",
            @click.native="showItemsFlag = false",
            href="https://www.facebook.com/transportesymudanzasmartinez.martinez")
            fa(:icon="['fab','linkedin-in']")
    .services
      h2.title {{services.title}}
      ul
        li
            router-link(to="/cotizar-servicio-de-mudanzas") Mudanzas
        li
            router-link(to="/cotizar-flete") Fletes
        li
            router-link(to="/cotizar-volado") Volado de Muebles
        li
            router-link(to="/cotizar-empacado") Empacado
        li
            router-link(to="/cotizar-mudanza-compartida") Mudanzas Compartidas
        li
            router-link(to="/cotizar-traslado-de-auto") Traslado de Auto
    .contact-us
      h2.title {{contact.title}}
      .addrees
        .icon
          fa(icon="map-marker-alt")
        .info
          p.title {{address.title}}
          p.data {{address.data}}
      .office-phone
        .icon
          fa(icon="phone")
        .info
          p.title {{phone.office.title}}
          p.data
            a(:href="phone.office.href") {{phone.office.data}}
      .mobile-phone
        .icon
          fa(icon="mobile")
        .info
          p.title {{phone.mobile.title}}
          p.data
            a(:href="phone.mobile.href1") {{phone.mobile.data1}}
            template &nbsp&nbsp&nbsp
            a(:href="phone.mobile.href2") {{phone.mobile.data1}}
  .credits
    p ® 2019 Mudanzas Martínez
    p.powered-by
      template Desarrollado por &nbsp;
      a(href="https://www.facebook.com/CodeIncMX/") Code Inc MX
</template>

<script>
export default {
  data() {
    return {
      us: {
        title: 'Nosotros',
        copy: 'Transportes y Mudanzas Martinez es una empresa enfocada al transporte y mudanzas, estamos comprometidos en brindar una excelente calidad al mudar sus pertenencias.',
        message: 'Cotiza tu mudanza con nosotros',
      },
      services: {
        title: 'Nuestros Servicios',
      },
      contact: {
        title: 'Contáctanos',
      },
      address: {
        title: 'Dirección',
        data: 'Av. Victoria, Industrial, 07800 Ciudad de México, CDMX',
      },
      phone: {
        office: {
          title: 'Teléfono Oficina',
          data: '6582-6650',
          href: 'tel:+5215565826650',
        },
        mobile: {
          title: 'Celular',
          data1: '4983-7864',
          href1: 'tel:+5215549837864',
          data2: '4995-1300',
          href2: 'tel:+5215549951300',
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@import './src/scss/mixins.scss';

/* STYLES */

.footer {
  background-color: $black-color;
  color: $white-color;

  text-align: center;

  display:flex;
  flex-direction: column;
  align-items: center;

  .container {
    z-index: $capa-2;
    @include  mobile-margin;
    display: grid;
    grid-template-columns: 1fr;

    @include mobile-landscape-up {
      grid-template-columns: repeat(3, 1fr);
      font-size: 13px;
    }

    h2 {
      @include mobile-landscape-up {
        padding-bottom: 30px;
        font-size: 22px;
      }
    }

    .us {
      margin-top: 40px;

      h2, p {
        color: $white-color;
      }

      .social-media {
        a {
          font-size: 31px;
          color: $second-red-color;
          cursor: pointer;

          &:not(:last-child) {
              margin-right: 30px;
          }

          transition: all 0.5s ease;

          &:hover {
            color: $orangetish-color;
          }
        }
      }
    }

    .services {
      margin-top: 40px;
      text-align: center;

      ul {
        list-style: none;
        padding: 0;

        li {
          a{
            color: $gray-color;

            transition: all 0.3s ease;

            &:hover {
              color: $white-color;
            }
          }

          &:not(last-child) {
            margin-bottom: 10px;
          }
        }
      }
    }

    .contact-us {
      margin-top: 40px;

      p {
        color: $white-color;
      }

      .addrees, .office-phone, .mobile-phone {
        display: grid;
        grid-template-columns: 60px 1fr;
        margin-top: 20px;

        p {
          margin: 0;
        }

        .icon {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 28px;
          color: $second-red-color;
        }

        .info {
          .title {
            text-transform: uppercase;
            text-align: left;
            font-weight: 600;
            letter-spacing: 1.5px;
          }

          .data {
            text-align: left;
            font-weight: 300;
            color: $gray-color;

            a {
              text-decoration: none;
            }
          }
        }
      }
    }
  }

  .credits {
    margin-top: 40px;
    padding-bottom: 10px;

    p {
      margin: 0;
      color: $white-color;
      font-size: 12px;
      font-weight: 300;

      a {
        color: $white-color;
        font-weight: 500;
        text-decoration: none;
      }
    }
  }
}

</style>
