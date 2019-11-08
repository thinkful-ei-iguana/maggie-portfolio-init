

const mainRender = function () {
  $(window).on('load', e => {
    e.preventDefault();
    console.log('hoooo')
    $('main').html(
      `<div class="ultimate-container">

            <section class="img-container">
                <img src="assets/nz.jpg" alt="nz image placeholder" 
                class="nz-img">
            </section>

            <section class="content-container">
                <h1 class="hero-bold">I'm Maggie</h1>
                <h2>a developer in development</h2>
                <nav class="nav-container">
                    <ul class="nav-buttons">
                        <li>
                            <a href="#projects" class="button">Projects</a>
                        </li>
                        <li>
                            <a href="#about" class="button">About</a>
                        </li>
                        <li>
                            <a href="#contact" class="button">Contact</a>
                        </li>
                    </ul>
                </nav>
                <ul class="footer-icons">
                    <li>
                        <a href="#" class="fa-github icon">g</a>
                    </li>
                    <li>
                        <a href="#" class="fa-linkedin icon">l</a>
                    </li>
                    <li>
                        <a href="#" class="fa-email icon">e</a>
                    </li>
                </ul>
            </section>
        </div>`
    );
    handleGoToProject();

  });
};
let maggie = $("a[href$='#projects']");
console.log(maggie)
const handleGoToProject = function() {
  $(maggie).on('submit', e => {
    
    e.preventDefault();
    $('main').empty();
    projectsRender();
  });
};

const projectsRender = function() {
  $('a[href$=\'projects\']').on('submit', e => {
    e.preventDefault();
    $('main').empty();

    console.log('projectsRender running');
    $('main').html(
      `<div class="ultimate-container">
    
                <section class="img-container">
                    <img src="assets/nz.jpg" alt="nz image placeholder" 
                    class="nz-img">
                </section>
    
                <section class="content-container">
                    <h2>Here's what I've been up to...</h2>
                    <nav class="go-back from-content">
                        <a href="#home" class="button"></a>
                    </nav>
                    <div id="project1">Project 1</div>
                    <div id="project2">Project 2</div>
                    <div id="project3">Project 3</div>
                    <div id="project4">Project 4</div>
                </section>
            </div>`
    );
  });
}

const aboutRender = function() {
  $('#about').on('submit', e => {
    e.preventDefault();
    $('main').empty();

    console.log('aboutRender running');
    $('main').html(
      `<div class="ultimate-container">
        
                    <section class="img-container">
                        <img src="assets/nz.jpg" alt="nz image placeholder" 
                        class="nz-img">
                    </section>
        
                    <section class="content-container">
                        <h2>Here's what I've been up to...</h2>
                        <nav class="go-back about-content">
                            <a href="#home" class="button"></a>
                        </nav>
                        <div id="project1">Project 1</div>
                        <div id="project2">Project 2</div>
                        <div id="project3">Project 3</div>
                        <div id="project4">Project 4</div>
                    </section>
                </div>`
    )
  });
};

const contactRender = function() {
  $('#contact').on('submit', e => {
    e.preventDefault();
    $('main').empty();

    console.log('contactrender running');
    $('main').html(
      `<div class="ultimate-container">
          
                      <section class="img-container">
                          <img src="assets/nz.jpg" alt="nz image placeholder" 
                          class="nz-img">
                      </section>
          
                      <section class="content-container">
                          <h2>Here's what I've been up to...</h2>
                          <nav class="go-back contact-content">
                              <a href="#home" class="button"></a>
                          </nav>
                          <div id="project1">Project 1</div>
                          <div id="project2">Project 2</div>
                          <div id="project3">Project 3</div>
                          <div id="project4">Project 4</div>
                      </section>
                  </div>`
    )
  });
};

$(mainRender);