# _BeepBoop_

#### _A web application that takes a number from a user and returns a range of numbers from 0 to the chosen number with the following exceptions:_

* _Numbers that contain a 1 are replaced with "Boop!"_
* _Numbers that contain a 0 are replaced with "Beep!"_
* _Numbers divisible by 3 are replaced with "I'm sorry, Dave. I'm afraid I can't do that."_

#### _12/8/17_

#### By _**Ross Fletcher**_

## Specifications

| Behavior  | Input  | Output  |
|---|---|---|
|  A user can enter a number and BeepBoop (hereafter called "BB") will return said number | 3  | 3  | X |
|  A user can enter a number and "BB" will count up to the provider number in an output list | 3  | 1, 2, 3 | X |
|  A user can enter a new number and see new results over and over again | 1st entry: 3 \ 2nd entry: 4  | 1st output: 1, 2, 3 \ 2nd output: 1, 2, 3, 4  ||
|  BB will replace numbers that contain a 1 with "Boop!" | 3 | Boop!, 2, 3  | X |
|  BB will replace numbers that contain a 0 with "Beep!" | 15 | Boop, 2, 3, 4, 5, 6, 7, 8, 9, Beep!, 11, 12, 13, 14, 15  | X |
|  BB will replace numbers that are divisible by 3 with "I'm sorry, Dave. I'm afraid I can't do that." | 9  | Boop, 2, "I'm sorry, Dave. I'm afraid I can't do that.", 4, 5, "I'm sorry, Dave. I'm afraid I can't do that.", 7, 8, "I'm sorry, Dave. I'm afraid I can't do that."  | X |


## Setup/Installation Requirements

### _Check out the page here: [BeepBoop](https://rossfletcher19.github.io/beepBoop "beepBoop")_

* _Download or clone repository_
* _open index.html in root folder to view final product_
* _Open in Atom or similar text editor to view or edit code_


## Known Bugs

_None Known_

## Support and contact details

_Contact Ross Fletcher with any questions or concerns whatsoever._

## Technologies Used

_HTML, CSS/Bootstrap, Javascript/JQuery, ATOM, GIT_

### License

*MIT License*

Copyright (c) 2017 **_Ross Fletcher_**
