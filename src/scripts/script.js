(function () {
  'use strict';
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
