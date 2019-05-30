<template lang="pug">
.form#cotizar
    transition(name="result")
        .request(v-if="showRequest")
            fa.truck(:icon="icon")
            h3 {{blackTitle}}
                strong  {{redTitle}}
            .data-contact
                mm-tex-box(
                    v-for="(f,i) in fields",
                    :dataModel="f"
                    :formName="formName"
                    @input="newVal => f.value= newVal",
                    @validate="newVal => f.isValid = newVal"
                    :key="i")
                .recaptcha-container(:class="reCaptchaInvalidStyle ? 'invalid' : ''")
                    vue-recaptcha(
                        @verify="onVerify",
                        @expired="onExpired",
                        :sitekey="sitekey")
                mm-button(
                  label="Enviar",
                  @click="submit",
                  :showLoading="loading",
                  :disabled="this.loading")
    transition(name="result")
        span.result(v-if="!showRequest & succesfulResult")
            .check
                fa(icon="check-circle")
            p
                strong(v-if="this.customerName !== ''" ) {{ this.customerName }}
                template  {{resp}}
            p Gracias por tu preferencia
            p
                a(@click="showRequest=true") Solicita otra cotización
        span.result(v-if="!showRequest & !succesfulResult")
            .fail
                fa(:icon="['far','flushed']")
            p
                strong(v-if="this.customerName !== ''" ) {{ this.customerName }}
                template  por el momento no es posible enviar tu soilcitud
            p.options
                template Pero no te preocupes, también puedes cotizar tu mudanza:
                ul
                    li
                        a Llámandonos al (55) 5966-4446
                    li
                        a O escríbenos a hola@mudanzas-martinez.com
                    li
                        a(@click="showRequest=true") Siempre puedes intentar nuevamente
</template>

<script>
import contactWebService from '@/ws/contact';
import mmTexBox from '@/components/shared/TexBox.vue';
import mmButton from '@/components/shared/Button.vue';
import VueRecaptcha from 'vue-recaptcha';

export default {
  components: {
    mmTexBox,
    mmButton,
    VueRecaptcha,
  },
  props: {
    formName: { type: String, required: true },
    icon: { type: String, required: true },
    blackTitle: { type: String, required: true },
    redTitle: { type: String, required: true },
  },
  methods: {
    onVerify(response) {
      this.reCaptchaResponse = response;
      this.reCaptchaValidated = true;
      this.reCaptchaInvalidStyle = false;
    },
    onExpired() {
      this.reCaptchaValidated = false;
      this.reCaptchaInvalidStyle = true;
    },
    allFieldsAreValid() {
      this.$bus.$emit('active-validate-styles', this.formName);
      this.reCaptchaInvalidStyle = !this.reCaptchaValidated;

      let allValids = true;
      this.fields.forEach((f) => {
        if (!f.isValid) allValids = false;
      });
      return this.reCaptchaValidated && allValids;
    },
    getParamArray() {
      const data = [];

      data.formName = this.formName;
      Object.keys(this.fields).forEach((key) => {
        if (key > 0) data[this.fields[key].name] = this.fields[key].value;
      });
      data.recaptcha = this.reCaptchaResponse;
      data.development = 'zanddro@gmail.com';

      this.customerName = data.name;

      return data;
    },
    handlerSucces() {
      this.loading = false;
      this.showRequest = false;
      this.succesfulResult = true;
    },
    handlerError(e) {
      console.log(e);
      this.loading = false;
      this.showRequest = false;
      this.succesfulResult = false;
    },
    submit() {
      this.loading = true;
      // this.handlerSucces()
      if (this.allFieldsAreValid()) {
        contactWebService.sendEmail({ ...this.getParamArray() })
          .then(() => this.handlerSucces())
          .catch(e => this.handlerError(e));
      } else {
        this.loading = false;
      }
    },
  },
  data() {
    return {
      resp: 'tu solicitud fue enviada correctamente, en breve nos pondrémos en contacto contigo',
      showRequest: true,
      succesfulResult: false,
      loading: false,
      sitekey: '6LfPuZsUAAAAADdddC05-Rbro0IE-M_Lh40gwJ8D',
      reCaptchaResponse: '',
      reCaptchaValidated: false,
      reCaptchaInvalidStyle: false,
      customerName: '',
      fields: [
        {
          name: 'name',
          placeholder: '¿Cuál es tu nombre?',
          icon: 'user',
          value: '',
          required: true,
          isValid: false,
        },
        {
          name: 'email',
          placeholder: '¿Cuál es tu email?',
          type: 'email',
          icon: 'envelope',
          value: '',
          required: true,
          isValid: false,
        },
        {
          name: 'phone',
          placeholder: '¿Cuál es tu número telefónico?',
          icon: 'phone',
          value: '',
          required: false,
          isValid: false,
        },
        {
          name: 'origin',
          placeholder: '¿Desde dónde te mudas?',
          icon: 'location-arrow',
          value: '',
          required: true,
          isValid: false,
        },
        {
          name: 'destination',
          placeholder: '¿Hacia dónde te mudas?',
          icon: 'thumbtack',
          value: '',
          required: true,
          isValid: false,
        },
        {
          name: 'message',
          placeholder: 'Cuéntanos lo que mudas',
          icon: 'couch',
          type: 'textarea',
          value: '',
          required: true,
          isValid: false,
        },
      ],
    };
  },
};
</script>


<style lang="scss" scoped>
@import './src/scss/mixins.scss';

.result-enter-active {
    transition: all 0.5s ease-out 0.5s;
}

.result-leave-active{
    transition: all 0.5s ease-in;
}

.result-enter, .result-leave-to {
    opacity: 0;
}

.form {
    background-color: rgba($white-color,0.9);
    border: 1px solid $whitish-color;
    border-radius: 5px;
    box-shadow: $general-shadow;
    height: $form-height;

    text-align: center;

    position: relative;
    .request, .result {
        position: absolute;
    }

    position: relative;
    .result {
        position: absolute;
        min-height: $form-height;

        padding-right: 20px;
        padding-left: 20px;

        @include desktop-large {
            padding-right: 30px;
            padding-left: 30px;
        }

        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: center;

        .check {
            color:$green-color;
            font-size: 50px;
        }

        .fail {
            color:$gray-color;
            font-size: 50px;
        }

        .options {
            ul {
                list-style: none;
                padding-left: 10px;

                li {
                    &:not(:last-child) {
                        margin-bottom: 20px;
                    }

                    a {
                        font-size: 13px;
                        color: $orangetish-color;
                        line-height: 10px;

                        &:hover {
                            color: $ligther-red;
                        }

                    }
                }
            }
        }

    }

    .request {
        width: 100%;

        .truck {
            padding-top: 15px;
            color: $red-color;
            font-size: 18px;
        }

        h3 {
            padding-top: 10px;
            color: $black-color;
        }

        .data-contact {
            margin: 15px 13px 0 13px;

            .recaptcha-container{
                display: flex;
                justify-content: center;

                &.invalid {
                    @include extra-small {
                        border: 2px solid $ligther-red;
                    }

                    div {
                        @include extra-small-up {
                            border: 2px solid $ligther-red;
                        }
                    }
                }

                div {
                    @include extra-small {
                        transform: scale(0.89);
                        transform-origin: 0 0;
                        width:270px;
                    }

                }
            }
        }
    }

}
</style>
