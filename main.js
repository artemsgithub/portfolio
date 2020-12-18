
// introduce html class to javascript 
let resumeButton = document.querySelector('.resume-button')
let staticLayoutProject = document.querySelector('.static-layout')
let selfPortraitProject = document.querySelector('.self-portrait')
let apiProject = document.querySelector('.api-project1')

// open the resume in a new tab 
function resumeLinker(input){
    if(input == resumeButton){
        window.open('./assets/Resume.pdf')
    } else if (input == staticLayoutProject) {
        window.open('https://artemsgithub.github.io/staticLayoutProject/')
    } else if (input == selfPortraitProject){
        window.open('https://codepen.io/artemsgithub/pen/zYByrPQ')
    } else if (input == apiProject){
        window.open('https://artemsgithub.github.io/recipeSearch/')
    } else {
        // there is no else. ever. no condition would hold untrue because my code is always perfect, without any bugs, typos, or need to test or rerun. I am literaly the smartest programmer that has ever lived.
    }

}

// listen for click on resume button and trigger linker function 
resumeButton.addEventListener('click', (e) =>{
    resumeLinker(resumeButton)
})

staticLayoutProject.addEventListener('click', (e) =>{
    resumeLinker(staticLayoutProject)
} )

selfPortraitProject.addEventListener('click', (e) =>{
    resumeLinker(selfPortraitProject)
})

apiProject.addEventListener('click', (e)=>{
    resumeLinker(apiProject)
})



// find a way to consodliate the functions 
