const modal1 = document.querySelector("[card-modal1]");
const modal2 = document.querySelector("[card-modal2]");
const modal3 = document.querySelector("[card-modal3]");
const modal4 = document.querySelector("[card-modal4]");
const modal5 = document.querySelector("[card-modal5]");
const modal6 = document.querySelector("[card-modal6]");
const modals = [modal1, modal2, modal3, modal4, modal5, modal6];


//close modals
modals.forEach(element => {
    element.addEventListener("click", e => {
        const dialogDimensions =
        element.getBoundingClientRect()
        if (
            e.clientX < dialogDimensions.left ||
            e.clientX > dialogDimensions.right ||
            e.clientY < dialogDimensions.top ||
            e.clientY > dialogDimensions.bottom
        ) {
            element.close()
        }
    })
});