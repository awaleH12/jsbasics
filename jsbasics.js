function evcnumber() {
  phone = document.getElementById('evc').value;
  confirmation = '';

  if (phone.length == 9) {
      if (phone.charAt(0) == '6') {
          if (phone.charAt(1) == '1' || phone.charAt(1) == '8') {
              confirmation = "Correct Phone Number";
          } else {
              confirmation = "Wrong Phone Number";
          }
      } else {
          confirmation = "Wrong Phone Number";
      }
  } else {
      confirmation = "Wrong Phone Number";
  }

  document.getElementById('confirmation').value = confirmation;
}