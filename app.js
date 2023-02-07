const panels = document.querySelectorAll(".panel");

// panels.forEach(panel => {
//     panel.addEventListener("mouseover", () => {
//         panel.classList.add("active")
//     })
//     panel.addEventListener("mouseout", () => {
//         panel.classList.remove("active")
//     })
// })

panels.forEach(panel => {
    panel.addEventListener("click",() => {
        if(panel.classList.contains("active")){
            removeClass()
        }else{
        removeClass();
        panel.classList.add("active")
        }
    })
})

function removeClass(){
    panels.forEach(panel => {
        panel.classList.remove("active")
    })
}
