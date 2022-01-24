(function jobsDisplay() {
    let jobs = ``
    for (let i = 0; i < 6; i++) {
        jobs += `
  <div class="col-lg-6 p-2">
     <div class="item h-100 p-4 position-relative">
     <a href="#" class="item-link position-absolute w-100 h-100 d-block"></a>
     <div class="img rounded-circle"></div>
     <span>United States</span>
     <h3>UX/UI Designer</h3>
     <span class="name">DUMBO</span>
     <p>DUMBO ist eine kleine Digitalagentur aus Köln, die mit Leidenschaft Produkte und
       Services entwickelt, die die Nutzer lieben. Auch wenn wir ein kleines Team sind,
       sind unsere Kunden große Marken, globale Unternehmen und Branchenführer. Unsere Arbeit
     </p>
     <div class="item-footer position-absolute w-100 py-2 d-flex justify-content-between align-items-center">
       <span>Design</span>
       <span>2 days ago</span>
    </div>
    </div>
  </div>`
    }
    document.getElementById('jobsContainer').innerHTML = jobs;
})();

(function talentDisplay() {
    let talent = ``
    for (let i = 0; i < 6; i++) {
        talent += `
    <div class="col-lg-6 p-2">
       <div class="item h-100 p-4 position-relative">
        <a href="#" class="item-link position-absolute w-100 h-100 d-block"></a>
        <div class="img rounded-circle"></div>
        <span>France</span>
        <h3>Nicolas Bussière</h3>
        <span class="name">nicolas-bussiere.com</span>
        <p>I'm a french interactive art director and full-time freelancer based in Paris. Before
            that, I was working @kenzo, @OctaveOctave and @UZIKagency
        </p>
        <div class="item-footer position-absolute w-100 py-2 d-flex justify-content-between align-items-center">
            <span>Freelance</span>
            <i class="far fa-envelope"></i>
        </div>
      </div>
    </div>`
    }
    document.getElementById('talentContainer').innerHTML = talent;
})();

$('.filterBtn').click(function () {
    if ($('.jobsMenu').css('display') == 'none') {
        $('.jobsMenu').fadeIn(400).css('display', 'flex')
        $('#over').fadeIn(400)
    } else {
        $('.jobsMenu').fadeOut(400)
        $('#over').fadeOut(400)
    }
})
$('.closeMenu').click(function () {
    $('.jobsMenu').fadeOut(400) 
    $('#over').fadeOut(400)
})