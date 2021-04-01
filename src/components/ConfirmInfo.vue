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



      <form class="ueliver9-form">
        <div class="row" style="margin-left: 0px; margin-right: 0px">
          <div class="col-md-3 col-4 hide-content-en" style="padding-inline-start: 0px">
            <div class="ar-list list-unstyled">
              <div>Name</div>

            </div>
          </div>
          <div class="col-md-9 col-8" style="padding-left: 0px; padding-right: 0px">

            <input type="text" class="arabic-font text-align-left" value="العباس محمد عادل عباس العبد القادر" />


          </div>

        </div>
        <div class="row" style="margin-left: 0px; margin-right: 0px">
          <div class="col-md-3 col-4 hide-content-en" style="padding-inline-start: 0px">
            <div class="ar-list list-unstyled">
              <div>Document Count </div>
            </div>
          </div>
          <div class="col-md-9 col-8" style="padding-left: 0px; padding-right: 0px">

            <input type="text" class="arabic-font text-align-left" value="2" />

          </div>

        </div>
        <div class="row" style="margin-left: 0px; margin-right: 0px">
          <div class="col-md-3 col-4 hide-content-en" style="padding-inline-start: 0px">
            <div class="ar-list list-unstyled">

              <div> PACI Number</div>

            </div>
          </div>
          <div class="col-md-9 col-8" style="padding-left: 0px; padding-right: 0px">

            <input type="text" class="arabic-font text-align-left" value="18584562">



          </div>

        </div>
        <div class="row" style="margin-left: 0px; margin-right: 0px">
          <div class="col-md-3 col-4 hide-content-en" style="padding-inline-start: 0px">
            <div class="ar-list list-unstyled">


              <div> Address Details</div>

            </div>
          </div>
          <div class="col-md-9 col-8" style="padding-left: 0px; padding-right: 0px">



            <input type="text" class="arabic-font text-align-left" value="محافظة حولي-المنطقة السالمبة-الفعطة11-شارع احد-مبنى13-شقة1">


          </div>

        </div>
        <div class="row" style="margin-left: 0px; margin-right: 0px">
          <div class="col-md-3 col-4 hide-content-en" style="padding-inline-start: 0px">
            <div class="ar-list list-unstyled">

              <div> Delivery Period</div>

            </div>
          </div>
          <div class="col-md-9 col-8" style="padding-left: 0px; padding-right: 0px">


            <input type="text" class="arabic-font text-align-left" value="صباحية (6ص إلى 3م)">


          </div>

        </div>
        <div class="row" style="margin-left: 0px; margin-right: 0px">
          <div class="col-md-3 col-4 hide-content-en" style="padding-inline-start: 0px">
            <div class="ar-list list-unstyled">

              <div> Preffered Language</div>

            </div>
          </div>
          <div class="col-md-9 col-8" style="padding-left: 0px; padding-right: 0px">



            <input type="text" class="arabic-font text-align-left" value="العربية">


          </div>

        </div>
        <div class="row" style="margin-left: 0px; margin-right: 0px">
          <div class="col-md-3 col-4 hide-content-en" style="padding-inline-start: 0px">
            <div class="ar-list list-unstyled">

              <div> Phone Number</div>

            </div>
          </div>
          <div class="col-md-9 col-8" style="padding-left: 0px; padding-right: 0px">


            <input type="text" class="arabic-font text-align-left" value="95513123">


          </div>

        </div>
        <div class="row" style="margin-left: 0px; margin-right: 0px">
          <div class="col-md-3 col-4 hide-content-en" style="padding-inline-start: 0px">
            <div class="ar-list list-unstyled">

              <div> Email Address</div>
            </div>
          </div>
          <div class="col-md-9 col-8" style="padding-left: 0px; padding-right: 0px">


            <input type="text" class="arabic-font text-align-left" value="a.adel@unigroup.com.kw">

          </div>

        </div>
      </form>
      <div class="print">
        <a href="#0" class="print-btn">

          <div class="ar-print margin-start-0">
            Total 2.6Kl
          </div>
        </a>
      </div>
      <div class="pay">
        <a href="#0">Pay</a>
      </div>
    </div>
    <div class="note">
      <p class="paraFooter">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga cupiditate alias ipsum
        voluptatibus perspiciatis minus dignissimos.</p>

    </div>
    </div>
</section>
</template>

<script>
export default {
  name: 'Confirm Info',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>


