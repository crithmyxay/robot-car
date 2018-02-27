const URL = 'http://localhost:3000'
//event listeners that need to send data to the server, which then go to Arduino
$('[data-up]').click(() => {
  $.get(URL + '/up', () => {
    
  })
})

$('[data-left]').click(() => {
  $.get(URL + '/left', () => {
    
  })
})

$('[data-stop]').click(() => {
  $.get(URL + '/stop', () => {
    
  })
})

$('[data-right]').click(() => {
  $.get(URL + '/right', () => {
    
  })
})

$('[data-reverse]').click(() => {
  $.get(URL + '/reverse', () => {
    
  })
})