var height = document.getElementById('height');
var weight = document.getElementById('weight');
var cal = document.getElementById('cal');

  function caculate(height,weight) {
    if (height < 0 || weight < 0 || isNaN(height) || isNaN(weight)) {
        alert('No caculate');
    } else {
        height = height / 100;
        let BMI = bmi = weight / (height ^ 2);
        return BMI;
    }
  }
  cal.onclick =function result() {
      var height = height1.value;
      var weight = weight1.value;
      var BMI = caculate(height, weight);
      if (BMI < 18) {
          document.write("Underweight");
      } else if (bmi < 25.0) {
          document.write("Normal");
      } else if (bmi < 30.0) {
          document.write("Overweight");
      } else {
          document.write("Obese");
      }
  }

