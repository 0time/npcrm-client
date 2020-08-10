import Vue from 'vue';

import Customer from './routes/customer';
import HelloWorld from './routes/hello-world';
import NotFound from './routes/not-found';

const Home = {
  template:
    ['hello-world', 'customer'].reduce(
      (acc, ea) => `${acc}<p><a href="/${ea}">${ea}</a></p>`,
      '<div>',
    ) + '</div>',
};

const routes = {
  '/': Home,
  '/hello-world': HelloWorld,
  '/customer': Customer,
};

export default new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname,
  },
  computed: {
    ViewComponent() {
      return routes[this.currentRoute] || NotFound;
    },
  },
  render(h) {
    return h(this.ViewComponent);
  },
});
