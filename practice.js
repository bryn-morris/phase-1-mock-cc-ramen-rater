///////////////////////////////////////////////////////////////////////////////
////////////////////   PseudoCode
///////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////
////////////////////   Core Deliverable #1 - 
///////////////////////////////////////////////////////////////////////////////

// Grab the Div with the ID of Ramen Menu
// Use a fetch request to grab data from db.json
// .then (r => r.json())
// .then (data => { console.log data to see data type and change variable name})
// If needed dig into the data structure to convert it to an array to call foreach
// Pass a function that acts on each element within array
    // Create img tag using createElement
    // assign src of img tag 
    // Append img to Div with ID of ramen menu

///////////////////////////////////////////////////////////////////////////////
////////////////////   Core Deliverable #2 - 
///////////////////////////////////////////////////////////////////////////////

// querySelect img, h2, and h3 within ramen detail div
// querySelect span for rating
// grab p for comment display
// Within the foreach function above, add an event listener to each created img
//  Assign img.src to be equivalent to dataVariable.image
// assign text content to each other entry

///////////////////////////////////////////////////////////////////////////////
////////////////////   Core Deliverable #3 - 
///////////////////////////////////////////////////////////////////////////////

// DOES NOT NEED TO PERSIST
// Grab the new-ramen form
// add event listener on submit
// create function for the event listener that 
    // use the eventObject to block default action with e.preventDefault
    // follow steps similar to deliverable #1 or call that function (if in scope)
        // to create img, add a src, and append to the ramen-menu div
    // apply event listener on click,and use that to populate the 
        // querySelected Elements from teh second deliverable.
    // equate these values to e.target.<SOMETHING>.value
        // console log e.target to determine best path to the data needed
        // from submission form

/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////

ramenMenuDiv = document.querySelector('div#ramen-men');

console.log(ramenMenuDiv)





///////////////////////////////////////////////////////////////////////////////
////////////////////   Core Deliverable #1 - 
///////////////////////////////////////////////////////////////////////////////

// Grab the Div with the ID of Ramen Menu
// Use a fetch request to grab data from db.json
// .then (r => r.json())
// .then (data => { console.log data to see data type and change variable name})
// If needed dig into the data structure to convert it to an array to call foreach
// Pass a function that acts on each element within array
    // Create img tag using createElement
    // assign src of img tag 
    // Append img to Div with ID of ramen menu