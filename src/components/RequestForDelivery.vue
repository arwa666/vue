<template>
  <section class="documents container">
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

    <div class="document-content">
        <form @submit.prevent = "submitForm">
      
           <div class="first-row">
                <div>
                <p> Civil ID</p>
                <input  v-model= "civilId" type="number" />
                
                <span v-if ="(!$v.civilId.required && $v.civilId.$dirty)  " class="text-danger">This field is required</span>
                 <span v-if ="(!$v.civilId.minLength || !$v.civilId.maxLength) && $v.civilId.$dirty" class="text-danger">
                     Civil ID must be between 3 and 5
                     characters
                 </span>
            </div>

            <div>
                <p> Document Type </p>
                <!-- <div class="dropdown" >
                    
                    <div type="button" class="btn dropdown-toggle" data-toggle="dropdown" >
                      <input style="display:none" type="text" v-model = "documentType">
                       
                    </div>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="#"> Lorem ipsum</a>
                        <a class="dropdown-item" href="#">Lorem ipsum </a>
                    </div>
                </div> -->
                <select v-model= "documentType" class="form-control">
                    <option value="option1">Option1</option>
                     <option value="option2">Option2</option>
                </select>
                <span v-if ="!$v.documentType.required && $v.documentType.$dirty" class="text-danger">This field is required</span>
            </div>

            <div>
                <p> Receipt Number </p>
                <input type="number" v-model= "receiptNumber">
                <span v-if ="!$v.receiptNumber.required && $v.receiptNumber.$dirty" class="text-danger">This field is required</span>
                <span v-if ="(!$v.civilId.minLength || !$v.civilId.maxLength) && $v.civilId.$dirty" class="text-danger">
                     Receipt Number must be between {{ $v.receiptNumber.minLength.min }} and {{ $v.receiptNumber.maxLength.max }}
                     characters
                 </span>
            </div>

            <input type="submit" class="btn add" value="Add">
           </div>
              <table>
            <thead>
                <tr>
                    <th scope="col">SN</th>
                    <th scope="col " colspan="2">Civil ID</th>
                    <th scope="col" colspan="2">Document Type</th>
                    <th scope="col" colspan="3">Fees</th>

                </tr>
            </thead>
            <tbody>
                <tr>
                    <td data-label="M">1</td>
                    <td data-label="Civil No" colspan="2">526564898945856</td>
                    <td data-label="document type" colspan="2">Fees</td>
                    <td data-label="lorem" colspan="2">2 k.l</td>
                    <td scope="col" data-label="" class="img-click"><img src="img/home/delete2.png" alt=""></td>
                </tr>
            </tbody>

            <tbody>
                <tr id="oooo">
                    <td colspan="5">Total</td>
                    <td colspan="3">$2 k.l</td>
                </tr>
            </tbody>
        </table>
         <!-- <button class="document-next">NEXT</button> -->
        <router-link
         to='/address_contact'
          class="document-next" 
           @click.native = "submitForm"
           :disabled="!disabled" 
           :event="disabled ? 'click' : ''"
            >
           NEXT
           </router-link>
        </form>
       

      
       

    </div>
    <p class="paraFooter">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga cupiditate alias ipsum voluptatibus</p>
</section>
</template>

<script>
import { required, minLength, maxLength } from 'vuelidate/lib/validators'
export default {


  name: 'RequestForDelivery',
   methods: {
   submitForm(){
       this.$v.$touch()
       if (this.$v.$invalid) {
           console.log("disabled is true")
           this.disabled = false
      } else{
           this.disabled = true
      }
      console.log("I am clicked")
   }
  },
  data:()=>({
      disabled:false,
      civilId:'',
      documentType:'',
      receiptNumber:''
  }),
  validations:{
      civilId:{
          required,
          minLength : minLength(3),
          maxLength : maxLength(5),
        //   alpha
          },
       documentType:{
           required,
        //    alpha
           },
      receiptNumber:{
          required,
          minLength : minLength(3),
          maxLength : maxLength(5)
      }
  },
  props: {
    msg: String
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
.documents .document-content form {
   
    flex-direction: column;
}
.first-row{
    display: flex;
    width:100%!important;
    justify-content: space-between;
}
.documents .document-content form .first-rowiv:first-child {
    width: 30%;
}

/***********fix the widths */
.documents .document-content form .first-row div:first-child input {
    width: 100%;
    border-radius: 5px;
}
.documents .document-content form  .first-row div:nth-child(3) input {
    width: 100%;
}
.documents .document-content form .first-row .add {
    width: 10%;
    background-color: #666666;
    height: 50px;
    font-size: 18px;
    margin-top: 30px;
    border-radius: 5px;
    color: #fff;
    -webkit-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
}
</style>
