import FooterMountain from 'Assets/footer_mountain.svg';
import FacebookLogo from 'Assets/fb.svg';
import InstagramLogo from 'Assets/insta.svg';
import TwitterLogo from 'Assets/twitter.svg';
import './HegeFooter.css';

function HegeFooter() {

    return (
        <div class="footer-background">
            <div class="row gx-0">
                <div class="col-sm-6 col-12 p-4 p-sm-5">
                    <h1 class="footer-font-color">Our Source</h1>
                    <h6 class="footer-font-color">Coordinates: 28.5983° N, 83.9310° E</h6>
                    <hr class="footer-font-color m-0"></hr>
                    <h6 class="footer-font-color mt-1">Himalayan Foothills</h6>
                    <h3 class="footer-font-color mt-4 mt-sm-5">Delivering To</h3>
                    <h6 class="footer-font-color">Hyderabad | Mumbai | Bangalore | Chennai</h6>
                    <h6 class="footer-font-color mt-4 mt-sm-5">info@naturalhege.com 00-0000-0000</h6>
                </div>
                <div class="col-sm-6 col-12 pt-4 p-sm-5 footer-relative-position">
                    <div class="row gx-0 social-media-relative-margin">
                        <div class="col-sm-12 col-12 text-sm-end text-center">
                            <img src={FacebookLogo} class="footer-image-res ps-3 pe-3 ps-sm-5 pe-sm-5" />
                            <img src={InstagramLogo} class="footer-image-res ps-3 pe-3 ps-sm-5 pe-sm-5" />
                            <img src={TwitterLogo} class="footer-image-res ps-3 pe-3 ps-sm-5 pe-sm-5" />
                        </div>
                    </div>
                    <div class="row gx-0 mt-5 footer-absolute-position">
                        <img src={FooterMountain} class="footer-image-res" />
                    </div>
                </div>
            </div>

        </div>
    );

}

export default HegeFooter;