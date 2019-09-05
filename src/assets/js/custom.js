function validate() {
    var textBoxValue = document.getElementById('emailphone').value;
    var emailPattern = /^[a-z][a-zA-Z0-9_]*(\.[a-zA-Z][a-zA-Z0-9_]*)?@[a-z][a-zA-Z-0-9]*\.[a-z]+(\.[a-z]+)?$/; 
    if(textBoxValue == '') {
      alert('Please enter value');
      return false;
    } else if(isNaN(textBoxValue)) {
      if(!(textBoxValue.match(emailPattern))) {
        alert('Please enter valid email');
        return false;
      }
    } else {
      if(textBoxValue.length != 10) {
        alert('Please enter valid phno');
        return false;
      }
    }
  }
  function validat(){
    var name = document.getElementById('name').value;
    if(name.match(/^[a-zA-Z_ ]*$/))
         {
             //Your logice will be here.
            //  alert("It's valid");
         }
         else{
             alert("Please enter only alphabets");
         }
    }
    function submit()
    {
        alert("suceess");
    }