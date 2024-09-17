const toggleBtn = document.getElementById("toggle-btn");
const theme = document.getElementsByTagName('body')[0]
let darkMode = localStorage.getItem("dark-mode");

const enableDarkMode = () => {
    theme.classList.add("dark");
    toggleBtn.innerHTML="Light" 
    localStorage.setItem("dark-mode", "enabled");
  };
  
const disableDarkMode = () => {
    theme.classList.remove("dark");
    toggleBtn.innerHTML="Dark"  
    localStorage.setItem("dark-mode", "disabled");
  };

if (darkMode === "enabled") {
    enableDarkMode(); // set state of darkMode on page load
  }
  if(toggleBtn)
 toggleBtn.addEventListener("click", (e) => {
    darkMode = localStorage.getItem("dark-mode"); // update darkMode when clicked
    if (darkMode === "disabled") {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
  });


selectTheme=()=>{
      
    return document.getElementsByTagName('body')[0].classList.toggle('dark')
}


toggleMenu=()=>{

    return document.getElementById('navbarsExample04').classList.toggle('show')
}
 
let whatBtn=document.querySelectorAll('.whats-btn')
let formMsg=document.querySelector('.formMsg')
let leadMsg=document.getElementById('leadMsg')

 

openWhat=()=>{
    return location.href="https://api.whatsapp.com/send/?phone=5512981021517&text=Ol%C3%A1+Thais+Mariano+vim+do+portfolio2024"
}
sendMsg=()=>{ 
    
    return location.href="https://api.whatsapp.com/send/?phone=5512981021517&text=Ol%C3%A1+Thais+Mariano+"+leadMsg.value
}

Array.from(whatBtn).map((el)=>{ 
    
    el.onclick=(e)=>{  
    e.preventDefault() 
 
        if(leadMsg!=undefined){ 
            leadMsg.value.length.length>0?openWhat():sendMsg() 
        }else{
            openWhat()
        }

    }
})
if(formMsg){
    formMsg.addEventListener('submit',(e)=>{
        
        e.preventDefault()  
        console.log(leadMsg.value.length) 

        leadMsg.value.length.length>0?openWhat():sendMsg() 

    })
}