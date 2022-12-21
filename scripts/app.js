//gpa formula =  -4 / number of items * score + 5
// gpa => 1 - 3 text color green
// gpa => 3 - 5 text color red

const calcGpa = (numOfItems, score) => {
  return (-4 / numOfItems) * score + 5;
};

const processForm = () => {
  // Calculate the GPA
  const noItems = Number(document.getElementById("noItems").value);
  const score = Number(document.getElementById("score").value);
  const gpa = calcGpa(noItems, score);

  // Set the GPA element
  const scoreGpa = document.getElementById("scoreGpa");
  const color = gpa > 3 ? "red" : "green";
  scoreGpa.value = gpa;
  scoreGpa.style.color = color;

  // Set the remarks
  const remarks = document.getElementsByClassName("remarks__text");
  for (const rem of remarks) {
    rem.innerHTML = color == "green" ? "Passed" : "Failed";
    rem.style.color = color;
  }

  // Return false to prevent the page from reloading
  return false;
};
