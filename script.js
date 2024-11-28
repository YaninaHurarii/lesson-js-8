/* 1. Знайдіть всі елементи з класом "feature", запишіть в змінну, вивести в консоль.

Використайте 2 способи для пошуку елементів.

Задайте кожному елементу з класом "feature" вирівнювання тексту по - центру(text-align: center).*/

// Спосіб 1

const featureClass = document.querySelectorAll(".feature");

console.log(featureClass);

// Спосіб 2

const featuresClass2 = document.getElementsByClassName("feature");

console.log(featuresClass2);


for (let i = 0; i < featureClass.length; i++) {
  featureClass[i].style.textAlign = "center";
}


/* 2. Змініть текст усіх елементів h2 на "Awesome feature".*/

const title2 = document.querySelectorAll("h2");

title2.forEach((title) => {
  title.textContent = "Awesome feature";
});

  
/* 3. Знайдіть всі елементи з класом "feature-title" та додайте в кінець тексту елементу знак оклику "!".*/

for (let i = 0; i < title2.length; i++) {
  title2[i].innerText += "!";
}



