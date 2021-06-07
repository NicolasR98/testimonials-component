//Testimonials
const testimonials = [
  {
    id: 1,
    name: "Susan Smith",
    job: "Web Dev",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    heading:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn",
  },
  {
    id: 2,
    name: "Anna Johnson",
    job: "UX Design",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    heading:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    text:
      "Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 3,
    name: "Peter Jones",
    job: "Intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    heading:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    text:
      "gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 4,
    name: "Bill Anderson",
    job: "The Boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    heading:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    text:
      "flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
];

//Themes
const themes = ["purple", "blue", "orange", "green"];

//--Selectors
const card = document.querySelector(".card");
const cardImg = document.querySelector(".img-profile");
const cardName = document.querySelector(".name");
const cardProfession = document.querySelector(".profession");
const cardHeading = document.querySelector(".heading-card");
const cardText = document.querySelector(".text-card");

const btnBack = document.querySelector(".--backwards");
const btnNext = document.querySelector(".--foward");

//Index from testimonials
let currentItem = 0;

//Loads first item from testimonials
window.addEventListener("DOMContentLoaded", () => {
  const { img, name, job, heading, text } = testimonials[currentItem];
  cardImg.src = img;
  cardName.textContent = name;
  cardProfession.textContent = job;
  cardHeading.textContent = heading;
  cardText.textContent = text;
});

//--Functions--

//Random Number
const getRandomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
//Changes the theme of .card
const getRandomTheme = () => {
  let color = getRandomNum(0, themes.length - 1)
  let newTheme = `theme-${themes[color]}`;
  let currentTheme = card.classList[1];
  if(newTheme === currentTheme){
    getRandomTheme()
  }
  card.classList.replace(currentTheme, newTheme)
}

//Display the person testimonial on the selectors
const displayTestimonial = (person) => {
  const { img, name, job, heading, text } = testimonials[person];
  cardImg.src = img;
  cardName.textContent = name;
  cardProfession.textContent = job;
  cardHeading.textContent = heading;
  cardText.textContent = text;
};

//--Events

btnNext.addEventListener("click", () => {
  currentItem++;
  if (currentItem > testimonials.length - 1) {
    currentItem = 0;
  }
  getRandomTheme()
  displayTestimonial(currentItem);
});

btnBack.addEventListener("click", () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = testimonials.length - 1;
  }
  getRandomTheme()
  displayTestimonial(currentItem);
});



