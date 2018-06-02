(function () {
  window.addEventListener('load', function () {

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });

    // zavarovalna polica validation example
    $('#polica').keyup(function () {
      if ($(this).val().length > 0) {
        $(this).addClass('is-valid');
        $(this).removeClass('is-invalid');
      } else {
        $(this).addClass('is-invalid');
        $(this).removeClass('is-valid');
      }
    });

    // date-picker
    $('.form-group.date')
      .datepicker({
        format: 'dd.mm.yyyy',
        todayBtn: 'linked',
        language: 'sl',
        autoclose: true,
        todayHighlight: true
      });

    $('#table_id').DataTable();


    // slideout hamburger meni
    if (document.getElementById('hamburger')) {

      var slideout = new Slideout({
        'panel': document.getElementById('main-wrapper'),
        'menu': document.getElementById('hamburger'),
        'padding': 256,
        'tolerance': 70
      });

      $('.hamburger-toggle-button').click(function () {
        slideout.toggle();
      });

      $('.hamburger-toggle-close').click(function () {
        slideout.close();
      });

      // hamburger meni window resize listener
      window.addEventListener('resize', function () {
        var width = $(window).width();
        // force close hamburger on large screen
        if (width > 991) {
          slideout.close();
        }
      }, true);

    }

    var loader = '<div class="btn-loader">' +
      '<div class="btn-loader-el-1"></div>' +
      '<div class="btn-loader-el-2"></div>' +
      '<div class="btn-loader-el-3"></div>' +
      '<div class="btn-loader-el-4"></div>' +
      '</div>';

    // button loader example
    $('form').submit(function (event) {
      var self = $(this);
      event.preventDefault();
      self.children('button[type=submit]').prop('disabled', true);
      self.children('button[type=submit]').append(loader);
      self.children('button[type=submit]').addClass('loading');

      setTimeout(function(){
        self.children('button[type=submit]').removeClass('loading');
        self.children('button[type=submit]').find('.btn-loader').remove();
        self.children('button[type=submit]').prop('disabled', false);
        // if (self.checkValidity() === true) {
          self.unbind('submit').submit();
        // }
      }, 2000);

    });


  }, false);
})();

$.fn.datepicker.dates['sl'] = {
  days: ["Nedelja", "Ponedeljek", "Torek", "Sreda", "Četrtek", "Petek", "Sobota"],
  daysShort: ["Ned", "Pon", "Tor", "Sre", "Čet", "Pet", "Sob"],
  daysMin: ["Ne", "Po", "To", "Sr", "Če", "Pe", "So"],
  months: ["Januar", "Februar", "Marec", "April", "Maj", "Junij", "Julij", "Avgust", "September", "Oktober", "November", "December"],
  monthsShort: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Avg", "Sep", "Okt", "Nov", "Dec"],
  today: "Danes",
  weekStart: 1
};
