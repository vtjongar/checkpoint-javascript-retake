// NOTE: Make sure to use the `var` keyword for ALL variable declarations.

// #1: Create an array of strings called `colors` that contains three colors.
// Type your solution immediately below this line:

var colors = ["green", "gray", "yellow"]


// #2: Access the last item in the array and assign to a variable called `lastColor`.
// Type your solution immediately below this line:

var lastColor = ''
colors[2] = lastColor
console.log(colors)


// #3: Create an empty array called `favoriteColors`.
// Type your solution immediately below this line:

favoriteColors = []

// #4: Create a `for` loop that adds each string in `colors` to `favoriteColors`.
// Type your solution immediately below this line:

for (var i = 0; i < colors.length; i++) {
    favoriteColors.push(colors[i])
}

// #5: Create an object literal called `student` that contains three key-value pairs.
// Type your solution immediately below this line:

var student = {firstName: "Vanessa", lastName: "Henderson", age: 21}


// #6: Add a `attends-office-hours` (spelled exactly) property to `student` by accessing
// it (do not change the original object you typed above) and assigning it
// a boolean value.
// Type your solution immediately below this line:

student['attends-office-hours'] = true;