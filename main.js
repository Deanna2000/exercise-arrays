
// The array of objects we are going to evalute
const students = [
    {
      name: "Cashew",
      gender: "F"
    },
    {
      name: "Rachael",
      gender: "F"
    },
    {
      name: "Joshua",
      gender: "M"
    },
    {
      name: "Daniel",
      gender: "M"
    },
    {
      name: "Jacob",
      gender: "M"
    },
    {
      name: "Paul",
      gender: "M"
    },
    {
      name: "Meghan",
      gender: "F"
    },
    {
      name: "Hayley",
      gender: "F"
    },
    {
      name: "Deanna",
      gender: "F"
    },
    {
      name: "Kyle",
      gender: "M"
    }
  ]

  let listEl = document.getElementById("females")   // Target the location

  for(i=0; i<students.length; i++) {
    if(students[i].gender === "F"){           // Evalute the current object with a property of gender
        let liElement = document.createElement("li")    // Create the li element
        let textNode = document.createTextNode(students[i].name)   // Create text snippet we are going to use
        liElement.appendChild(textNode)    // Add the text snippet to the li element
        listEl.appendChild(liElement)    // Add the li element+text to the html document location (ul in this case)
    }
  }