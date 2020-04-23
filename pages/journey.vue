<template>
  <div>
    <navbar />
    <testimony />
    <testimony />
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import Testimony from '~/components/Testimony.vue'


export default {
  components: {
    Navbar,
    Testimony
  }
}
</script>
