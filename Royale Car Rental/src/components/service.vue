<template>
    <div class="row justify-content-center">
        <div class="col-md-6"><br><br>
            <h1 class="display-4 text-uppercase text-center mb-5">Rent A Car</h1>
            <form @submit.prevent="handleSubmitForm">
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" class="form-control" v-model="client.name" required>
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" class="form-control" v-model="client.email" required>
                </div>
                <div class="form-group">
                    <label>Phone</label>
                    <input type="text" class="form-control" v-model="client.phone" required>
                </div>
                <div class="form-group">
                    <label>Car</label>
                    <select class="form-control" v-model="client.car" required>
                    <option value="">-- Your car --</option>
                    <option value="Wigo">Toyota Wigo</option>
                    <option value="Vios">Toyota Vios</option>
                    <option value="Fortuner">Toyota Fortuner</option>
                    <option value="Hiace">Toyota Van Hiace</option>
                    <option value="Model 3">Tesla Model 3</option>
                    </select>
                </div>
                <div class="form-group">
                  <label>Date</label>
                  <input type="date" class="form-control" v-model="client.date" required>
                </div>
                <div class="form-group">
                    <button class="btn btn-lg btn-block bg-banner text-light ">Create</button>
                </div>
            </form>
        </div>
   <!-- Services Start -->
   <div class="container-fluid py-5">
        <div class="container pt-5 pb-3">
            <h1 class="display-1 text-secondary  text-center">02</h1>
            <h1 class="display-4 text-uppercase text-center mb-5">Our Services</h1>
            <div class="row">
                <div class="col-lg-4 col-md-6 mb-2">
                    <div class="service-item d-flex flex-column justify-content-center px-4 mb-4">
                        <div class="d-flex align-items-center justify-content-between mb-3">
                            <div class="d-flex align-items-center justify-content-center bg-banner ml-n4" style="width: 80px; height: 80px;">
                                <i class="fa fa-2x fa-taxi text-light"></i>
                            </div>
                            <h1 class="display-2 text-dark mt-n2 m-0">01</h1>
                        </div>
                        <h4 class="text-uppercase mb-3">Car Rental</h4>
                        <p class="m-0">Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit sea sed</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 mb-2">
                    <div class="service-item active d-flex flex-column justify-content-center px-4 mb-4">
                        <div class="d-flex align-items-center justify-content-between mb-3">
                            <div class="d-flex align-items-center justify-content-center bg-banner ml-n4" style="width: 80px; height: 80px;">
                                <i class="fa fa-2x fa-money-check-alt text-light"></i>
                            </div>
                            <h1 class="display-2 text-dark mt-n2 m-0">02</h1>
                        </div>
                        <h4 class="text-uppercase mb-3">Car Financing</h4>
                        <p class="m-0">Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit sea sed</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 mb-2">
                    <div class="service-item d-flex flex-column justify-content-center px-4 mb-4">
                        <div class="d-flex align-items-center justify-content-between mb-3">
                            <div class="d-flex align-items-center justify-content-center bg-banner ml-n4" style="width: 80px; height: 80px;">
                                <i class="fa fa-2x fa-car text-light"></i>
                            </div>
                            <h1 class="display-2 text-dark mt-n2 m-0">03</h1>
                        </div>
                        <h4 class="text-uppercase mb-3">Car Inspection</h4>
                        <p class="m-0">Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit sea sed</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 mb-2">
                    <div class="service-item d-flex flex-column justify-content-center px-4 mb-4">
                        <div class="d-flex align-items-center justify-content-between mb-3">
                            <div class="d-flex align-items-center justify-content-center bg-banner ml-n4" style="width: 80px; height: 80px;">
                                <i class="fa fa-2x fa-cogs text-light"></i>
                            </div>
                            <h1 class="display-2 text-dark mt-n2 m-0">04</h1>
                        </div>
                        <h4 class="text-uppercase mb-3">Auto Repairing</h4>
                        <p class="m-0">Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit sea sed</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 mb-2">
                    <div class="service-item d-flex flex-column justify-content-center px-4 mb-4">
                        <div class="d-flex align-items-center justify-content-between mb-3">
                            <div class="d-flex align-items-center justify-content-center bg-banner ml-n4" style="width: 80px; height: 80px;">
                                <i class="fa fa-2x fa-spray-can text-light"></i>
                            </div>
                            <h1 class="display-2 text-dark mt-n2 m-0">05</h1>
                        </div>
                        <h4 class="text-uppercase mb-3">Auto Painting</h4>
                        <p class="m-0">Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit sea sed</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 mb-2">
                    <div class="service-item d-flex flex-column justify-content-center px-4 mb-4">
                        <div class="d-flex align-items-center justify-content-between mb-3">
                            <div class="d-flex align-items-center justify-content-center bg-banner ml-n4" style="width: 80px; height: 80px;">
                                <i class="fa fa-2x fa-pump-soap text-light"></i>
                            </div>
                            <h1 class="display-2 text-dark mt-n2 m-0">06</h1>
                        </div>
                        <h4 class="text-uppercase mb-3">Auto Cleaning</h4>
                        <p class="m-0">Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit sea sed</p>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <!-- Banner Start -->
    <div class="container-fluid py-5">
        <div class="container py-5">
            <div class="bg-banner py-5 px-4 text-center">
                <div class="py-5">
                    <h1 class="display-1 text-uppercase text-light mb-4">50% OFF</h1>
                    <h1 class="text-uppercase text-light mb-4">Special Offer For New Members</h1>
                    <p class="text-light mb-4">Only for Sunday from 1st Jan to 30th Jan 2045</p>
                    <a class="btn btn-secondary mt-2 py-3 px-5" href="">Register Now</a>
                </div>
            </div>
        </div>
    </div>
    <!-- Banner End -->
     <!-- Footer Start -->
    <div class="container-fluid bg-banner py-5 px-sm-3 px-md-5" style="margin-top: 90px;">
        <div class="row pt-5">
            <div class="col-lg-3 col-md-6 mb-5">
                <h4 class="text-uppercase text-light mb-4">Get In Touch</h4>
                <p class="mb-3 text-light"><i class="fa fa-map-marker-alt text-white mr-3"></i>123 Street, Angeles City, Pampanga, Philippines</p>
                <p class="mb-3 text-light"><i class="fa fa-phone-alt text-white mr-3"></i>+012 345 67890</p>
                <p class="mb-3 text-light"><i class="fa fa-envelope text-white mr-3"></i>info@example.com</p>
                <h6 class="text-uppercase text-white py-2">Follow Us</h6>
                <div class="d-flex justify-content-start">
                    <a class="btn btn-lg btn-dark btn-lg-square mr-2" href="#"><i class="fab fa-twitter"></i></a>
                    <a class="btn btn-lg btn-dark btn-lg-square mr-2" href="#"><i class="fab fa-facebook-f"></i></a>
                    <a class="btn btn-lg btn-dark btn-lg-square mr-2" href="#"><i class="fab fa-linkedin-in"></i></a>
                    <a class="btn btn-lg btn-dark btn-lg-square" href="#"><i class="fab fa-instagram"></i></a>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 mb-5">
                <h4 class="text-uppercase text-light mb-4">Useful Links</h4>
                <div class="d-flex flex-column justify-content-start">
                    <a class="text-body mb-2 text-light" href="#"><i class="fa fa-angle-right text-white mr-2"></i>Private Policy</a>
                    <a class="text-body mb-2 text-light" href="#"><i class="fa fa-angle-right text-white mr-2"></i>Term & Conditions</a>
                    <a class="text-body mb-2 text-light" href="#"><i class="fa fa-angle-right text-white mr-2"></i>New Member Registration</a>
                    <a class="text-body mb-2 text-light" href="#"><i class="fa fa-angle-right text-white mr-2"></i>Return & Refund</a>
                    <a class="text-body text-light" href="#"><i class="fa fa-angle-right text-white mr-2"></i>Help & FQAs</a>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 mb-5">
                <h4 class="text-uppercase text-light mb-4">Newsletter</h4>
                <p class="mb-4 text-light">Volup amet magna clita tempor. Tempor sea eos vero ipsum. Lorem lorem sit sed elitr sed kasd et</p>
                <div class="w-100 mb-3">
                    <div class="input-group">
                        <input type="text" class="form-control bg-dark border-dark" style="padding: 25px;" placeholder="Your Email">
                        <div class="input-group-append">
                            <button class="btn btn-primary text-uppercase px-3">Sign Up</button>
                        </div>
                    </div>
                </div>
                <i class="text-light">Lorem sit sed elitr sed kasd et</i>
            </div>
        </div>
    </div>
  <!-- Footer Ends-->
    </div>
</template>
<script>
    import axios from "axios";
    export default {
        data() {
            return {
                client: {
                   name: '',
                   email: '',
                   phone: '',
                   car:'',
                   date:''
                }
            }
        },
        methods: {
            handleSubmitForm() {
                let apiURL = 'http://localhost:4000/api/create-client';
                
                axios.post(apiURL, this.client).then(() => {
                  this.$router.push('/view')
                  this.client = {
                    name: '',
                    email: '',
                    phone: '',
                    car:'',
                    date:''
                  }
                }).catch(error => {
                    console.log(error)
                });
            }
        }
    }
</script>