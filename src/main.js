import DefaultLayout from '~/layouts/Default.vue'

import BootstrapVue from 'bootstrap-vue'
import * as $ from 'jquery'
import './assets/styles/main.scss'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faFacebookF,
  faInstagram,
  faGithub,
  faGitlab,
  faMedium,
  faDiscord,
  faTwitter,
  faYoutube,
  faTwitch,
  faAirbnb,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons'
import { faAt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import checkIfMobile from './mixins/checkIfMobile'

library.add(faFacebookF)
library.add(faInstagram)
library.add(faGithub)
library.add(faGitlab)
library.add(faMedium)
library.add(faDiscord)
library.add(faTwitter)
library.add(faYoutube)
library.add(faTwitch)
library.add(faAirbnb)
library.add(faAt)
library.add(faWhatsapp)

export default function (Vue, { router, head, isClient }) {
  Vue.use(BootstrapVue)
  Vue.component('Layout', DefaultLayout)
  Vue.component('font-awesome-icon', FontAwesomeIcon)
  Vue.mixin(checkIfMobile)
}
