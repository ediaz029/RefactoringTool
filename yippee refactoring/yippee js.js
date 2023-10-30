// JS by Cat



// BEGIN txt file upload
  // start reading on change
  document.getElementById("myFile").addEventListener("change", getFile) ;

  function getFile(event) {
    const input = event.target
    if ("files" in input && input.files.length > 0) {
      readFileContent(input.files[0]).then(content => {
        document.getElementById("usercode").value = content
        yippee()
      }).catch(error => console.log(error))
    }
  }

  function readFileContent(file) {
    const reader = new FileReader()
    return new Promise((resolve, reject) => {
      reader.onload = event => resolve(event.target.result)
      reader.onerror = error => reject(error)
      reader.readAsText(file)
    })
  }
// END txt file upload



// YIPPEE!!! YIPPEE!!!!!!!!!!!!!
  // yippee on change
  document.getElementById("usercode").addEventListener("change", yippee) ;

  function yippee() {
    // refactoredcode = refactored(usercode)
    document.getElementById("refactoredcode").value =
      refactor(document.getElementById("usercode").value)

    // play gif
    document.getElementById("creature").src = "yippee.gif"

    // wait until gif is over, then stop it
    setTimeout(function(){document.getElementById("creature").src = "yippee.png"}, 4930)
  }
// END of yippee :pensive:



// BEGIN "refactoring" lol ok whatevr
  function refactor(code){
    // REMEMBER... we need to split it up into chunks before starting refactoring!
    // so find out how to break it into parts around each function or whatever...
    // and put it in this function maybe?
    
    // actually refactor it somehow
    code = extractMethod(code) ;
    // add other refactors as they're made...

    // trim and add the annoying text so i know it worked
    return code.trim() + "\n\n// yaaay this has been refactored yaaaay yippee"
  }
// END refactoring FOREVER!!!!!!!!!!!! JUST STOP IT



// maybe add a popup like "confirm use of extract method?"
// because sometimes it just makes your code suck ass instead of actually helping



/*
   _____                                _               __  __      _   _               _     
  / ____|                              (_)             |  \/  |    | | | |             | |    
 | |     ___  _ __ ___  _ __   ___  ___ _ _ __   __ _  | \  / | ___| |_| |__   ___   __| |___ 
 | |    / _ \| '_ ` _ \| '_ \ / _ \/ __| | '_ \ / _` | | |\/| |/ _ \ __| '_ \ / _ \ / _` / __|
 | |___| (_) | | | | | | |_) | (_) \__ \ | | | | (_| | | |  | |  __/ |_| | | | (_) | (_| \__ \
  \_____\___/|_| |_| |_| .__/ \___/|___/_|_| |_|\__, | |_|  |_|\___|\__|_| |_|\___/ \__,_|___/
                       | |                       __/ |                                        
                       |_|                      |___/                                         
*/



// BEGIN extract method (https://refactoring.guru/extract-method)
function extractMethod(code) {
  // find where a comment is
  codecomment = code.indexOf("//")
    // if dne then exit
    if ( codecomment == -1 ) { return code }

  // see where comment ends
  commentends = code.indexOf("\n", codecomment)

  // break it up into parts
  topcode = code.substr( 0, codecomment )
  subcode = code.substr( codecomment, commentends - codecomment )
  bottomcode = code.substr( commentends )

  // convert the comment to one word yaaaayyyyyywooooooooooo
  // it will be very long if the comment itself is long but i dont care
  subcode = subcode.replaceAll(/[^0-9a-z]/gi,"").toLowerCase()
    // if empty then exit
    if ( subcode == "" ) { return code }

  // if the generated name is already an existing function
  // ie substring() ... then you're screwed fuck you
  
  // theres supposed to be a thing that extracts inside functions
  // like printdetails(){ inside() }
  //      --> printdetails( double inside() ) { inside }
  // but idk how to grab that and take it out or anything

  return topcode + subcode + "();\n}\n\nvoid " + subcode + "() {" + bottomcode
}
// END extract method



// JS by Ernesto? JS by Damian? below...

// BEGIN inline method (https://refactoring.guru/inline-method)
function inlineMethod() {
  // yippee
}
// END inline method



// BEGIN extract variable (https://refactoring.guru/extract-variable)
function extractVariable() {
  // yippee
}
// END extract variable



// BEGIN inline temp (https://refactoring.guru/inline-temp)
function inlineTemp() {
  // yippee
}
// END inline temp



// BEGIN replace temp with query (https://refactoring.guru/replace-temp-with-query)
function replaceTemp() {
  // yippee
}
// END replace temp



// BEGIN split temporary variable (https://refactoring.guru/split-temporary-variable)
function splitTemp() {
  // yippee
}
// END split temp



// BEGIN remove assignments to parameters
  // (https://refactoring.guru/remove-assignments-to-parameters)
function removeAss() {
  // yippee
}
// END remove assignments



// BEGIN replace method with method object
  // (https://refactoring.guru/replace-method-with-method-object)
function replaceMethod() {
  // yippee
}
// END replace method



// BEGIN substitute algorithm (https://refactoring.guru/substitute-algorithm)
function substituteAlgorithm() {
  // yippee
}
// END substitute algorithm



/* there are still more refactoring methods not listed here:
    Moving Features between Objects
    Organizing Data
    Simplifying Conditional Expressions
    Simplifying Method Calls
    Dealing with Generalization
   lots of fun to be had!
*/