let cardd = ``;
for (let index = 0; index < 36; index++) {
    cardd += `
    
    <div class="col-sm-6 col-lg-4 col-xl-3">
                    <div class="card" >
                        <img src="../collection/images/1.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                          <h4 class="card-title">Menu inspiration</h4>
                          <h6>curated by <div class="awwwards">awwwards</div> </h6>
                          <div class="imgg">
                            <img src="../Awwards-Project-main/images/06.person2.webp">
                            <img src="../Awwards-Project-main/images/06.person1.webp">
                            <img src="../Awwards-Project-main/images/06.person3.webp">
                            <img src="../Awwards-Project-main/images/06.person4.webp">
                            <i class="fas fa-user-lock"></i>
                          </div>
                         
                        </div>

                      </div>
                </div>
   `
}
document.getElementById('site').innerHTML = cardd;