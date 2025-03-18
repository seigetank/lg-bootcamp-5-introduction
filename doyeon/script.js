document.addEventListener("scroll", function () {
    let scrollPosition = window.scrollY; // 현재 스크롤 위치
    let fadeStart = 100; // 이 높이부터 서서히 사라짐
    let fadeEnd = 300; // 이 높이 이후 완전히 사라짐

    let hiThere = document.querySelector(".container");
    let signImage = document.querySelector(".sign-image");

    if (scrollPosition > fadeStart) {
        let opacity = 1 - (scrollPosition - fadeStart) / (fadeEnd - fadeStart);
        opacity = Math.max(opacity, 0); // 최소 0으로 설정

        hiThere.style.opacity = opacity;
        hiThere.style.transform = `scale(${opacity})`; // 크기도 함께 줄어듦
        signImage.style.opacity = opacity;
        signImage.style.transform = `translateY(${(1 - opacity) * -50}px)`; // 위로 이동
    } else {
        hiThere.style.opacity = 1;
        hiThere.style.transform = "scale(1)";
        signImage.style.opacity = 1;
        signImage.style.transform = "translateY(0)";
    }

    fadeStart =1400;
    fadeEnd = 1700;


    // fluffy 섹션 애니메이션 처리
    let fluffySection = document.querySelector("#myFluffySection"); // fluffy 섹션의 id 사용
    if (fluffySection) {
        if (scrollPosition > fadeStart) {
            let opacity = 1 - (scrollPosition - fadeStart) / (fadeEnd - fadeStart);
            opacity = Math.max(opacity, 0); // 최소 0으로 설정

            fluffySection.style.opacity = opacity;
            fluffySection.style.transform = `scale(${opacity})`; // 크기도 함께 줄어듦
        } else {
            fluffySection.style.opacity = 1;
            fluffySection.style.transform = "scale(1)";
        }
    }


    fadeStart =2500;
    fadeEnd = 2800;

    // mbti 섹션 애니메이션 처리
    let mbtiSection = document.querySelector("#mbtiSection"); // mbti 섹션의 id 사용
    if (mbtiSection) {
        if (scrollPosition > fadeStart) {
            let opacity = 1 - (scrollPosition - fadeStart) / (fadeEnd - fadeStart);
            opacity = Math.max(opacity, 0); // 최소 0으로 설정

            mbtiSection.style.opacity = opacity;
            mbtiSection.style.transform = `scale(${opacity})`; // 크기도 함께 줄어듦
        } else {
            mbtiSection.style.opacity = 1;
            mbtiSection.style.transform = "scale(1)";
        }
    }

        // 추가된 아래 내용이 나타날 때 애니메이션
        let appearStart = 1200;
        let appearEnd = 1600;

        appearStart = 1800;
        appearEnd = 2000;
    
        // 아래의 새로운 섹션을 처리
        let newSection = document.querySelector(".new-section"); // 새로운 섹션을 선택
        if (newSection) {
            if (scrollPosition > appearStart) {
                let opacity = (scrollPosition - appearStart) / (appearEnd - appearStart);
                opacity = Math.min(opacity, 1); // 최대 1로 설정
    
                newSection.style.opacity = opacity;
                newSection.style.transform = `translateY(${(1 - opacity) * 50}px)`; // 아래에서 위로 이동
            } else {
                newSection.style.opacity = 0;
                newSection.style.transform = "translateY(50px)";
            }
        }
});

/* #### typing */
const content = "Thank you for visiting !";
const text = document.querySelector(".title"); // .title 클래스를 가진 첫 번째 요소 선택
let textIdx = 0;

function typing() {

    // 문자열이 끝날 때까지 타이핑 진행
    if (textIdx < content.length) {
        let txt = content[textIdx++];
        text.innerHTML += txt;
    } else {
        // 타이핑이 끝났을 때 텍스트를 지우고 다시 시작
        setTimeout(() => {
            text.innerHTML = "";  // 텍스트 지우기
            textIdx = 0;  // 텍스트 인덱스 초기화
        }, 500);  // 텍스트가 완전히 타이핑된 후 500ms 후에 텍스트를 지우기
    }
}

// 타이핑 효과를 일정 시간 간격으로 실행
setInterval(typing, 200);  // 200ms 간격으로 타이핑 실행


// 맨 위로 스크롤하는 함수
document.getElementById("scrollToTopBtn").addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
