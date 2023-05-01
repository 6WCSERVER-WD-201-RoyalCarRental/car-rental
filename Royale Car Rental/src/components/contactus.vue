<template>
    <div><!-- Contact Start -->
    <div class="container-fluid py-5">
        <div class="container pt-5 pb-3">
            <h1 class="display-1 text-secondary text-center">06</h1>
            <h1 class="display-4 text-uppercase text-center mb-5">Contact Us</h1>
            <div class="row">
                <div class="col-lg-7 mb-2">
                    <div class="contact-form bg-light mb-4" style="padding: 30px;">
                        <form>
                            <div class="row">
                                <div class="col-6 form-group">
                                    <input type="text" class="form-control p-4" placeholder="Your Name" required="required">
                                </div>
                                <div class="col-6 form-group">
                                    <input type="email" class="form-control p-4" placeholder="Your Email" required="required">
                                </div>
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control p-4" placeholder="Subject" required="required">
                            </div>
                            <div class="form-group">
                                <textarea class="form-control py-3 px-4" rows="5" placeholder="Message" required="required"></textarea>
                            </div>
                            <div>
                                <button class="btn btn-dark py-3 px-5" type="submit">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-lg-5 mb-2">
                    <div class="bg-banner d-flex flex-column justify-content-center px-5 mb-4" style="height: 435px;">
                        <div class="d-flex mb-3">
                            <i class="fa fa-2x fa-map-marker-alt text-light flex-shrink-0 mr-4"></i>
                            <div class="mt-n1">
                                <h5 class="text-light">Head Office</h5>
                                <h6 class="text-light">123 Street, Angeles City, Pampanga, Philippines</h6>
                            </div>
                        </div>
                        <div class="d-flex mb-3">
                            <i class="fa fa-2x fa-map-marker-alt text-light flex-shrink-0 mr-4"></i>
                            <div class="mt-n1">
                                <h5 class="text-light">Branch Office</h5>
                                <h6 class="text-light">#1 Holy Angel St, Angeles, 2009 Pampanga</h6>
                            </div>
                        </div>
                        <div class="d-flex mb-3">
                            <i class="fa fa-2x fa-envelope-open text-light flex-shrink-0 mr-4"></i>
                            <div class="mt-n1">
                                <h5 class="text-light">Customer Service</h5>
                                <h6 class="text-light">group5wcserver@gmail.com</h6>
                            </div>
                        </div>
                        <div class="d-flex">
                            <i class="fa fa-2x fa-envelope-open text-light flex-shrink-0 mr-4"></i>
                            <div class="mt-n1">
                                <h5 class="text-light">Return & Refund</h5>
                                <h6 class="text-light">refundgrroup5@example.com</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Contact End -->

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
export default {
    name: 'contactus',
    data () {
        return {
        }
    }
}
</script>