// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import glue from 'tick42-glue'
import App from './App'
import router from './router'
/* eslint-disable no-new */

/* global window */
glue({
  desktop: false,
  gateway: {
    protocolVersion: 1,
    ws: 'ws://localhost:22037'
  }
}).then((glue) => {
  window.glue = glue

  new Vue({
    el: '#app',
    router,
    template: '<App />',
    components: { App }
  })
})
