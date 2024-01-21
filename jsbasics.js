// task


// option selector
const districtCity = {
    hodan: 'Banaadir',
    waberi: 'Banaadir',
    wardhigley: 'Banaadir',
    dayniile: 'Banaadir',
    wadajir: 'Banaadir',
    xamarwayne: 'Banaadir',
    kismayo: 'jubada hoose',
    galcayo: 'mudug'
    
};

// calculate age
function getAge() {
    bDate = document.getElementById('bDate').value;

    age = 2024 -  bDate;

    document.getElementById('age').value = age;
}


function populateDistricts() {
    const districtSelect = document.getElementById('district');
    const cityInput = document.getElementById('city');
    const selectedDistrict = districtSelect.options[districtSelect.selectedIndex].value;

    // Get the corresponding city for the selected district
    const city = districtCity[selectedDistrict];

    // Set the city in the input field
    cityInput.value = city;
}
// calculate grade
function calculateGrade() {
    marks = document.getElementById('marks').value;
    grade = '';
    if (marks >= 90) {
        grade = 'A';
    } else if (marks >= 80) {
        grade = 'B';
    } else if (marks >= 70) {
        grade = 'C';
    } else if (marks >= 60) {
        grade = 'D';
    } else {
        grade = 'F';
    }
    document.getElementById('grade').value = grade;
}
// Mobile menu function
document.addEventListener('DOMContentLoaded', function() {
    var options = {

    }
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, options);
  });

//   floating
document.addEventListener('DOMContentLoaded', function() {
    var options = {

    }
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, options);
  });

//   swelect form

document.addEventListener('DOMContentLoaded', function() {
    var options = {

    }
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, options);
  });

//   datepicker
// document.addEventListener('DOMContentLoaded', function() {
//     var options = {

//     }
//     var elems = document.querySelectorAll('.datepicker');
//     var instances = M.Datepicker.init(elems, options);
//   });

