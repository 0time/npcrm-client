<template>
  <div class="hello">
    <h1>{{ info.customers }}</h1>
  </div>
</template>

<script>
import getCustomer from '../data/customer/get';
import logAndReturn from '../lib/log-and-return';

export default ({
  name: 'Customers',
  data() {
    return {
      currentRoute: window.location.pathname,
      errored: false,
      info: {customers: 'not yet populated'},
      loading: true,
    };
  },
  mounted() {
    return getCustomer()
      .then(logAndReturn)
      .then(response => (this.info.customers = response.data))
      .catch(error => (this.errored = true) && console.log(32, error)) // eslint-disable-line no-console
      .finally(() => (this.loading = false));
  }
});
</script>
