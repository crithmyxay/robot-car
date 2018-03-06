const URL = window.location.href;
//event listeners that need to send data to the server, which then go to Arduino
$('[data-up]')
  .mousedown(() => {
    $.get(URL + 'up', () => {
      // maybe something else
    })
  .mouseup(()=> {
    $.get(URL + 'stop', () => {
      // maybe something else
    })
  })
})

$('[data-left]').click(() => {
  $.get(URL + 'left', () => {
    
  })
})

$('[data-stop]').click(() => {
  $.get(URL + 'stop', () => {
    
  })
})

$('[data-right]').click(() => {
  $.get(URL + 'right', () => {
    
  })
})

$('[data-reverse]').click(() => {
  $.get(URL + 'reverse', () => {
    
  })
})