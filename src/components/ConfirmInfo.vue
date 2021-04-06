<template>
<section class="ueliver9-page">
  <div class="container ueliver7">
    <h1 class="main-h">Driving licenses and Travel Documents Delivery</h1>

       <div class="dot-nav">
            <router-link to="/" class="active">
         
            Delivery Order 
           
            </router-link>
            <router-link to="/address_contact">
          
              Address & Contact
           
            </router-link>
            <router-link to="/conformation">
           
              Confirmation 
            
            </router-link>
            <router-link to="/receipt">
           
             Receipt
           
            </router-link>
                <span></span>
        </div>
    <div class="ueliver9-page-content">



      <form class="ueliver9-form"  @submit.prevent = "hello">
         
        <div class="row" style="margin-left: 0px; margin-right: 0px">
          <div class="col-md-3 col-4 hide-content-en" style="padding-inline-start: 0px">
            <div class="ar-list list-unstyled">
              <div>Name</div>

            </div>
          </div>
          <div class="col-md-9 col-8" style="padding-left: 0px; padding-right: 0px">

            <input type="text" class="arabic-font text-align-left"  v-model= "name"/>
             <span v-if ="!$v.name.required && $v.name.$dirty" class="text-danger">This field is required</span>

          </div>

        </div>
        <div class="row" style="margin-left: 0px; margin-right: 0px">
          <div class="col-md-3 col-4 hide-content-en" style="padding-inline-start: 0px">
            <div class="ar-list list-unstyled">
              <div>Document Count </div>
            </div>
          </div>
          <div class="col-md-9 col-8" style="padding-left: 0px; padding-right: 0px">

            <input type="text" class="arabic-font text-align-left"  v-model = "documentCount"/>
             <span v-if ="!$v.documnetCount.required && $v.documnetCount.$dirty" class="text-danger">This field is required</span>
          </div>

        </div>
        <div class="row" style="margin-left: 0px; margin-right: 0px">
          <div class="col-md-3 col-4 hide-content-en" style="padding-inline-start: 0px">
            <div class="ar-list list-unstyled">

              <div> PACI Number</div>

            </div>
          </div>
          <div class="col-md-9 col-8" style="padding-left: 0px; padding-right: 0px">

            <input type="text" class="arabic-font text-align-left"  v-model= "PCAINumber">
             <span v-if ="!$v.PCAINumber.required && $v.PCAINumber.$dirty" class="text-danger">This field is required</span>


          </div>

        </div>
        <div class="row" style="margin-left: 0px; margin-right: 0px">
          <div class="col-md-3 col-4 hide-content-en" style="padding-inline-start: 0px">
            <div class="ar-list list-unstyled">


              <div> Address Details</div>

            </div>
          </div>
          <div class="col-md-9 col-8" style="padding-left: 0px; padding-right: 0px">



            <input type="text" class="arabic-font text-align-left" v-model= "addressDetails">
             <span v-if ="!$v.addressDetails.required && $v.addressDetails.$dirty" class="text-danger">This field is required</span>

          </div>

        </div>
        <div class="row" style="margin-left: 0px; margin-right: 0px">
          <div class="col-md-3 col-4 hide-content-en" style="padding-inline-start: 0px">
            <div class="ar-list list-unstyled">

              <div> Delivery Period</div>

            </div>
          </div>
          <div class="col-md-9 col-8" style="padding-left: 0px; padding-right: 0px">


            <input type="text" class="arabic-font text-align-left" v-model= "deliveryPeriod">
             <span v-if ="!$v.deliveryPeriod.required && $v.deliveryPeriod.$dirty" class="text-danger">This field is required</span>

          </div>

        </div>
        <div class="row" style="margin-left: 0px; margin-right: 0px">
          <div class="col-md-3 col-4 hide-content-en" style="padding-inline-start: 0px">
            <div class="ar-list list-unstyled">

              <div> Preffered Language</div>

            </div>
          </div>
          <div class="col-md-9 col-8" style="padding-left: 0px; padding-right: 0px">



            <input type="text" class="arabic-font text-align-left" v-model= "preferedLanguage">
             <span v-if ="!$v.preferedLanguage.required && $v.preferedLanguage.$dirty" class="text-danger">This field is required</span>

          </div>

        </div>
        <div class="row" style="margin-left: 0px; margin-right: 0px">
          <div class="col-md-3 col-4 hide-content-en" style="padding-inline-start: 0px">
            <div class="ar-list list-unstyled">

              <div> Phone Number</div>

            </div>
          </div>
          <div class="col-md-9 col-8" style="padding-left: 0px; padding-right: 0px">


            <input type="text" class="arabic-font text-align-left" v-model = "phoneNumber">
              <span v-if ="!$v.phoneNumber.required && $v.phoneNumber.$dirty" class="text-danger">This field is required</span>
               <span v-if ="($v.phoneNumber.length === 10) && $v.phoneNumber.$dirty" class="text-danger">This field  have ten numbers</span>
          </div>

        </div>
        <div class="row" style="margin-left: 0px; margin-right: 0px">
          <div class="col-md-3 col-4 hide-content-en" style="padding-inline-start: 0px">
            <div class="ar-list list-unstyled">

              <div> Email Address</div>
            </div>
          </div>
          <div class="col-md-9 col-8" style="padding-left: 0px; padding-right: 0px">


            <input type="text" class="arabic-font text-align-left" v-model = "emailAddress">
             <span v-if ="!$v.emailAddress.required && $v.emailAddress.$dirty" class="text-danger">This field is required</span>
              
              <span v-if ="!$v.emailAddress.email && $v.emailAddress.$dirty" class="text-danger">This field must be a valid email address</span>
          </div>

        </div>
         <div class="print">
          <a href="#0" class="print-btn">

            <div class="ar-print margin-start-0">
              Total 2.6Kl
            </div>
         </a>
        <div class="pay">
       <input type="submit" value="Pay" >
      </div>
      </div>
      
      </form>
     
    
    </div>
    <div class="note">
      <p class="paraFooter">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga cupiditate alias ipsum
        voluptatibus perspiciatis minus dignissimos.</p>

    </div>
    </div>
</section>
</template>

<script>
import { required,email} from 'vuelidate/lib/validators'
export default {
  name: 'ConfirmInfo',
  props: {
    msg: String
  },
  methods: {
   hello(){
      this.$v.$touch()
       if (this.$v.$invalid) {
           console.log("Hello")
      } 
   }
   }
   ,
  data:()=>({
      name:'',
      documentCount:'',
      PCAINumber:'',
      addressDetails:'',
      deliveryPeriod:'',
      preferedLanguage:'',
      phoneNumber:'',
      emailAddress:''
  }),
  
   validations:{
     name:{
       required
     },
     documnetCount:{
       required
     },
     PCAINumber:{
         required
     },
     addressDetails:{
        required
     },
     deliveryPeriod:{
       required
     },
      preferedLanguage:{
        required
      },
       phoneNumber:{
        required
       },
        emailAddress:[
        required,
        email
        ]
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .pay input[type=submit] {
    width: 156.54px;
    height: 60.04px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    background-color: #4B1D4B;
    font-family: 'Almarai', sans-serif;
    font-size: 19px;
    font-weight: 800;
    transition: all .3s ease-in-out;
    -webkit-transition: all .3s ease-in-out;
    -moz-transition: all .3s ease-in-out;
    -ms-transition: all .3s ease-in-out;
    -o-transition: all .3s ease-in-out;
    border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    -ms-border-radius: 5px;
    -o-border-radius: 5px;
}
</style>


