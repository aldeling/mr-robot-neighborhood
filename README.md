# Mr-Rogers-Neighborhood
### Contributors
Athea DeLing
### Description
This web application takes a users inputted number once entered it return a statement. Starting from zero and any number containing one, two, or three will be changed to a phrase. The statement will go all the way to the number that the user inputted.
### Technologies Used
HTML
CSS
Javascript
### Setup Instructions
There are a couple ways you can choose to setup this web application you can,

Open the repository Mr-Robots-Neighborhood once opened you can fork and clone it to your personal computer.
Once you open the file click on index.html to then open on your default browser.
Another option is to go to the [GitHub](will replace) pages link and open the web application there
### Known Bugs
There are no known bugs
### Tests
Describe: correctInput()
 
Test: It should return an error message when nothing is inputted
Code:
const number = ""
correctInput(number)
Expected Output: this is not a valid input

Test: It should return and error message when a letter is inputted
Code:
const number = "a"
correctInput(number)
Expected Output: this is not a valid input

Test: It should return inputted number when number is inputted
Code:
const number = "1"
correctInput(number)
Expected Output: "1"

Describe: numberArray()

Test: It should return an array from 0 to the number 4
Code:
const number = "4"
numberArray(number)
Expected Output: [0, 1, 2, 3, 4]

Test: It should return reach number in the array as a string
Code:
const number = "4"
numberArray(number)
Expected Output: ["0", "1", "2", "3", "4"]

Describe: changeNumber()

Test: It should return Beep! when there is a one present in the string
Code:
const number = "1"
changeNumber(number)
Expected Output: "Beep!"

Test: It should return Boop! when there is a two present in the string
Code:
const number = "2"
changeNumber(number)
Expected Output: "Boop!"

Test: It should return Won't you be my neighbor! when there is a three present in the string
Code:
const number = "3"
changeNumber(number)
Expected Output: "Won't you be my neighbor!"

Test: It should return a number if it does not contain a one, two, or three
Code:
const number = "4"
changeNumber(number)
Expected Output: "4"

Test:
Code:
Expected Output:
### License
[GNU](https://choosealicense.com/licenses/gpl-3.0/) Copyright (c) 09/09/2022 Athea DeLing