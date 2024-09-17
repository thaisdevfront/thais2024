
myModal=(event)=>{
    let body=document.querySelectorAll('body')[0] 
    let src=event.target.getAttribute('src')
    let modalImag=document.getElementById('ModalImages')
     
    console.log('ola',modalImag)
    toggleModal=()=>{
      return modalImag.classList.toggle('show')
    }

    
      modalImag.innerHTML=` 
       <div onclick="toggleModal()" class='overlay' style="
    background: #373ac963;
    position: fixed;
    width: 100%;
    height: 100%;
">  </div>
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header"> 
                <button onclick='toggleModal()' type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                  <img class="img-fluid" src="`+src+`" alt="" >
            
              </div>
              <div class="modal-footer">
                <button type="button" onclick='toggleModal()' class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                <button type="button" onclick='toggleModal()' class="btn btn-primary">Voltar</button>
              </div>
            </div>
          </div>
        

          
 
    `
    return toggleModal()
}


 