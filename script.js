// Create an array named list to store our to-do activities
var listOfActivities = [];

// Create a DOM variable  named input to get the to-do activities added from HTML form
var input = document.getElementById("input");

//Create a DOM variable todolist ul tag (unordered list)
var todolist = document.getElementById("todolist");

//Using onlclick to run the click function when button is clicked.
document.getElementById("button").onclick = click;

function click() {
  listOfActivities.push(input.value);
  console.log(listOfActivities);
  input.value = "";
  showList();
}

function showList() {
   todolist.innerHTML = " ";

  listOfActivities.forEach(function (n, i) {
    todolist.innerHTML +=
      "<li>" +
      n +
      "<a onclick='editItem(" +
      i +
      ")'>Edit</a>" +
      "<a onclick='deleteItem(" +
      i +
      ")'>&times | </a></li>";
  });
}

//Deleting an activity
function deleteItem(i) {
  // Using splice array operations to remove one item at specified index
  listOfActivities.splice(i, 1);
  // Display the todo list
  showList();
}

//Editing an activity
function editItem(i) {
  //Using prompt to get the new value of the activty after editing
  var newValue = prompt("Please insert your new value");
  // Using splice array operation to remove the previous activity and add the new activity
  listOfActivities.splice(i, 1, newValue);
  //Display the list
  showList();
}