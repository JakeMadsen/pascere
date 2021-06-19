$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
      console.log("CLICKCKCKC")

        $('#sidebar').toggleClass('active');
    });

$('#color-picker_1, #color-picker_2, #color-picker_3').spectrum({
  type: "component",
  togglePaletteOnly: true,
  showInput: true,
  showAlpha: false
});

  $('tbody').sortable();

  $(document).ready(function() {



    $('#example').DataTable({
      "ordering":false
    });



  });


});

