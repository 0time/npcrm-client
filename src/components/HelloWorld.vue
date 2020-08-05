<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import axios from 'axios';
import config from '../../config';

export default {
  name: 'HelloWorld',
  data() {
    return {
      currentRoute: window.location.pathname,
      errored: false,
      info: {helloWorld: 'not yet populated'},
      loading: true,
    };
  },
  mounted() {
    axios
      .get(`${config.apiServer.uri}${config.apiServer.basePath}/hello-world`)
      .then(response => (this.info.helloWorld = response.data.bpi))
      .catch(error => (this.errored = true) && console.log(32, error)) // eslint-disable-line no-console
      .finally(() => (this.loading = false));
  },
  props: {
    msg: String
  },
};
</script>
