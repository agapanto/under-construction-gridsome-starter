<template>
  <div>
    <nav class="py-2 bg-agapanto-purple bg-shadowed">
      <div class="container d-flex flex-wrap">
        <ul class="nav me-auto">
          <li class="nav-item">
            <g-link to="/" class="nav-link link-dark px-2 me-4">Home</g-link>
          </li>
          <li class="nav-item">
            <g-link to="/about" class="nav-link link-dark px-2 mx-4">About us</g-link>
          </li>
          <li class="nav-item">
            <g-link to="/contact-us" class="nav-link link-dark px-2 mx-4">Contact us</g-link>
          </li>
        </ul>
        <ul class="nav">
          <li class="nav-item btn-group">
            <a href="#" class="nav-link px-2 btn btn-sm btn-purple rounded-3 text-decoration-none">
              <font-awesome-icon :icon="['fas', 'user-circle']" size="lg" fixed-width /> My Account
            </a>
          </li>
        </ul>
      </div>
    </nav>

    <!-- header class="py-3 mb-4 bg-light border-bottom">
      <div class="container d-flex flex-wrap justify-content-center">
        <a href="/" class="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none">
          <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
          <span class="fs-4">Double header</span>
        </a>
        <form class="col-12 col-lg-auto mb-3 mb-lg-0">
          <input type="search" class="form-control" placeholder="Search..." aria-label="Search">
        </form>
      </div>
    </header-->

  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">
nav {
  &.bg-shadowed {
    box-shadow: inset 0 -0.44rem 0.8rem darken(#6B3973, 20);
    // border-top: 2px solid darken(#6B3973, 20);
    border-bottom: 2px solid darken(#6B3973, 20);
  }
}

.nav-link.active--exact {
  color: white !important;
  text-shadow: 0 0 1.8rem lighten(#6B3973, 40);
}

.bg-agapanto-purple {
  background-color: darken(#6B3973, 12);
}

.btn-purple {
  text-shadow: none;
  color: #fff !important;
  background-color: lighten(#6B3973, 0) !important;
  border: 1px solid darken(#6B3973, 12) !important;
  box-shadow: 0 0 0.2rem darken(#6B3973, 12) !important;

  &:hover {
    background-color: lighten(#6B3973, 6) !important;
  }
}
</style>
