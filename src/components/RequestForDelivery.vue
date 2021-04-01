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
        <form action="">
            <div>
                <p> Civil ID</p>
                <input type="number">
            </div>

            <div>
                <p> Document Type </p>
                <div class="dropdown">
                    <button type="button" class="btn dropdown-toggle" data-toggle="dropdown">

                    </button>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="#"> Lorem ipsum</a>
                        <a class="dropdown-item" href="#">Lorem ipsum </a>
                    </div>
                </div>
            </div>

            <div>
                <p> Receipt Number </p>
                <input type="number">
            </div>

            <button class="btn add">Add</button>
        </form>


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
        <span class="document-next">NEXT</span>

    </div>
    <p class="paraFooter">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga cupiditate alias ipsum voluptatibus</p>
</section>
</template>

<script>
export default {
  name: 'Request For Delivery',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
