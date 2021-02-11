const Modal = {
    open() {
         document.querySelector('.clickClose').classList.add('active')
        
        
    },
    // close() {
    //     document.querySelector('.clickClose.active').classList.remove('active')

    // }
}

const esc = document.querySelector('body')

esc.onkeydown = function (event) {
    const esc = event.key
    if(esc === "Escape") {
        document.querySelector('.clickClose.active').classList.remove('active')
    }
}