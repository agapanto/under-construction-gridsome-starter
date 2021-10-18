<template>
  <Layout>
    <div class="container">
      <div class="row pt-4">
        <div class="col12 offset-0 col-md-8 offset-md-2 col-lg-4 offset-lg-4 hello">
          <h1>
            Contact us
          </h1> 

          <div class="card my-4 p-4 text-start">
            <ClientOnly>
              <ContactForm />
            </ClientOnly>
          </div>
        </div>
      </div>

    </div>

  </Layout>
</template>

<script>
import ContactForm from '../components/ContactForm'

export default {
  metaInfo: {
    title: 'Contact us'
  },
  components: {
    ContactForm,
  },
}
</script>

<style>
.card {
  box-shadow: 0.06rem 0.1rem 0.12rem #2c172f;
  text-shadow: none !important;
  color: black !important;
}
</style>
