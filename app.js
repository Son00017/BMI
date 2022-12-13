const formEl = document.querySelector("form");
const card = document.querySelector("#card");
let title = document.getElementById("title");
let natija = document.getElementById("natija");
let img = document.getElementById("img");
card.style.display = "none";
formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  let ism = formEl.ism.value;
  let boy = formEl.boy.value / 100;
  let vazn = formEl.vazn.value;
  let bmi = vazn / boy ** 2;
  if ((boy > 0) & (vazn > 0)) {
    if (bmi < 18.5) {
      title.textContent = `${ism.toLocaleUpperCase()}`;
      natija.textContent = `You are underweight`;
      img.src =
        "https://img.freepik.com/premium-vector/thin-man-exercising-lifting-barbell-cartoon-illustration-sticker-emoticon_10606-1957.jpg?w=2000";
      card.style.display = "block";
      formEl.style.display = "none";
    } else if ((bmi >= 18.5) & (bmi <= 24.9)) {
      title.textContent = `${ism.toLocaleUpperCase()}`;
      natija.textContent = `You are so cool`;
      img.src =
        "https://www.emoji.co.uk/files/emoji-one/activity-emoji-one/1691-person-with-ball.png";
      card.style.display = "block";
      formEl.style.display = "none";
    } else if ((bmi <= 29.9) & (bmi >= 25)) {
      title.textContent = `${ism.toLocaleUpperCase()}`;
      natija.textContent = `You are overweight`;
      img.src =
        "https://www.shutterstock.com/image-illustration/3d-rendered-anatomy-illustration-overweight-260nw-83586874.jpg ";
      card.style.display = "block";
      formEl.style.display = "none";
    } else if ((bmi <= 34.9) & (bmi >= 30)) {
      title.textContent = `${ism.toLocaleUpperCase()}`;
      natija.textContent = `You are obese`;
      img.src =
        "https://www.shutterstock.com/image-illustration/fat-angry-stout-guy-evil-260nw-1520791505.jpg";
      card.style.display = "block";
      formEl.style.display = "none";
    } else if ((bmi <= 39.9) & (bmi >= 35)) {
      title.textContent = `${ism.toLocaleUpperCase()}`;
      natija.textContent = `You are so obese`;
      img.src =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl00zpRdwU5zQ8m4RYjm5MKCYNFSpTBuetNg&usqp=CAU";
      card.style.display = "block";
      formEl.style.display = "none";
    } else if (bmi >= 40) {
      title.textContent = `${ism.toLocaleUpperCase()}`;
      natija.textContent = `You are very obese`;
      img.src =
        "https://www.shutterstock.com/image-illustration/fat-angry-stout-guy-evil-260nw-1520791505.jpg";
      card.style.display = "block";
      formEl.style.display = "none";
    }
  }
});
