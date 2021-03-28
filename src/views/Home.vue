<template>
  <div class="home">
    <CustomForm />
  </div>
</template>

<script>
// @ is an alias to /src
import CustomForm from '@/components/customForm/Index'

export default {
  name: 'Home',
  components: {
    CustomForm
  }
}
</script>
<style lang="scss">
.home {
  height: 100vh;
}
</style>
