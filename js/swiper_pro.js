
// 상품 스와이퍼 
const proSwiper = new Swiper(".productSwiper" , { 
    slidesPerView: 3,
    spaceBetween: 24,
    loop: true, 
    // 반응형
    breakpoints : { 
        0:{ 
            slidesPerView: 1.3,
            spaceBetween: 15,
        },
        390: { 
            slidesPerView: 2.3,
            spaceBetween: 15,
        },
        768: { 
            slidesPerView: 3.3,
            spaceBetween: 15,
        }
    },
    // 페이지네이션
    pagination : { 
        el:".product .swiper-pagination " , 
    }, 
    // 네비게이션 ( 좌우 화살표 )
    navigation : { 
        nextEl : ".productSwiper .swiper-button-next" , 
        prevEl : ".productSwiper .swiper-button-prev" , 
    },
}) ;