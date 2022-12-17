const getimg = document.querySelector(".img-link")
const imgbtn=document.querySelector(".img-btn")
const imgpart=document.querySelector(".img-part")
const upld=document.querySelector(".upload")
const inputrange=document.querySelectorAll(".slider")
imgbtn.addEventListener("click",()=>{
    let p=getimg.value;
    function k(p) {
        try { 
            return Boolean(new URL(p)); 
        }
        catch(e){ 
            return false; 
        }
    }
    if(k(p)){

        imgpart.src=p;
    }  
})
upld.addEventListener("change",()=>{
    var file = document.getElementById("file").files;
    if (file.length > 0){
         var fileReader = new FileReader();
    }

    fileReader.onload = function (event){
        document.getElementById("imgg").setAttribute("src",event.target.result);
    };
    fileReader.readAsDataURL(file[0]);

})

for(let i=0;i<inputrange.length;i++){
    inputrange[i].addEventListener('input' ,edit);
}

function edit(){
    let gs=document.getElementById('gs');
    let blr=document.getElementById('blr');
    let hr=document.getElementById('hr');
    let spa=document.getElementById('spa');
    let bright=document.getElementById('bright');

    let gsval=gs.value;
    let blrval=blr.value;
    let hrval=hr.value;
    let spaval=spa.value;
    let brightval=bright.value;

imgpart.style.filter= 'grayscale('+gsval+'%) blur('+blrval+'px) hue-rotate('+hrval+'deg) sepia('+spaval+'%) brightness('+brightval+'%)'; 
}

let inptt=document.querySelectorAll(".slider")
const rest = document.querySelector(".rest")
rest.addEventListener('click',()=>{
    console.log("reset");
    for(let i=0;i<inptt.length-1;i++){
        inptt[i].value='0';
    }
    inptt[4].value='100';
    setTimeout(function(){
        edit();
    },0)
})


const dwnld=document.querySelector(".download")
const im11=document.querySelector(".img-part")

dwnld.addEventListener('click',()=>{
    let gs=document.getElementById('gs');
    let blr=document.getElementById('blr');
    let hr=document.getElementById('hr');
    let spa=document.getElementById('spa');
    let bright=document.getElementById('bright');

    let gsval=gs.value;
    let blrval=blr.value;
    let hrval=hr.value;
    let spaval=spa.value;
    let brightval=bright.value;
   
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        canvas.width = im11.naturalWidth;
        canvas.height = im11.naturalHeight;
        
        ctx.filter = `brightness(${brightval}%) blur(${blrval}px) hue-rotate(${hrval}deg) sepia(${spaval}%) grayscale(${gsval}%)`;
        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.drawImage(im11, -canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);
        
        const link = document.createElement("a");
        link.download = "image.jpg";
        link.href = canvas.toDataURL();
        link.click();
    
})

