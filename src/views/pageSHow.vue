<template>
    <div>
        <pageHeader></pageHeader>
        <router-view/>
    </div>
</template>
<script>
import pageHeader from '../components/header'
export default {
  components: {
    pageHeader
  }
}
</script>
<style scoped>

</style>
