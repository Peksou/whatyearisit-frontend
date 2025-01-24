console.log("Script OK")

fetch('http://localhost:3000/years', { })
    .then(response => response.json())
    .then(data => {
      console.log(data);
    //   (document.querySelector("#year").textContent = ${req.data.year})
    })
;