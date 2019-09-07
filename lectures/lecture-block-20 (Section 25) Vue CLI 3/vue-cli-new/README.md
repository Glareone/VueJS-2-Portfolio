### Lecture-block-19, Vue CLI 3

> to install vue-cli 3 you need to uninstall vue-cli 2 first: npm uninstall -g vue-cli
> then: npm install -g @vue/cli

* "vue create" (for CLI 3) - instead of vue init (CLI 2)

* if you want to continue using "vue init" - you need to install it to cli3:
> npm install @vue/cli-init

* this application still uses webpack, but under the hood, vue-service uses it. But you will not find webpack config files
 anymore. You can't access directly to webpack. But you can add some plugins to it. Take a look on official doc.

### Vue CLI UI (Graphical Project Manager):

* could be used from console by:
> vue ui

* Options:
![CLI-3](../../images-from-course/386-CLI3-options.jpg)
 
 ### Vue-cli-service and instant Prototyping
 by default it is installed locally. but you could also install it globally:
 > npm install -g @vue/vue-cli-service

https://cli.vuejs.org/guide/prototyping.html - prototyping.
 
 
### Plugins:
https://ru.vuejs.org/v2/guide/plugins.html - Plugin docs.
 
>to add plugin via vue/cli:
>$ vue add vuetify

https://vuetifyjs.com/en/getting-started/quick-start

### Environment variables:

* .env | .env.development | .env.production files are automatically used by cli. 
All what you need - is create it.

env uses in all modes.

PAY ATTENTION!

This properties must stat from VUE_APP_:
VUE_APP_YOURPROPERTY, VUE_APP_YOUR_SELECTED_URL and so on;
it doesn't work without VUE_APP at the beginning.

https://stackoverflow.com/questions/50828904/using-environment-variables-with-vue-js


### Build targets:

* could be used from console: 
>vue build Hello.vue --target app

![CLI-3-Build-targets](../../images-from-course/build-targets.jpg)

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

