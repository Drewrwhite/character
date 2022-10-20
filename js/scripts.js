function hideResults() {
  document.getElementById("orcImage").setAttribute("class", "hidden");
  document.getElementById("elfImage").setAttribute("class", "hidden");
  document.getElementById("dwarfImage").setAttribute("class", "hidden");
  document.getElementById("mortalImage").setAttribute("class", "hidden");
}


window.addEventListener("load", function () {

  const form = document.querySelector("form");
  const summary = document.getElementById("summary");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    hideResults();
    const characterName = document.querySelector("input#characterName").value;
    const dob = document.querySelector("input#born").value;
    const radioButton = document.querySelector("input[name='charType']:checked").value;
    const classType = document.getElementById("classType").value;
    const hairColor = document.getElementById("color").value;
    document.querySelector("span#resultName").innerText = characterName;
    document.querySelector("span#resultDob").innerText = dob;
    document.getElementById("resultCharType").innerText = radioButton;
    document.querySelector("span#resultClassType").innerText = classType;
    document.querySelector("span#resultColor").innerText = hairColor;
    summary.removeAttribute("class");

    if (radioButton === "orc") {
      document.getElementById("orcImage").removeAttribute("class");
    } else if (radioButton === "elf") {
      document.getElementById("elfImage").removeAttribute("class");
    } else if (radioButton === "dwarf") {
      document.getElementById("dwarfImage").removeAttribute("class");
    } else if (radioButton === "mortal") {
      document.getElementById("mortalImage").removeAttribute("class");
    }


  }
  )

})