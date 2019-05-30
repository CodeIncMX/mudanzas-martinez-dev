<template lang="pug">
    header
        nav.menu.container
            ul
                li
                    a.phone(:href="phoneHref")
                        fa(icon="phone" flip='horizontal')
                        template {{ '&nbsp&nbsp' + phone }}
                    template {{ '&nbsp |' }}
                li
                    router-link(to="/" exact) Inicio
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
        transition(name="show-dropdown-menu" v-on:after-enter="showItemsFlag=true")
            .dropdown-menu(v-if="showDropdownMenuFlag")
                mm-logo(@click.native="showItemsFlag = false")
                transition(name="items", v-on:after-leave="showDropdownMenuFlag = false")
                    .options(v-if="showItemsFlag")
                        ul
                            li
                                router-link(
                                    to="/",
                                    @click.native="showItemsFlag = false"
                                    exact) Inicio
                            li
                                router-link(
                                    to="/cotizar-servicio-de-mudanzas",
                                    @click.native="showItemsFlag = false") Mudanzas
                            li
                                router-link(
                                    to="/cotizar-flete",
                                    @click.native="showItemsFlag = false") Fletes
                            li
                                router-link(
                                    to="/cotizar-volado",
                                    @click.native="showItemsFlag = false") Volado de Muebles
                            li
                                router-link(
                                    to="/cotizar-empacado",
                                    @click.native="showItemsFlag = false") Empacado
                            li
                                router-link(
                                    to="/cotizar-mudanza-compartida",
                                    @click.native="showItemsFlag = false") Mudanzas Compartidas
                            li
                                router-link(
                                    to="/cotizar-traslado-de-auto",
                                    @click.native="showItemsFlag = false") Traslado de Auto
                            li.social-media
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
        .phone-mobile
            a.phone(:href="phoneHref")
                fa(icon="phone" flip='horizontal')
        fa.expand-icon.absolute-right-side-margin(
            icon="bars",
            @click="showDropdownMenuFlag = true")
        transition(name="icon")
            fa.close-icon.absolute-right-side-margin(
                icon="times",
                @click="showItemsFlag = false",
                v-if="showItemsFlag")

</template>

<script>
import mmLogo from '@/components/shared/Logo.vue';

export default {
  components: {
    mmLogo,
  },
  data() {
    return {
      showDropdownMenuFlag: false,
      showItemsFlag: false,
      phone: '6582-6650',
      phoneHref: 'tel:+52165826650',
    };
  },
//     watch: {
//         $route (to, from) {
//             //It doesn't listen if the currente page is the goal location
//             console.log(to)
//             console.log(from)
//             this.showItemsFlag = false
//         }
//   }
};
</script>

<style lang="scss" scoped>
@import './src/scss/mixins.scss';

.icon-enter-active {
    transition: $menu-item-transition-enter;
}

.icon-leave-active {
    transition: $menu-item-transition-leave;
}

.icon-enter, .icon-leave-to {
    opacity: 0;
    // transform: scale(0.1)
}

.items-enter-active {
    transition: $menu-item-transition-enter;
}

.items-leave-active {
    transition: $menu-item-transition-leave;
}

.items-enter, .items-leave-to {
    opacity: 0;
}

.show-dropdown-menu-enter-active, .show-dropdown-menu-leave-active {
    transition: all $dropdown-menu-time-animation ease;
}

.show-dropdown-menu-enter, .show-dropdown-menu-leave-to {
    opacity: 0;
}

header{
    z-index: $capa-2;
    position: absolute;

    width: 100%;
    height: $header-height;

    display: flex;
    justify-content: center;
    color: $white-color;

    .phone {
        text-decoration: none;
         color: $white-color !important;

        svg {
            color: $white-color;
        }

        transition: all 0.3s ease;

        &:hover {
            text-decoration: none !important;
            color: $whitish-color !important;
        }

    }

    .phone-mobile {
        position: absolute;
        right: calc(#{$mobile-side-margin} + #{$mobile-side-margin} + #{$menu-icon-size} + 10px);
        top: calc(#{$page-top} - 5px) !important;

        .phone {
            font-size: calc(#{$menu-icon-size} - 4px);
        }
    }

    .menu {
         display: none;
         height: $header-height;

         @include desktop-up {
             display: flex;
             flex-direction: row;
             justify-content: flex-end;
             align-items: center;

             ul {
                padding-left: 0;
                margin-top: 0;
                margin-bottom: 0;
                list-style: none;
                display: flex;

                li {
                    &:not(:last-child) {
                        margin-right: 10px;
                    }

                    a {
                        color: $whitish-color;
                        letter-spacing: 0.1px;
                        text-decoration: none;
                        text-transform: uppercase;
                        font-size: 12px;
                        font-weight: 300;

                        transition: all 0.3s ease;

                        &:hover {
                            color: $white-color;
                            text-decoration: underline;
                        }

                        &.selected  {
                            color: $white-color;
                            font-weight: 500;
                        }
                    }
                }
             }
         }
    }

    .dropdown-menu {
        position: fixed;
        top: 0;

        width: calc(100vw - #{$mobile-side-margin} - #{$mobile-side-margin });
        height: $max-viewport-height;
        background-color: $white-color;

        padding: $page-top $mobile-side-margin 0 $mobile-side-margin;

        .options {
            height: calc( #{$max-viewport-height} - #{$logo-heigth} - #{$page-top});
            // background-color: aliceblue;

            display: flex;
            align-items: center;
            //     text-align: center;


            ul {
            margin: auto;

                padding: 0;
                list-style: none;
                display: flex;
                flex-direction: column;
                justify-content: center;


                li {
                    text-align: center;

                    &:not(:last-child) {
                        padding-bottom: 15px;
                    }

                    &.social-media {
                        padding-top: 25px;

                        a {
                            font-size: 22px;
                            color: $darken-gray-color;

                            &:not(:last-child) {
                                margin-right: 30px;
                            }
                        }
                    }

                    a {
                        font-size: 14px;
                        // text-decoration: none;
                        &.selected {
                            color: $orangetish-color;
                        }
                    }
                }

            }
        }

    }

    .close-icon {
        position: fixed;
        color: #C31610;
    }

    .expand-icon, .close-icon, .phone-mobile {
        top: $page-top;
        font-size: $menu-icon-size;

        @include desktop-up {
            display: none;
        }

        &.hide {
            display: none;
        }

    }


}
</style>
