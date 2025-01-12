document.addEventListener('DOMContentLoaded', function() {
  let startTime, endTime, timeoutId

  document.body.addEventListener('click', function() {
    const bodyStyle = window.getComputedStyle(document.body)
    const bgColor = bodyStyle.backgroundColor

    if (bgColor === 'rgb(43, 135, 209)') { // Estado inicial
      document.body.style.backgroundColor = 'red'
      document.querySelector('h4:last-of-type').textContent = 'When the red box turns green, click as quickly as you can.'
      startTime = new Date().getTime()
      timeoutId = setTimeout(function() {
        document.body.style.backgroundColor = 'green'
        document.querySelector('h4:last-of-type').textContent = 'Click now!'
        startTime = new Date().getTime()
      }, Math.random() * 3000 + 3000) // Tiempo aleatorio entre 3 y 6 segundos
    } else if (bgColor === 'rgb(255, 0, 0)') { // Rojo
      clearTimeout(timeoutId)
      document.body.style.backgroundColor = 'blue'
      document.querySelector('h4:last-of-type').textContent = 'Too soon!'
    } else if (bgColor === 'rgb(0, 128, 0)') { // Verde
      endTime = new Date().getTime()
      document.body.style.backgroundColor = 'blue'
      document.querySelector('h4:last-of-type').textContent = 'Time: ' + (endTime - startTime) + ' ms'
    }
  })
})
