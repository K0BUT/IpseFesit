let block1 = document.querySelector(".block1");
let imgs1 = document.querySelector(".imgs1");
let H1 = document.querySelector(".H1");
block1.addEventListener("mouseenter", (e) => {
    imgs1.style.transition = "all 0.5s ease";
    imgs1.style.scale = "1.1 1.1";
    H1.style.transition = "all 0.5s ease";
    H1.style.scale = "1.2 1.2";
});
block1.addEventListener("mouseleave", (e) => {
    imgs1.style.transition = "all 0.5s ease";
    imgs1.style.scale = "1 1";
    H1.style.transition = "all 0.5s ease";
    H1.style.scale = "1 1";
}); 

let block2 = document.querySelector(".block2");
let imgs2 = document.querySelector(".imgs2");
block2.addEventListener("mouseenter", (e) => {
    imgs2.style.transition = "all 0.5s ease";
    imgs2.style.scale = "1.1 1.1";
});
block2.addEventListener("mouseleave", (e) => {
    imgs2.style.transition = "all 0.5s ease";
    imgs2.style.scale = "1 1";
}); 

let block = document.querySelector(".block");
let imgs = document.querySelector(".imgs");

block.addEventListener("mouseenter", (e) => {
    imgs.style.transition = "all 0.5s ease";
    imgs.style.scale = "1.1 1.1";
    
    
});

block.addEventListener("mouseleave", (e) => {
    imgs.style.transition = "all 0.5s ease";
    imgs.style.scale = "1 1";
    
    
    
}); 

function setEqualHeight(columns) {
    var tallestcolumn = 0;
    columns.each( function() {
        currentHeight = $(this).height();
        if(currentHeight > tallestcolumn) { tallestcolumn = currentHeight; } } );
        columns.height(tallestcolumn);
    }

    $(document).ready(function() { setEqualHeight($(".text")); });