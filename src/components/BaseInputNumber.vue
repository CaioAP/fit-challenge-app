<script setup lang="ts">
import { ref } from 'vue';
import BaseButton from './BaseButton.vue';
import BaseIcon from './BaseIcon.vue';

type VariantType =
  | 'underlined'
  | 'outlined'
  | 'filled'
  | 'solo'
  | 'solo-inverted'
  | 'solo-filled'
  | 'plain';

const props = defineProps({
  label: String,
  placeholder: String,
  max: Number,
  min: Number,
  leftIcon: String,
  required: Boolean,
  variant: {
    type: String as () => VariantType,
    default: 'outlined'
  }
});
const model = defineModel({ default: 0 });
const inputValue = ref(model.value);

const validate = (value: number): boolean => {
  if (props.min !== undefined && value < props.min) return false;
  if (props.max !== undefined && value > props.max) return false;
  return true;
};
const updateInputValue = (value: number) => {
  inputValue.value = model.value = value;
};
const decrement = () => {
  const value = Number(model.value) - 1;
  if (validate(value)) {
    updateInputValue(value);
  }
};
const increment = () => {
  const value = Number(model.value) + 1;
  if (validate(value)) {
    updateInputValue(value);
  }
};
const updateValue = (event: Event) => {
  const valueStr = (event.target as HTMLInputElement).value;
  const value = Number(valueStr);
  if (!value || isNaN(value)) {
    return;
  }
  if (validate(value)) {
    updateInputValue(value);
    return;
  }
  const lastValue = Number(valueStr[valueStr.length - 1]);
  if (validate(lastValue)) {
    updateInputValue(lastValue);
    return;
  }
  inputValue.value = model.value;
};
const updateValueIfInvalid = () => {
  if (!inputValue.value || isNaN(inputValue.value)) {
    inputValue.value = model.value = props.min ?? 0;
    return;
  }
};
</script>

<template>
  <div class="d-flex align-stretch h-100">
    <BaseButton
      class="input-number__btn input-number__decrement"
      color="grey"
      variant="outlined"
      @click="decrement"
    >
      <BaseIcon color="amber" size="large" icon="mdi-minus" />
    </BaseButton>
    <v-text-field
      v-model.number="inputValue"
      class="input-number__input"
      type="number"
      :label="props.label"
      :placeholder="props.placeholder"
      :variant="props.variant"
      :prepend-inner-icon="props.leftIcon"
      :required="props.required"
      hide-details
      @input.prevent="updateValue"
      @change.prevent="updateValueIfInvalid"
      @keydown.up.prevent="increment"
      @keydown.down.prevent="decrement"
    />
    <BaseButton
      class="input-number__btn input-number__increment"
      color="grey"
      variant="outlined"
      @click="increment"
    >
      <BaseIcon color="amber" size="large" icon="mdi-plus" />
    </BaseButton>
  </div>
</template>

<style>
.v-field__loader {
  display: none;
}

.input-number__input .v-field {
  border-radius: 0;
}

.input-number__btn {
  min-height: 100%;
}

.input-number__decrement {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.input-number__increment {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
</style>
