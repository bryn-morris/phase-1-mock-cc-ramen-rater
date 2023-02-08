//////////////////////////////////////////////////////////////////////////////////
////////////////////////////////// PseudoCode  ///////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////
//////////// Deliverable #1 - 
////////////////////////////////////////////////////////

// Grab the div with ID of RamenMenu
// Use Feth to parse Get request to GET /ramens
// .then (r => r.json())
//.then (data -> {
//  CONSOLE LOG TO CHECK DATA STRUCTURE
//})
//   within forEach loop
// Create a  function to create an image tag
    // createElement 'img'
    //append img to div with id of ramen-menu
// pass createFunction through a forEach loop


////////////////////////////////////////////////////////
//////////// Deliverable #2 - 
////////////////////////////////////////////////////////

// Add event listener to each of the images created above, `click`
// grab div with id of ramen detail
    // grab name and assign to database info on click
    // grab restaurant and assign to database variable on click
// grab ratings span and set text content to database info when click on event listener
//grab comment p with and set text content to db info when click on event listener



////////////////////////////////////////////////////////
//////////// Deliverable #3 - 
////////////////////////////////////////////////////////


// grab form and add event listener on form
// event listener - "submit'
// grab event object and e.preventDefault on form
// DON'T NEED TO UPDATE SERVER
// on submit action create img tag and add to div with id of ramen menu

// repeat Deliverable 2 for the newly created image

/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////

ramenMenuDiv = document.querySelector('#ramen-menu');
ramenDetailDiv = document.querySelector('#ramen-detail');
ratingSpan = document.querySelector('span#rating-display');
commentSection = document.querySelector('p#comment-display')
ramenDetailImg = document.querySelector('img.detail-image');
ramenDetailName = document.querySelector('h2.name');
ramenDetailRestaurant = document.querySelector('h3.restaurant')
ramenForm = document.querySelector('form#new-ramen')

////////////////////////////////////////////////////////////////////////////////
//////////// Deliverable #1 - FetchRequest & Image Creation
////////////////////////////////////////////////////////////////////////////////

document.addEventListener('DOMContentLoaded',() => {
    
fetch ('http://localhost:3000/ramens')
    .then (r => r.json())
    .then (arrayOfObjects => {
////////////////////////////////////////////////////////////////////////////////
//////////// Advanced Deliverable - Render on Page Load
////////////////////////////////////////////////////////////////////////////////

            ramenDetailImg.src = arrayOfObjects[0].image;
            ramenDetailName.textContent = arrayOfObjects[0].name;
            ramenDetailRestaurant.textContent = arrayOfObjects[0].restaurant;
            ratingSpan.textContent = arrayOfObjects[0].rating;
            commentSection.textContent = arrayOfObjects[0].comment;

        function populateRamenMenu (ramenObj){
            const newImg = document.createElement('img');
            newImg.src = ramenObj.image;
            ramenMenuDiv.append(newImg);
            
//////////////////////////////////////////////////////////////////////////////
//////////// Deliverable #2 - Update Display on Image Selection
//////////////////////////////////////////////////////////////////////////////

            newImg.addEventListener('click', () => {
            ramenDetailImg.src = ramenObj.image;
            ramenDetailName.textContent = ramenObj.name;
            ramenDetailRestaurant.textContent = ramenObj.restaurant;
            ratingSpan.textContent = ramenObj.rating;
            commentSection.textContent = ramenObj.comment;
            })
        }

        arrayOfObjects.forEach(populateRamenMenu);

    })

})
//////////////////////////////////////////////////////////////////////////////
//////////// Deliverable #3 - Form Submission and Rendering (The dirty way)
//////////////////////////////////////////////////////////////////////////////

ramenForm.addEventListener('submit', handleNewRamenRender)

function handleNewRamenRender(e) {
    e.preventDefault();

    newFormImage = document.createElement('img');
    newFormImage.src = e.target.image.value// having trouble testing currently
    ramenMenuDiv.append(newFormImage); 

    newFormImage.addEventListener('click', () => {
       
        ramenDetailImg.src = e.target.image.value
        ramenDetailName.textContent = e.target.name.value; 
        ramenDetailRestaurant.textContent = e.target.restaurant.value;
        ratingSpan.textContent = e.target.rating.value;
        commentSection.textContent = e.target['new-comment'].value;

        })
}

////////////////////////////////////////////////////////////////////////////////
//////////// Advanced Deliverable - Update Rating & comment with form submission
////////////////////////////////////////////////////////////////////////////////