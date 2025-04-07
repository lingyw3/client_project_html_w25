//I used chatgpt to help me with this function in js file
document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("popup-modal");
  
    if (popup) {
      setTimeout(() => {
        popup.classList.add("hidden");
  
        
        setTimeout(() => {
          popup.remove();
        }, 600); 
      }, 1300); 
    }
  });
  