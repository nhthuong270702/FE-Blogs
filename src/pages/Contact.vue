<template lang="">
    <div class="home_contact">
        <div class="home_background parallax-window" data-parallax="scroll" data-speed="0.8"
            style="background-image: url('../assets/images/regular.jpg'); background-size: cover; background-position: center center;">
        </div>

        <div class="home_content_contact">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 offset-lg-3">
                        <!-- Post Comment -->
                        <div class="post_comment">
                            <div class="contact_form_container">
                                <form action="#">
                                    <input type="text" class="contact_input contact_input_name" placeholder="Your Name"
                                        required="required">
                                    <input type="email" class="contact_input contact_input_email"
                                        placeholder="Your Email" required="required">
                                    <textarea class="contact_text" placeholder="Your Message"
                                        required="required"></textarea>
                                    <button type="submit" class="contact_button">Send Message</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
    import '../../public/assets/plugins/parallax-js-master/parallax.min.js'
    import '../../public/assets/js/contact.js'

    export default {
        name: "ContactPage"
    }
</script>
<style scoped>
    /* @import '../../public/assets/plugins/jquery.mb.YTPlayer-3.1.12/jquery.mb.YTPlayer.css'; */
    @import '../../public/assets/styles/contact.css';
    @import '../../public/assets/styles/contact_responsive.css';
</style>