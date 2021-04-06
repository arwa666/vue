<template>
   <div>
   <h1>VeeValidate Form</h1>
   <ValidationObserver v-slot = "{handleSubmit}">
   <form @submit.prevent="handleSubmit(onSubmit)">
    <ValidationProvider name="Name" rules="required|alpha" v-slot="{errors}">
    <div class="form-group">
    <label>Name</label>
    <input type="text" class="form-control" v-model="name">
    <span>{{ errors[0] }}</span>
    </div>
    </ValidationProvider>
    <ValidationProvider name="E-mail" rules="required|email" v-slot="{errors}">
    <div class="form-group">
    <label>E-mail</label>
    <input type="email" class="form-control" v-model="email">
    <span>{{ errors[0] }}</span>
    </div>
    </ValidationProvider>
    <ValidationProvider name="password" rules="required|max:12|min:6" v-slot="{errors}">
    <div class="form-group">
    <label>Password</label>
    <input type="email" class="form-control" v-model="email">
    <span>{{ errors[0] }}</span>
    </div>
    </ValidationProvider>
    <ValidationProvider name="gender" rules="required" v-slot="{errors}">
    <div class="form-group">
    <label>Gender</label>
    <select class="form-control" v-model="gender">
    <options value="male">
    Male
    </options>
    <options value="female">
    Female
    </options>
    <options value="other">
    Other
    </options>
    </select>
    <span>{{ errors[0] }}</span>
    </div>
    </ValidationProvider>
   </form>
   </ValidationObserver>
   </div>
</template>

<script>
export default {
  data: ()=> [
      {
         
              name: '',
              email: '',
              passowrd: '',
              gender: '',
              acceptTerms: null
        
      }
  ],
  method: {
     onSubmit(){
         console.log(this.formData)
     } 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
