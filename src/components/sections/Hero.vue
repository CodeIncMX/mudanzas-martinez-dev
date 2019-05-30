<template lang="pug">
.hero
    transition(appear, name="photo")
        .photo(:class="photo")
    .container
        transition(appear, name="logo")
            mm-logo(color="white")
        .copy
            transition(appear, name="title")
                h1.title {{ title }}
            transition(appear, name="subtitle")
                p.subtitle {{subtitle }}
        transition(appear, name="form")
            .form-section
                mm-contact-form(
                    :formName="formName",
                    :icon="formIcon",
                    :blackTitle="blackFormTitle",
                    :redTitle="redFormTitle"
                )
        .social-media
            a(target="_blank", href="https://www.facebook.com/mudanzasmartinez2099/")
                fa(:icon="['fab','facebook-f']")
            a(target="_blank", href="https://www.facebook.com/transportesymudanzasmartinez.martinez")
                fa(:icon="['fab','twitter']")
            a(target="_blank", href="https://www.facebook.com/transportesymudanzasmartinez.martinez")
                fa(:icon="['fab','linkedin-in']")

</template>

<script>
import mmContactForm from '@/components/shared/ContactForm.vue';
import mmLogo from '@/components/shared/Logo.vue';

export default {
  components: {
    mmContactForm,
    mmLogo,
  },
  props: {
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    photo: { type: String, required: true },
    formName: { type: String, required: true },
    formIcon: { type: String, required: true },
    blackFormTitle: { type: String, required: true },
    redFormTitle: { type: String, required: true },
  },
  methods: {
    test() {
      console.log('test exitoso!');
    },
  },
};
</script>


<style lang="scss" scoped>
@import './src/scss/mixins.scss';

/* Transitions */
.logo-enter-active {
    transition: $hero-transition;
}

.logo-enter {
    opacity: 0;
}

.title-enter-active {
    transition: $hero-transition;
}

.title-enter {
    transform: translateX(-150px);

    @include mobile-landscape-up {
        transform: translateX(200px);
    }
}

.photo-enter-active {
    transition: $hero-transition;
}

.photo-enter {
    transform: translateX(150px);

    @include mobile-landscape-up {
        transform: translateX(200px);
    }
}

.subtitle-enter-active {
    transition: $hero-transition;
}

.subtitle-enter {
    transform: translateX(-250px);

    @include mobile-landscape-up {
        transform: translateX(300px);
    }
}

.form-enter-active {
    transition: $hero-form-transition;
}

.form-enter {
    transform: translateY(350px);
}

/* PRIVATE MIXINS */
@mixin setPhoto($name) {
    @include background-image('../../assets/img/hero', $name, 'png');

    @include mobile-landscape-up {
        @include background-image('../../assets/img/hero', $name + '-mobile-landscape', 'png');
    }

    @include desktop-up {
        @include background-image('../../assets/img/hero', $name + '-desktop', 'png');
    }
}

/* STYLES */

.hero {
    background-image: $red-gradient;
    color: $white-color;
    display:flex;
    justify-content: center;

    height: 850px;
    @include mobile-landscape-up {
        height: 650px;
    }

    @include mobile-margin;

    padding: $page-top $mobile-side-margin 0 $mobile-side-margin;
    @include tablet-up {
        padding-right: 0;
        padding-left: 0;
    }

    position: relative;

    .photo {
        position: absolute;
        left: $hero-photo-left;
        top: $header-height;
        width: calc( 100vw - #{$hero-photo-left});
        height: 485px;
        background-size: cover;

        @include mobile-landscape-up {
            top: auto;
            bottom: 0;
            height: 600px;
        }

        &.init {
            @include setPhoto('init');
        }

        &.moving {
            @include setPhoto('moving');
        }

        &.freight {
            @include setPhoto('freight');
        }

        &.flown {
            @include setPhoto('flown');
        }

        &.packing {
            @include setPhoto('packing');
        }

        &.shared {
            @include setPhoto('shared');
        }

        &.car {
            @include setPhoto('car');
        }

    }


    .container {
        z-index: $capa-1;

        @include mobile-landscape-up {
            display: grid;
            grid-template-columns: 4fr 7fr 1fr;
            grid-template-rows: 80px 1fr 180px;
        }

        @include desktop-up {
            grid-template-rows: 85px 1fr 180px;
        }

         .copy {
             @include mobile-landscape-up {
                 grid-column: 2 / 4;
                 grid-row: 2 / 3;
                 margin-top: 15px;
                 margin-left: 20px;
             }

             @include tablet-up {
                 margin-top: 40px;
                 margin-left: 40px;
             }

             @include desktop-up {
                 margin-left: 65px;
                 margin-top: 70px;
             }

             .title {
                 padding-top: 40px;
                 max-width: 280px;

                 @include mobile-landscape-up {
                     max-width: 365px;
                     padding-top: 10px;
                 }

                 @include desktop-up {
                     max-width: 660px;
                 }
             }

             .subtitle {
                color: $white-color;
                padding-top: 10px;
                font-weight: 600;
                font-size: 14px;
                line-height: 17px;
                letter-spacing: -0.05px;

                @include desktop-up {
                    font-size: 21px;
                    line-height: 23px;
                    letter-spacing: -0.5px;
                     margin-top: 25px;
                }
             }
        }

        .form-section {
            padding-top: 20px;

            @include mobile-landscape-up {
                grid-column: 1 / 2;
                grid-row: 2 / 3;
            }
        }

        .social-media {
            display: none;

            @include mobile-landscape-up {
                grid-column: 3 / 4;
                grid-row: 2 / 3;
                justify-self: end;
                align-self: end;

                display: flex;

                flex-direction: column;
                justify-content: center;
                align-items: center;

                width: $social-media-bar-width;
                height: $social-media-bar-height;
                background-color: $second-red-color;
                border-top-left-radius: $social-media-bar-border-radius;
                border-bottom-right-radius: $social-media-bar-border-radius;

                a {
                    color: $white-color;
                    font-size: $social-media-bar-font-size;
                    text-decoration: none;
                    cursor:pointer;
                    pointer-events: auto;

                    &:not(:last-child) {
                        margin-bottom: 10px;
                    }

                    &:hover {
                        color: $whitish-color;
                    }

                }
            }
        }
    }
}
</style>
