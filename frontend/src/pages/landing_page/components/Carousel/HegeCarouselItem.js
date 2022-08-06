import Slider1Desktop from 'Assets/slider1_desktop.png';
import Slider1Mobile from 'Assets/slider1_mobile.png';
import Slider2Desktop from 'Assets/slider2_desktop.png';
import Slider2Mobile from 'Assets/slider2_mobile.png';
import Slider3Desktop from 'Assets/slider3_desktop.png';
import Slider3Mobile from 'Assets/slider3_mobile.png';
import './HegeCarouselItem.css'
import UntouchedIcon from 'Assets/asset1.svg';
import PrestineIcon from 'Assets/asset4.svg';
import NotRoIcon from 'Assets/asset2.svg';
import FilterIcon from 'Assets/asset3.svg'

function HegeCarouselItem(props) {
    return (
        <div class="carousel-item-container">
            <div class="carousel-item active">
                <picture>
                    <source
                        media="(min-width:1281px)"
                        srcset={Slider1Desktop} />
                    <source
                        media="(min-width: 320px)"
                        srcset={Slider1Mobile} />
                    <img src={Slider1Desktop} class="img-fluid" alt="Hege" />
                </picture>
                <p class="slider-one-text carousel-item-font-color carousel-item-font-weight">Live Natural</p>
                <p class="slider-one-one-text carousel-item-font-color"><span class="slider-one-one-font-color">Natural mineral water</span> from the himalayas</p>
            </div> 
            <div class="carousel-item">
                <picture>
                    <source
                        media="(min-width:1281px)"
                        srcset={Slider2Desktop} />
                    <source
                        media="(min-width: 320px)"
                        srcset={Slider2Mobile} />
                    <img src={Slider2Desktop} class="img-fluid" alt="Hege" />
                </picture>
                <p class="slider-two-text carousel-item-font-color carousel-item-font-weight">Only The Best</p>
                <p class="slider-two-two-text carousel-item-font-color">Natural mineral water</p>
                <div class="row gx-0">
                    <div class="col-6">
                        <img src={NotRoIcon} alt="Hege" class="p-4 first-icon-resp" />
                        <p class="not-ro-icon-text carousel-item-font-color">Not RO</p>
                    </div>
                    <div class="col-6">
                        <img src={FilterIcon} alt="Hege" class="p-4 second-icon-resp" />
                        <p class="filter-icon-text carousel-item-font-color">No Contaminants</p>
                    </div>
                    <div class="col-6">
                        <img src={PrestineIcon} alt="Hege" class="p-4 third-icon-resp" />
                        <p class="prestine-icon-text carousel-item-font-color">Unprocessed</p>
                    </div>
                    <div class="col-6">
                        <img src={UntouchedIcon} alt="Hege" class="p-4 fourth-icon-resp" />
                        <p class="untouched-icon-text carousel-item-font-color">Untouched</p>
                    </div>
                </div>
            </div>
            <div class="carousel-item">
                <picture>
                    <source
                        media="(min-width:1281px)"
                        srcset={Slider3Desktop} />
                    <source
                        media="(min-width: 320px)"
                        srcset={Slider3Mobile} />
                    <img src={Slider3Desktop} class="img-fluid" alt="Hege" />
                </picture>
                <p class="slider-three-text carousel-item-font-weight">Bring Home <span class="carousel-item-another-font-color">Purity</span></p>
                <p class="slider-three-three-text">Pour yourself a glass of nature</p>
            </div>
        </div>
    );
}

export default HegeCarouselItem;