const gallery = document.querySelector('.gallery');
const lightbox = document.createElement('div');
const Images = document.querySelectorAll('.big');
//Adding Event Listener to eaach image in Gallaery
Images.forEach(image=>{
    gallery.appendChild(lightbox);
    image.addEventListener('click', (event)=>{
        lightbox.id ='lightbox';

        const imageElement = document.createElement('img');
    
        const targetedImage = event.target;
        //targetedImage is the specific image clicked
        imageElement.src = targetedImage.src
        imageElement.classList.add('lightboxImage')
        // console.log(imageElement)
        const imageContainer = document.createElement('div');
        const imageMarkup =  `
        
        <div class="lightbox-container">
        <div class='prevBtn'><i class="fas fa-chevron-left"></i>  </div>
         <div class='lightboxImage'>
          <img src='${imageElement.src}'> 
          <div class="cart"><i class="fas fa-cart-plus"></i> </div>
         </div>

          <div class='nextBtn'><i class="fas fa-chevron-right"></i>  </div>
           </div> 
           `;
  imageContainer.innerHTML = imageMarkup;
  lightbox.appendChild(imageContainer);

  //REMOVE ALL LIGHTBOX Element
  lightbox.addEventListener('click', ()=>{
    //accessing created and appended child  
  const CreatedElement = lightbox.getElementsByClassName('lightbox-container')[0];
  
  const imageParent =CreatedElement.parentElement.parentElement;
//   console.log(imageParent.id);
//getting src of the newly createdElement inner Image
//const lightboxImageUrl = CreatedElement.getElementsByTagName('img')[0].src

  if(imageParent.id==='lightbox'){
    imageParent.id='hideLightBox';
  };
})
//CHANGING INSIDE IMAGE


})
   })