//event listeners that need to send data to the server, which then go to Arduino
  $('[data-up]').click(() => {
    console.log('Forward!');
  })

  $('[data-left]').click(() => {
    console.log('Left!');
  })

  $('[data-stop]').click(() => {
    console.log('Stop!');
  })

  $('[data-right]').click(() => {
    console.log('Right!');
  })

  $('[data-down]').click(() => {
    console.log('Down!');
  })