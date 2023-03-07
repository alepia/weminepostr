const axios = require("axios");

const data = {
  name: "Alejandro Piacquadio",
  email: "apiacquadiol@gmail.com",
  position: "Software Developer",
  cv_url: "https://1drv.ms/b/s!ApesyPfHqOIshrMsiM69LU8pTTQ6tQ?e=yAO6XF",
  cover_letter_url:
    "https://1drv.ms/w/s!ApesyPfHqOIshrJ0kpwp6-yS_3BVHw?e=xOGSST",
  intro:
    "Hi, I’m Alejandro Piacquadio, a software developer with experience in web application development. I love learning new technologies and am constantly looking for new opportunities to improve my skills. I am also a chef but am currently looking for a change. I would love to work on your team and help you build something amazing.",
  note: "I am a fast learner and I am always looking for new opportunities to improve my skills.",
  code_url: "https://github.com/alepia/weminepostr",
};

axios
  .post("https://career.wemine.hk/cv-submit", data)
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });
