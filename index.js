
window.onload = function () {
        let element = document.getElementsByClassName('trilho')[ 0 ]
        let body = document.getElementsByTagName('body')[0]
        element.addEventListener('click', () => {
                element.classList.toggle('dark')
                body.classList.toggle('dark')

    })   
}