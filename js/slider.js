const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
const swiper1 = new Swiper('.carts_catalog_line', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 6,
    spaceBetween: 20,
    centerInsufficientSlides: true,
    centeredSlides: true,
    // slidesOffsetBefore: 50,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swn1',
      prevEl: '.swp1',
    },
  });
const swiper2 = new Swiper('.sim-slider-list', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 6,
    spaceBetween: 20,
    centerInsufficientSlides: true,
    centeredSlides: true,
    slidesOffsetBefore: 105,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swn1',
      prevEl: '.swp1',
    },
  });

  const swiper3 = new Swiper('.slider-cart-product', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    spaceBetween: 0,
    centerInsufficientSlides: true,
    centeredSlides: true,
    // slidesOffsetBefore: 50,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });