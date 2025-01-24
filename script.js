console.log("test ok")

fetch('http://localhost:3000/year')
    .then(response => response.json())
    .then(data => {
    //   console.log(data);
      document.querySelector("#year").textContent = data.year;
    })
;

fetch('https://whatyearisit-backend-plum-zeta.vercel.app/year')
    .then(response => response.json())
    .then(data => {
    //   console.log(data);
      document.querySelector("#year").textContent = data.year;
    })
;
