//Event Listener
document.getElementById("mad-lib-btn").addEventListener("click", buildMadLib);

//Event Function
function buildMadLib() {
  //input
  let pluralNoun = document.getElementById("plural-noun").value;
  let adjective = document.getElementById("adjective").value;
  let verb = document.getElementById("verb").value;
  let noun = document.getElementById("noun").value;
  let noun2 = document.getElementById("noun2").value;
  let adjective2 = document.getElementById("adjective2").value;

  //process
  let result = `"There are too many ${pluralNoun} on this ${adjective} airplane!" ,
I screamed. "Somebody has to ${verb} on the ${noun} to solve this problem." , "The ${adjective2} security guards should get ${noun2} for this!"`;

  //output
  document.getElementById("result").innerHTML = result;

  document.getElementById("html").style.backgroundImage =
    "url(images/plane.jpg)";

  document.getElementById("result").style.fontFamily =
    "Arial, Helvetica, Sans-serif";

  document.getElementById("result").style.border = "2px solid orange";

  document.getElementById("result").style.height = "100px";

  document.getElementById("result").style.fontSize = "20px";
}

//Event Listener
document
  .getElementById("mad-lib-btn2")
  .addEventListener("click", buildMadLibTwo);

//Event Function
function buildMadLibTwo() {
  //input
  let pluralNoun = document.getElementById("plural-noun").value;
  let adjective = document.getElementById("adjective").value;
  let verb = document.getElementById("verb").value;
  let noun = document.getElementById("noun").value;

  //process
  let result = `" I Think you guys think all these ${pluralNoun} make this ${adjective} airplane 
dangerous because we just ${verb} and mess around with a ${noun}"`;

  //output
  document.getElementById("result").innerHTML = result;
}

document
  .getElementById("mad-lib-btn2")
  .addEventListener("click", changeMadImage);

function changeMadImage() {
  document.getElementById("html").style.backgroundImage =
    "url(images/download.jpg)";

  document.getElementById("result").style.fontFamily = "cursive";

  document.getElementById("result").style.border = "5px solid green";

  document.getElementById("result").style.height = "600px";

  document.getElementById("result").style.fontSize = "50px";
}
