$('section p').addClass('hidden');
$('section p:first').removeClass('hidden');

$('section h2').on('click', function () {

  $('section p').addClass('hidden');

  $(this).next().removeClass('hidden');

  });
