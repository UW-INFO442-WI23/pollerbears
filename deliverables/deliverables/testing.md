# Testing Protocol

This document outlines testing protocol for Polar, including known bugs and workarounds. The features we have outlined testing protocol for are voting for each bill, commenting, filtering, app navigation, Profile, and About page.

## Voting
* If user is not signed in, clicking the voting buttons should result in no changes.
* If user is signed in, clicking either yes or no should result in a +1 increase in the voting for each side.
* If user clicks the opposing vote, their previous vote will be subtracted, and their new vote will be added to the right side.
* Poll should show two sides of a visualizing line for the total votes: green for yes on the left side, and red for no on the right.

## Commenting
* __Known bug:__ If a user is not signed in and tries to submit a comment, the website will "break". We have not accomodated for this case yet, and wanted to make sure only signed in users could comment. As a workaround, please sign in with a Google account to comment.
* If a signed in user comments, their profile photo and name will show in front of their comment, and their comment will be submitted to the comment section below.

## Filtering
* If a user clicks on certain filters, the list of bills will react accordingly to the filter. 
* __Known bug:__ Not every filter will result in a change, as there are only five bills in the database so far, however we wanted to make sure the filters were there and ready to be implemented for future bills that they could apply to. As a workaround, please click the "Favorites" filter to see how the filtering would work.

## App Navigation
* The "Home" button at the top right should redirect to the home page.
* The "About" button at the top right should redirect to the about page.
* __Known bug__: The "Home" button on the individual bill page does not redirect to the home page list of bills. That's because on the bill page, there is an arrow above the bill summary that brings the user back to the bill page. As a workaround, please use the arrow to navigate back to the home page from the bill page.

## Profile
* The top left button that says "Sign In with Google" should prompt the user to log in with their Google Account through a pop up window.
* After a user has successfully logged in, their profile photo will appear in the top left (same as their Google image).
* After a user successfully logged in, a "Profile" navigation button will appear in the top left, which will be populated with the Google profile information.
* If a user clicks sign out, they will revert back to how the page looked before they signed in.

## About page
* Clicking the embedded video element should lead to the video playing in the About Page screen.
