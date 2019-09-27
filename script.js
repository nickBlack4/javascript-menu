document.getElementById("parent-list").addEventListener("click", function(e) {
     if (e.target && e.target.nodeName == "LI") {
         // console.log(e.target.innerHTML + " was clicked");
         // call function respective to element clicked
         let clickedName = e.target.innerHTML;
         console.log(clickedName);
         if (allowedFunctions[clickedName]) {
             // clear page then add new html
             eraseText();
             allowedFunctions[clickedName]();
         }
     }
 });

const allowedFunctions = {
  cat: function() {

      const myElem = document.createElement("div");
      let myString = `<div>Meow, Meow, Meow</div>`;

      myElem.innerHTML = myString;

      // put on page
      document.getElementById("myDiv").append(myElem);

  },
  dog: function() {
      const myElem = document.createElement("div");
      let myString = `<div>Ruff, Ruff, Ruff</div>`;

      myElem.innerHTML = myString;

      // put on page
      document.getElementById("myDiv").append(myElem);
  }
};

 function eraseText() {
    document.getElementById("myDiv").innerHTML = "";
 }

