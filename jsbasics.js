function evcnumber() {
  phone = document.getElementById('evc').value;
  validation = '';

  if (phone.length == 9) {
      if (phone.charAt(0) == '6') {
          if (phone.charAt(1) == '1' || phone.charAt(1) == '8') {
              validation = "Correct Phone Number";
          } else {
              validation = "Wrong Phone Number";
          }
      } else {
          validation = "Wrong Phone Number";
      }
  } else {
      validation = "Wrong Phone Number";
  }

  document.getElementById('validation').value = validation;
}