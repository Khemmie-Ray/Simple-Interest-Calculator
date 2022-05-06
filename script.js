
function compute() {
    let principal = document.getElementById("principal").value;
    let rate = document.getElementById("rate").value;
    let years = document.getElementById("years").value;
  
    if(principal == ""|| years == "") {
      alert("fill the input field");
      displayResult.innerHTML = "";
    }
  
    let interest = principal * years * rate / 100;
    let displayResult = document.getElementById("result");
  
    let currentDate = new Date();
    let currentYear = parseInt(currentDate.getFullYear()) + parseInt(years);
  
    displayResult.innerHTML = `
      If you deposit <strong>${principal}</strong> <br> at an interest rate of <strong> ${rate}%</strong><br>You will receive an amount of <strong> ${interest}</strong><br> in the year <strong>${currentYear}</strong>`  
  }
  
  function SliderValue() {
      let rSlider = document.getElementById("rate");
      let output = document.getElementById("displayVal");
      output.innerHTML = rSlider.value;
  
      rSlider.oninput = () => {
          output.innerHTML = this.value;
      }
  }
          
   