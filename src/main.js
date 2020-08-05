import Vue from 'vue';

import NotFound from './routes/not-found';
import HelloWorld from './routes/hello-world';

const Home = {
  template: '<p><a href="/hello-world">Hello World</a></p>',
};

const routes = {
  '/': Home,
  '/hello-world': HelloWorld,
};

new Vue({
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
