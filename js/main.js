
// 모바일 메뉴
const hambar = document.querySelector(".hamburger")
const mbMenu = document.querySelector(".mobile_menu")
// 오버레이 추가 
const overlay = document.querySelector(".overlay")
hambar.addEventListener("click" , ()=>{
    mbMenu.classList.add("active");
    overlay.classList.add("active");
    hambar.classList.add("active");
    // 스크롤 방지 
    document.body.style.overflow = "hidden";
});

overlay.addEventListener("click" , function() { 
    mbMenu.classList.remove("active");
    overlay.classList.remove("active");
    hambar.classList.remove("active");
    // 다시 스크롤 생성 
    document.body.style.overflow = "";
}); 

