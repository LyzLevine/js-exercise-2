(function () {
  var input = document.getElementById('submitName')

  input.addEventListener('keypress', returnName, false)

  function returnName (event){
    return "Hello, " + input.value + ", nice to meet you!"
    message = 'Hello ' + input.value + ', nice to meet you!'
    writeToDocument(event, message)
  }


}) ();
