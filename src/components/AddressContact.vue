<template>
<section class="delivery container">
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

    <div class="delivery-content">
        <form  @submit.prevent = "submitForm">
            <div class="delivery-content-one">
                <div class="delivery-one-info row">
                    <div class="col-12 col-md-4">
                        <p>Name</p>
                        <input  v-model= "name" type="text" />
                        <span v-if ="!$v.name.required && $v.name.$dirty" class="text-danger">This field is required</span>
                    </div>

                    <div class="col-12  col-md-4">
                        <p>Delivery Period </p>
                  
                        <select v-model= "deliveryPeriod" class=" form-control btn2">
                            <option value="option1">Option1</option>
                             <option value="option2">Option2</option>
                        </select>
                        <span v-if ="!$v.deliveryPeriod.required && $v.deliveryPeriod.$dirty" class="text-danger">This field is required</span>
                    </div>

                    <div class="col-12  col-md-4">
                        <p>Phone Number</p>
                        <input  v-model= "phoneNumber" type="text" />
                        <span v-if ="!$v.phoneNumber.required && $v.phoneNumber.$dirty" class="text-danger">This field is required</span>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12  col-md-4">
                        <p>Email Adderss</p>
                        <input  v-model= "emailAddress" type="email" />
                        <span v-if ="!$v.emailAddress.required && $v.emailAddress.$dirty" class="text-danger">This field is required</span>
                         <span v-if ="!$v.emailAddress.email && $v.emailAddress.$dirty" class="text-danger">This field must be an email</span>
                    </div>

                    <div class="col-12  col-md-4 col-lg-3">
                        <p>Preffered Language</p>
                        <select v-model= "preferedLanguage" class=" form-control btn3">
                            <option value="option1">Option1</option>
                             <option value="option2">Option2</option>
                        </select>
                        <span v-if ="!$v.preferedLanguage.required && $v.preferedLanguage.$dirty" class="text-danger">This field is required</span>
                    </div>
                </div>
            </div>

            <div class="delivery-content-tow">

                <ul class="list-tabs list-unstyled">
                    <li class="nav-item" data-tabs="#tabs-1">
                        <input type="radio" name="size" id="one" checked />
                        <label class="io1" for="one">Use Civil ID Address
                            <span class="sp-radio-one"></span>
                        </label>
                    </li>
                    <li class="nav-item" data-tabs="#tabs-2">
                        <input type="radio" name="size" id="two" />
                        <label class="io2" for="two">Other PACI Number
                            <span class="sp-radio-two"></span>
                        </label>
                    </li>
                    <li class="nav-item" data-tabs="#tabs-3">
                        <input type="radio" name="size" id="three" />
                        <label class="io3" for="three">Add Address
                            <span class="sp-radio-three"></span>
                        </label>
                    </li>
                </ul><!-- Tab panes -->

                <div class="tab-content">
                    <div id="tabs-1">
                        <div class=" row">
                            <div class="col-12 col-md-4">
                                <p>PACI Number</p>
                                <input type="number" name="" id="">
                            </div>
                            <div class="col-12 col-md-8">
                                <input type="text" name="" id="">
                            </div>
                        </div>
                    </div>

                    <div id="tabs-2">
                    <div class=" row">
                        <div class="col-12 col-md-4">
                            <p>PACI Number</p>
                            <input type="number" name="" id="">
                        </div>
                        <div class="col-12 col-md-8">
                            <input type="text" name="" id="">
                        </div>
                    </div>
                </div>


                <div id="tabs-3">
                    <div class="row">
                        <div class="col-12 col-md-3">
                            <p>Gevernorate</p>
                            <div class="dropdown" id="dropdown-4">
                                <button type="button" class="btn dropdown-toggle btn4" data-toggle="dropdown">
                                </button>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="#"> lorem ipsum </a>
                                    <a class="dropdown-item" href="#"> lorem ipsum</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-3 ">
                            <p>Area</p>
                            <div class="dropdown" id="dropdown-5">
                                <button type="button" class="btn dropdown-toggle btn5" data-toggle="dropdown">
                                </button>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="#"> lorem ipsum </a>
                                    <a class="dropdown-item" href="#"> lorem ipsum</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-3 ">
                            <p>Pacell</p>
                            <input type="text" name="" id="">
                        </div>
                        <div class="col-12 col-md-3 ">
                            <p>Street</p>
                            <input type="text" name="" id="">
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-3 col-md-3 ">
                            <p>Avenue</p>
                            <input type="text">
                        </div>
                        <div class="col-md-3 col-md-3 ">
                            <p>Building</p>
                            <input type="text">
                        </div>
                        <div class="col-md-3 col-md-3 ">
                            <p>Unit Number</p>
                            <input type="number" name="" id="">
                        </div>
                        <div class="col-md-3 col-md-3 ">
                            <p>Floor</p>
                            <input type="text" name="" id="">
                        </div>
                    </div>
                </div>
            </div>

    </div>
     
    <router-link
         to='/conformation'
          class="document-next" 
           @click.native = "submitForm"
           :disabled="!disabled" 
           :event="disabled ? 'click' : ''"
            >
           NEXT
    </router-link>
   
    <span class="document-prev">Previous</span>
    </form>
  
    </div>

    <p class="paraFooter">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga cupiditate alias ipsum
        voluptatibus perspiciatis minus dignissimos.</p>


</section>
</template>

<script>
import { required, minLength, maxLength, email} from 'vuelidate/lib/validators'
export default {
  name: 'AddressContact',
  props: {
    msg: String
  },
  data:()=>({
      name:'',
      deliveryPeriod:'',
      phoneNumber:'',
      emailAddress:'',
      preferedLanguage:'',
      disabled: false
  }),
  validations:{
      name:{
          required,
         
        //   alpha
          },
     deliveryPeriod:{
           required,
        //    alpha
           },
     phoneNumber:{
          required,
          minLength : minLength(3),
          maxLength : maxLength(5)
      },
       emailAddress:{
          required,
          email 
       },
       preferedLanguage:{
           required
       }
  },
   methods: {
   submitForm(){
       this.$v.$touch()
       if (this.$v.$invalid) {
           console.log("disabled is true")
           this.disabled = false
      } else{
          this.disabled =true
           console.log("disabled is false")
      }
   }
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
select{
    width:100%;
    height:50px;

}
option{
    color:black;
    widows: 50%;
}
.form-control:focus{
    border-color:transparent;
    box-shadow: none;
}
</style>