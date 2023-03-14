<template>
  <div>
    <main class="py-4">
      <router-view/>
    </main>
  </div>

</template>

<script>
import Navbar from './components/views/Navbar.vue';
import '@coreui/coreui/dist/css/coreui.min.css';

export default {
    name: "App",
    components: { Navbar }
};
</script>