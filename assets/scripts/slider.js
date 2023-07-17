var slideIndex = 0;
var slides = document.querySelectorAll("#slide-list li");

function showSlide() {
  if (slides.length === 0) {
    return;
  }
  // 모든 슬라이드를 숨김
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slides[i].classList.remove("slide-left", "slide-right", "fade-in");
  }
  // 현재 슬라이드를 보여줌
  slides[slideIndex].style.display = "block";
  slides[slideIndex].classList.add("fade-in");
  console.log("현재슬라이드:", slideIndex);
}

function nextSlide() {
  // 현재 슬라이드에 왼쪽으로 넘어가는 애니메이션 클래스 추가
  slides[slideIndex].classList.add("slide-left");

  if (slideIndex < slides.length - 1) {
    slideIndex++;
  } else {
    slideIndex = 0;
  }
  // 다음 슬라이드를 초기 위치로 설정
  slides[slideIndex].style.display = "block";
  slides[slideIndex].classList.add("fade-in");
  slides[slideIndex].classList.remove("slide-left", "slide-right");
}

function previousSlide() {
  // 현재 슬라이드에 오른쪽으로 넘어가는 애니메이션 클래스 추가
  slides[slideIndex].classList.add("slide-right");

  if (slideIndex > 0) {
    slideIndex--;
  } else {
    slideIndex = slides.length - 1;
  }

  //   이전 슬라이드를 초기 위치로 설정
  slides[slideIndex].style.display = "block";
  slides[slideIndex].classList.add("fade-in");
  slides[slideIndex].classList.remove("slide-left", "slide-right");
}

// 초기 슬라이드 표시
showSlide();
