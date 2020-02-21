Deployed link: https://murmuring-wildwood-53524.herokuapp.com/

# FriendFinder

Compatibility-based "FriendFinder" application -- basically a dating app. The application takes in results from your users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match.

The survey has 10 questions, and each answer is on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.

The `server.js` file requires the basic npm packages: `express` and `path`.

The `htmlRoutes.js` file includes two routes:

- A GET Route to `/survey` which should display the survey page.
- A default, catch-all route that leads to `home.html` which displays the home page.

The `apiRoutes.js` file contains two routes:

- A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
- A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

The application's data will be saved inside of `app/data/friends.js` as an array of objects. Each of these objects follow the format below.

```json
{
  "name": "Ahmed",
  "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  "scores": [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
}
```

To determine the user's most compatible friend I used the following as a guide:

- Convert each user's results into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`).
- With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the `totalDifference`.
  - Example:
    - User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
    - User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`
    - Total Difference: **2 + 1 + 2 =** **_5_**
- Used the absolute value of the differences, so we don't deal with negative values.
- The closest match will be the user with the least amount of difference.

  Once the current user's most compatible friend is found, the result will be displayed as a modal pop-up.

- The modal displays both the name and picture of the closest match.
