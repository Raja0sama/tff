$( document ).ready(function() {
    document.querySelector('iframe').src = document.querySelector('iframe').src + "&enablejsapi=1" 
    
const closeBTN = document.getElementById('modalclose')
closeBTN.addEventListener('click',()=> {

$('#modalvideo').each(function(){
  this.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*')
});

})
    
    //// SELECTOR 
    // document.querySelector('.custom-select-wrapper').addEventListener('click', function () {
//     this.querySelector('.custom-select').classList.toggle('open');
// })

for (const dropdown of document.querySelectorAll(".custom-select-wrapper")) {
    dropdown.addEventListener('click', function () {
        this.querySelector('.custom-select').classList.toggle('open');
    })
}

for (const option of document.querySelectorAll(".custom-option")) {
    option.addEventListener('click', function () {
        if (!this.classList.contains('selected')) {
            this.parentNode.querySelector('.custom-option.selected').classList.remove('selected');
            this.classList.add('selected');
            this.closest('.custom-select').querySelector('.custom-select__trigger span').textContent = this.textContent;
           document.querySelector('.typeSelect').value = this.textContent;
        }
    })
}

// window.addEventListener('click', function (e) {
//     const select = document.querySelector('.custom-select')
//     if (!select.contains(e.target)) {
//         select.classList.remove('open');
//     }
// });

window.addEventListener('click', function (e) {
    for (const select of document.querySelectorAll('.custom-select')) {
        if (!select.contains(e.target)) {
            select.classList.remove('open');
        }
    }
});





    $(".dot-team").hover(function(){
  $(this).css("transform", "scale(1)");
  }, function(){
  $(this).css("transform", "scale(0.1)");
        
        
        
        
   
        
});


var vid = document.getElementById("bgvideo"); 

function playVid() { 
  vid.play(); 
} 
    
    playVid()

})



     document.addEventListener('invalid', (function(){
    return function(e) {
      e.preventDefault();
      const select = document.querySelector('.custom-select__trigger')
      let a = "Error"
      let element = e.target
      console.log(element.name)
      switch(element.name){
          case "name": 
           a = "Please Input correct Name"
           break;
           case "phoneNumber": 
           a = "Please Input correct Phone Number"
           break;
           case "companyName": 
           a = "Please Input correct Company Name"
           break;
           case "companySelect":
               element = select
           a = "Please Input correct Enquiry Type"
           break;
           case "email": 
           a = "Please Input correct Email"
          break;
      }

      
      const color = "rgba(255, 255, 255, 0.45)"
       element.style.borderBottomColor = 'red'

      
      setTimeout(()=>{
        element.style.borderBottomColor = color
},5000)



if(select.value == ""){

    const color = "rgba(255, 255, 255, 0.45)"
    select.style.borderBottomColor = 'red'
    
    
    setTimeout(()=>{
        select.style.borderBottomColor = color
    },5000)
}
    };
})(), true);



