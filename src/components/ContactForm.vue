<template>
  <form>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">
        Email address
      </label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
      <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
    </div>
  
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">
        Reason
      </label>
      <select class="form-select" aria-label="Default select example">
        <option selected>Pick one</option>
        <option value="1">
          Doubt
        </option>
        <option value="2">
          Suggestion
        </option>
        <option value="3">
          Complaint
        </option>
        <option value="3">
          Another one
        </option>
      </select>
      <div id="emailHelp" class="form-text">Why do you need our help?</div>
    </div>

    <div class="mb-3">
      <label for="exampleFormControlTextarea1" class="form-label">Message</label>
      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      <div id="emailHelp" class="form-text">Be clear, polite and go straight to the point</div>
    </div>
    


    <!--div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1">
    </div-->
    
    <!--div class="mb-3 form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1">
      <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div-->

    <button type="submit" class="btn btn-purple w-100">Submit</button>
  </form>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">
</style>
