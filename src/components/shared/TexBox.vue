<template lang="pug">
    .container-form
        textarea(
            v-if="dataModel.type=='textarea'",
            :placeholder="dataModel.placeholder",
            :name="dataModel.name",
            v-model="input",
            :required="setRequired")
        input(
            v-if="dataModel.type!='textarea'",
            :type="dataModel.type",
            :placeholder="dataModel.placeholder",
            :name="dataModel.name",
            v-model="input",
            :required="setRequired")
        .icon(
            :class="dataModel.type=='textarea' ? 'large' : ''")
            fa(v-if="dataModel.icon!=''", :icon="dataModel.icon")
</template>

<script>
export default {
  props: {
    dataModel: { type: Object, required: true },
    formName: { type: String, default: '' },
  },
  data() {
    return {
      input: '',
      setRequired: false,
      isValid: false,
    };
  },
  created() {
    this.input = this.dataModel.value;
    this.$bus.$on('active-validate-styles', (formName) => {
      if (this.formName === formName) {
        this.setRequired = this.dataModel.required;
      }
    });
  },
  watch: {
    input(newVal) {
      this.$emit('input', newVal);
      this.isValid = this.validate();
    },
    isValid(newVal) {
      this.$emit('validate', newVal);
    },
  },
  methods: {
    validate() {
      if (!this.dataModel.required) {
        return true;
      } if (this.dataModel.type === 'email') {
        const re = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(this.input);
      }
      return this.input.length > 0;
    },
  },
};
</script>

<style lang="scss" scoped>
@import './src/scss/variables.scss';

.container-form {
    margin-top: 7px;
    position: relative;
    max-width: 100%;

    input, textarea {
        width: 100%;
        padding: 10px 12px 10px 12px;
        border: 1px solid $gray-color;
        box-sizing: border-box;
        font-family: $primary-font;
        outline: none;
        transition: border-color 1s ease-out;
    //   resize: vertical;


        &:required:valid {
            border-left: 3px solid $green-color;
        }

        &:invalid {
            border: 2px solid $ligther-red;
        }
    }

    input {
        height: $input-height;
    }

    textarea {
        height: $large-input-height;
    }

    .icon {
        width: $input-height;
        height: $input-height;
        border-left: 1px solid $gray-color;
        position: absolute;
        color: $red-color;
        right: 0;
        top: 0;

        &.large {
            height: $large-input-height;
        }

        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>
