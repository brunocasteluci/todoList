// Check off Specific TO-DOS by clicking
$('ul').on('click', 'li', function() {
  $(this).toggleClass('completed');
});

// Click on X to delete TO-DO
$('ul').on('click', 'span', function(event) {
  $(this)
    .parent()
    .fadeOut(500, function() {
      $(this).remove();
    });

  event.stopPropagation();
});

// Add new TO-DO
$("input[type = 'text']").keypress(function(event) {
  if (event.which === 13) {
    // grabing new TO-DO text from input
    var todoText = $(this).val();
    $(this).val('');
    // Create a new li and add to ul
    $('ul').append(
      '<li><span><i class="far fa-trash-alt"></i> </span>' + todoText + '</li>'
    );
  }
});

$('.fa-plus').click(function() {
  $("input[type = 'text']").fadeToggle();
});
