let sites = ``;
for (let index = 0; index < 36; index++) {
    sites += `
    
    <div class="col-sm-6 col-lg-4 col-xl-3">

    <div class="box-item">
        <div class="site-snapshot">
            <a href="#">
                <img src="http://unsplash.it/417/298?random&blur" />
            </a>
            <div class="overlay">
                <div class="position-relative w-100 h-100">
                    <div class="overlay-items d-flex justify-content-between">
                        <div class="social">
                            <a href="#">
                                <div class="icon">
                                    <i class="fab fa-facebook-f"></i>
                                </div>
                            </a>
                            <a href="#">
                                <div class="icon">
                                    <i class="fab fa-twitter"></i>
                                </div>
                            </a>
                            <a href="#">
                                <div class="icon">
                                    <i class="fab fa-pinterest-p"></i>
                                </div>
                            </a>
                            <a href="#">
                                <div class="icon">
                                    <i class="fab fa-linkedin-in"></i>
                                </div>
                            </a>
                        </div>
                        <a href="#">
                            <div class="icon position-absolute share">
                                <i class="fas fa-share text-white"></i>
                            </div>
                        </a>
                        <button>Collect</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="caption px-4 mt-4 overflow-y-hidden">
            <a href="#">Site Name</a>
            <div class="meta d-flex justify-content-between py-3">
                <span>From <span>Country</span></span>
                <span>June 1,2020</span>
            </div>
            <hr>
            <div class="author d-flex align-items-center ">
                <img src="http://unsplash.it/g/50?random&gravity=center" class="rounded-circle"
                    alt="" />
                <div class="author-name">
                    <span class="d-inline-block ml-2">BY</span>
                    <span class="font-weight-bold ml-1">AUTHORNAME</span>
                </div>
                <div class="awards d-flex ml-auto">
                    <div class="award-badge hm">HM</div>
                    <div class="award-badge mw">MW</div>
                    <div class="award-badge dev">DEV</div>
                    <div class="award-badge sotd">SOTD</div>
                    <div class="award-badge sotm">SOTM</div>
                    <div class="award-badge soty">SOTY</div>
                </div>
            </div>
        </div>
    </div>

</div>

   `
}
document.getElementById('sitesContent').innerHTML = sites;