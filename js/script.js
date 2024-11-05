const testimonial = [
  {
    name: "sojib",
    photoUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Whether it's my iPhone, MacBook or AirPods, I can always rely on Apple for top-notch performance and reliability. Their products are not just devices, they are a part of my daily life and I cannot imagine using anything else.",
  },

  {
    name: "suruya",
    photoUrl:
      "https://plus.unsplash.com/premium_vector-1727952231430-87b459905e1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXxaV25vd3Bjc0FhVXx8ZW58MHx8fHx8",
    text: "hank you Apple for continuously setting the bar high and providing us with the best technology. I will always be a proud Apple user and recommend it to everyone I know.",
  },

  {
    name: "Joynal haque",
    photoUrl:
      "https://images.unsplash.com/photo-1730656802195-0794a7399850?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "h I will always be a proud Apple user and recommend it to everyone I know.",
  },
];

const imgElement = document.querySelector("#img");
const textElement = document.querySelector("#text");
const userElement = document.querySelector("#username");

let inx = 0;

const updateTestimonial = () => {
  const { name, photoUrl, text } = testimonial[inx];
  // @ts-ignore
  imgElement.src = photoUrl;
  // @ts-ignore
  textElement.innerText = name;
  // @ts-ignore
  userElement.innerText = text;
  inx++;
  if (inx === testimonial.length) {
    inx = 0;
  }
  setTimeout(() => {
    updateTestimonial();
  }, 1000);
};

updateTestimonial();
