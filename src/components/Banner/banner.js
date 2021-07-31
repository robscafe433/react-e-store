import "./banner.css";

function Banner() {
    /*-- XL- 1450 * 720 lg- 950 * 350 md- 992 * 576 sm- 768 * 576 --*/
    return (
        <div class="banner">
            <div class="banner-textWrapper">
                <h1 class="banner-title">Your one stop shop</h1>
                <h2>At a discount price</h2>
                <a href="/categories/all.html" class="btn btn-dark">
                    View All Items
                    <i class="fal fa-chevron-right"></i>
                </a>
            </div>
        </div>
    );
}

export default Banner;
