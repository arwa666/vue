import Vue from 'vue'
import Router from 'vue-router'

import AddressContact from '../components/AddressContact.vue'
import ConfirmInfo from '../components/ConfirmInfo.vue'
import InquireTheRequest from '../components/InquireTheRequest.vue'
import receipt from '../components/receipt.vue'
import ReceiptDone from '../components/ReceiptDone.vue'
import ReceiptPortal from '../components/ReceiptPortal.vue'
import RequestForDelivery from '../components/RequestForDelivery.vue'

Vue.use(Router)

const router = new Router ({
    routes: [
        {
            path:'/',
            component: RequestForDelivery,
            name:'requestForDelevery'
        },
        {
            path:'/address_contact',
            component: AddressContact,
            name:'address_and_contact'
        },
        {
            path:'/conformation',
            component: ConfirmInfo,
            name:'conformation'  
        },
        {
            path:'/receipt',
            component: receipt,
            name:'receipt'  
        },
        {
            path:'/inquire_the_request',
            component: InquireTheRequest,
            name:'inqure_the_request'  
        },
        {
            path:'/receipt_portal',
            component: ReceiptPortal,
            name:'receipt_portal'  
        },
        {
            path:'/receipt_done',
            component: ReceiptDone,
            name:'receipt_done'  
        }
    ],
    mode: 'history'
})

export default router