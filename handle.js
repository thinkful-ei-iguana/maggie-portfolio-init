

const handleGoToProject = function() {
  $('a[href$=\'projects\']').on('submit', e => {
    e.preventDefault();
    $('main').empty();
    projectsRender();
  });
};