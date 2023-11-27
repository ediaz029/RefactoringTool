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



// BEGIN yippee
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
// END yippee



// BEGIN refactoring
  function refactor(code){
    // split-into-chunks function eventually?
    
    // add the refactor methods here:
    //code = extractMethod(code)
    //code = inlineMethod(code)
    //code = inlineTemp(code)
    //code = splitTemp(code)
    //code = replaceTemp(code)

    // trim and add the annoying text so i know it worked
    return "// yaaay this has been refactored yaaaay yippee\n\n"+ code.trim()
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
  // locate comment
  commentstart = code.indexOf("//")
    // if dne then exit
    if ( commentstart == -1 ) { return "// extract method failed: no comments found\n\n" + code }

  // see where comment ends
  commentend = code.indexOf("\n", commentstart)

  // break it up into parts
  topcode    = code.substr( 0, commentstart )                         // everything above the comment
  comment    = code.substr( commentstart, commentend - commentstart ) // the comment itself
  bottomcode = code.substr( commentend )                              // everything below the comment

  // convert comment to one word
  // it will be very long if the comment itself is long but i dont care
  comment = comment.replaceAll(/[^0-9a-z]/gi,"").toLowerCase()
    // if empty then exit
    if ( comment == "" ) { return "// extract method failed: comment has no text\n\n" + code }

  // if the generated name is already an existing function
  // ie substring() ... then oopsies! too late!
  
  /* theres supposed to be a thing that extracts inside functions
     like printdetails(){ inside() }
          --> printdetails( double inside() ) { inside }
     but idk how to grab that and take it out or anything */

  return "// extract method: successful\n\n" + topcode + comment + "();\n}\n\nvoid " + comment + "() {" + bottomcode
}
// END extract method



// BEGIN inline method (https://refactoring.guru/inline-method)
function inlineMethod(code) {
  // locate return
  returnstart = code.indexOf("return")
    if ( returnstart == -1 ) { return "// inline method failed: return not found\n\n" + code }

  // see where return ends
  returnend = code.indexOf("\n", returnstart)

  // break it up into just one part
  // (i dont want to run more functions than i have to if this next one doesn't exist anyway)
  bottomcode = code.substr( returnend )

  // locate second return
  returnstarttwo = bottomcode.indexOf("return")
    if ( returnstarttwo == -1 ) { return "// inline method failed: second return not found\n\n" + code}

  // see where return ends
  returnendtwo = bottomcode.indexOf("\n", returnstarttwo)

  // break it up into parts
  topcode = code.substr( 0, returnstart )
  returnn = code.substr( returnstart, returnend - returnstart )
  midcode    = bottomcode.substr( 0, returnstarttwo )
  returntwo  = bottomcode.substr( returnstarttwo, returnendtwo - returnstarttwo )
  bottomcode = bottomcode.substr( returnendtwo )

  // locate function in returnn
  returnfunction = returnn.indexOf("()")
    if ( returnfunction == -1 ) { return "// inline method failed: return function not found\n\n" + code }
    
  // get function
  returnfunction = returnn.substr( returnn.indexOf(" ") + 1, returnfunction - returnn.indexOf(" ") + 1 )

  // locate function in middle
  midfunction = midcode.indexOf( returnfunction )
    if ( midfunction == -1 ) { return "// inline method failed: middle function not found\n\n" + code }
  
  // get function
  midfunction = midcode.substr( midfunction, midcode.indexOf("()", midfunction) - midfunction + 2 )

  return "// inline method successful, but didn't do anything yet lol.\n\n" + topcode + returnn + midcode + returntwo + bottomcode
  // + "\n\n\n" + returnfunction
  // + "\n\n\n" + midfunction
}
// END inline method


/* class PizzaDelivery {
  // ...
  int getRating() {
    return moreThanFiveLateDeliveries() ? 2 : 1;
  }
  boolean moreThanFiveLateDeliveries() {
    return numberOfLateDeliveries > 5;
  }
}

class PizzaDelivery {
  // ...
  int getRating() {
    return numberOfLateDeliveries > 5 ? 2 : 1;
  }
}
*/



// BEGIN extract variable (https://refactoring.guru/extract-variable)
function extractVariable(code) {
  // yippee
}
// END extract variable




// JS by Damian



// BEGIN inline temp (https://refactoring.guru/inline-temp)
function inlineTemp(code) {
  // locate double
  doublestart = code.indexOf("double")
    if ( doublestart == -1 ) { return "// inline temp failed:  not found\n\n" + code }
    
  // see where double declaration ends
  doublenend = code.indexOf("\n", doublestart)
    
  topcode = code.substr(0,doublestart)


  // locate equals
  equalstart = code.indexOf("=")
    if ( equalstart == -1 ) { return "// inline temp failed: equals not found\n\n" + code }
  
  //locate function being called
  functionend = code.indexOf(";",equalstart)
  //get function
  functioncall = code.substr(equalstart + 1, functionend - ( equalstart + 1)  )

  // locate return
  returnstart = code.indexOf("return")
    if ( returnstart == -1 ) { return "// inline temp failed: return not found\n\n" + code }
  // see where return ends
  returnend = code.indexOf(" ", returnstart)

  //get function
  functionreturn = code.substr(returnstart, returnend - returnstart)

  // locate operaor
  operator = code.indexOf(">")
    if (operator == -1 ) { return "// inline temp failed: operator not found\n\n" + code }  
  //locate expression end
  expressionend = code.indexOf(";",operator)

  //get operation
  operation = code.substr(operator,expressionend)

  
  return  topcode + functionreturn + functioncall + operation
  
  // yippee
}
// END inline temp



// BEGIN replace temp with query (https://refactoring.guru/replace-temp-with-query)
function replaceTemp(code) {
  //space addition
  spc="\n"

  // locate double
  doublestart = code.lastIndexOf("double")
    if ( doublestart == -1 ) { return "// Split temp failed: double not found\n\n" + code }
    
  // see where double declaration ends
  doublenend = code.indexOf(";", doublestart)

  topcode = code.substr(0,doublestart)
  midcode = code.substr(doublenend + 1,code.lastIndexOf("}")).replaceAll("basePrice","basePrice()")

  newfunc = spc.concat(code.substr(doublestart, doublenend - doublestart).replaceAll("basePrice","basePrice()").replaceAll("=","{").concat(" }"))

  return topcode + midcode+ newfunc 
  // yippee
}
// END replace temp



// BEGIN split temporary variable (https://refactoring.guru/split-temporary-variable)
function splitTemp(code) {
  //possible addtions 
  str = "final "
  spc = "\n"

  // locate double
  doublestart = code.indexOf("double")
    if ( doublestart == -1 ) { return "// Split temp failed: double not found\n\n" + code }
    
  // see where double declaration ends
  doublenend = code.indexOf(";", doublestart)

  // create new variable
  newvar1 = str.concat(code.substr(doublestart , doublenend - (doublestart-1)).replace("temp","perimeter"))
  
  //find print statement
  printstuff1 = code.indexOf("System")
    if(printstuff1 == -1) {return "// Split temp failed: print not found\n\n" + code}

  //locate print stmnt end
  printend1 = code.indexOf("\n",printstuff1)

  //create new print statement
  newprint1 = spc.concat(code.substr(printstuff1, printend1 - printstuff1).replace("temp","perimeter"))

  //find temp uses
  templine = code.indexOf("temp",printend1)
  if ( templine == -1 ) { return "// Split temp failed: temp not found\n\n" + code }

  //find end of temp line
  tempend = code.indexOf("\n",templine)

  //create new variable
  newvar2 = spc.concat(code.substr(templine, tempend - templine).replace("temp","area"))

  //find print statement
  printstuff2 = code.indexOf("System",tempend)
    if(printstuff2 == -1) {return "// Split temp failed: print not found\n\n" + code}

  //locate print stmnt end
  printend2 = code.indexOf(";",printstuff2)

  //create new print statement
  newprint2 = spc.concat(code.substr(printstuff2, printend2 - (printstuff2 - 1)).replace("temp","area"))

  return newvar1 + newprint1 + newvar2 + newprint2
    
  // yippee
}
// END split temp







// JS by Ernesto



// BEGIN remove assignments to parameters
  // (https://refactoring.guru/remove-assignments-to-parameters)
function removeAss(code) {
  // yippee
}
// END remove assignments



// BEGIN replace method with method object
  // (https://refactoring.guru/replace-method-with-method-object)
function replaceMethod(code) {
  // yippee
}
// END replace method



// BEGIN substitute algorithm (https://refactoring.guru/substitute-algorithm)
function substituteAlgorithm(code) {
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
