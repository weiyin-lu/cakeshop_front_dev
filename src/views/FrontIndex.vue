<template>
  
</template>

<script setup>
import api from '@/api/api';
import { onMounted, reactive, ref } from 'vue';

var test = ref({});

const testfun = () => {
  api.getAllGoods()
  .then(ret => {
    test.value = ret;
    console.log(test.value);
  })
}
  
</script>
