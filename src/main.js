import DefaultLayout from '~/layouts/Default.vue'

import "bootstrap/dist/css/bootstrap.min.css"
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
import {
  faAt,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons'
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
library.add(faUserCircle)
library.add(faWhatsapp)

export default function (Vue, { router, head, isClient }) {
  Vue.component('Layout', DefaultLayout)
  Vue.component('font-awesome-icon', FontAwesomeIcon)
  Vue.mixin(checkIfMobile)
  head.bodyAttrs = { class: 'bg-shattered' }
  // head.bodyAttrs = { class: 'bg-purple' }
}
