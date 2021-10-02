<template>
  <Layout>
    <div class="container">

      <div class="row py-4 mb-4">
        <div class="col-10 offset-1 col-sm-8 offset-sm-2 col-md-6 offset-md-3">
          <g-image class="img-fluid" src="~/assets/images/software-development.png"/>
        </div>
      </div>

      <div class="row">
        <div class="col-12 hello">
          <h1>
            This website is under construction
          </h1>

          <p>
            We're working hard to provide the full personalized experience as soon as possible, meanwhile you can check the social media profiles below.
          </p>
        </div>
      </div>

      <div class="row">
        <div class="col-12 offset-0 col-md-8 offset-md-2 col-lg-10 offset-lg-1 social-icons text-left my-4">
          <SocialNetworks />
        </div>
      </div>

    </div>

  </Layout>
</template>

<script>
import SocialNetworks from '../components/SocialNetworks'

export default {
  metaInfo: {
    title: 'This website is under construction'
  },
  components: {
    SocialNetworks,
  },
}
</script>

<style>
</style>
