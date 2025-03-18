document.addEventListener("DOMContentLoaded", function () {
  const topButton = document.createElement("button");
  topButton.innerText = "유레카! 안녕 우린 5조야 페이지로 이동";
  topButton.style.position = "fixed";
  topButton.style.bottom = "20px";
  topButton.style.right = "20px";
  topButton.style.padding = "10px 20px";
  topButton.style.fontSize = "16px";
  topButton.style.backgroundColor = "#007bff";
  topButton.style.color = "#fff";
  topButton.style.border = "none";
  topButton.style.borderRadius = "5px";
  topButton.style.cursor = "pointer";
  topButton.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)";
  
  topButton.addEventListener("mouseover", function () {
      topButton.style.backgroundColor = "#0056b3";
  });
  
  topButton.addEventListener("mouseout", function () {
      topButton.style.backgroundColor = "#007bff";
  });
  
  topButton.addEventListener("click", function () {
      window.location.href = "../"; // 원하는 페이지 URL 설정
  });
  
  document.body.appendChild(topButton);
});