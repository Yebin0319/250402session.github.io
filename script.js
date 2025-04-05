function changeText(element) {
    if (element.innerText === "생년월일") {
        element.innerText = "2003년 3월 19일";
    } else if (element.innerText === "아르바이트") {
        element.innerText = "English Zone 근로";
    } else if (element.innerText === "전공 및 학년") {
        element.innerText = "컴퓨터공학과 3학년";
    } else if (element.innerText === "MBTI") {
        element.innerText = "ESFJ";
    } else if (element.innerText === "전화 번호") {
        element.innerText = "010-2994-1448";
    } else if (element.innerText === "동생") {
        element.innerHTML = '<img src = "KakaoTalk_20240812_150852176_01.jpg" alt = "동생 사진" style="width: 80%">'
    }
}