function yippee() {
  // get user code from text area
  usercode = document.getElementById("usercode").value ;

  // refactoring code goes here
  usercode = usercode + " yaaay this has been refactored yaaaay yippee" ;

  // set refactored code to result
  document.getElementById("refactoredcode").value = usercode ;

  // update image
  document.getElementById("creature").src = "yippee.gif" ;

  setTimeout(function(){document.getElementById("creature").src = "yippee.png"}, 4930) ;
}

// this does not work
function readfile(){
  document.getElementById("myFile").addEventListener('change',function(){

  var fileReader=new FileReader();

  fileReader.onload=function(){
      document.getElementById("usercode").value = fileReader.result;
  }

  fileReader.readAsText(this.files[0]);

  })
}




document.getElementById('input-file')
  .addEventListener('change', getFile)

function getFile(event) {
	const input = event.target
  if ('files' in input && input.files.length > 0) {
	  placeFileContent(
      document.getElementById('content-target'),
      input.files[0])
  }
}

function placeFileContent(target, file) {
	readFileContent(file).then(content => {
  	target.value = content
  }).catch(error => console.log(error))
}

function readFileContent(file) {
	const reader = new FileReader()
  return new Promise((resolve, reject) => {
    reader.onload = event => resolve(event.target.result)
    reader.onerror = error => reject(error)
    reader.readAsText(file)
  })
}