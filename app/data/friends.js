// Creating an array of objects to hold the application's data

var friends = [
    {
        name: "Jerry",
        photo: "https://upload.wikimedia.org/wikipedia/en/2/2f/Jerry_Mouse.png",
        scores: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
    },

    {
        name: "Tom",
        photo: "https://upload.wikimedia.org/wikipedia/en/f/f6/Tom_Tom_and_Jerry.png",
        scores: [3, 2, 4, 1, 1, 3, 1, 5, 1, 1]
    },

    {
        name: "Spike",
        photo: "https://vignette.wikia.nocookie.net/tomandjerry/images/c/ca/3008242-6198655483-latest.png/revision/latest?cb=20190806175338",
        scores: [4, 5, 3, 4, 3, 1, 3, 2, 2, 1]
    },

    {
        name: "Butch",
        photo: "http://i.cdn.turner.com/v5cache/CARTOON/site/Images/i80/tj_butch_174x252.png",
        scores: [1, 1, 2, 4, 3, 2, 2, 5, 4, 1]
    },

    {
        name: "Little Quacker",
        photo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cb/Quacker_The_Duck.JPG/200px-Quacker_The_Duck.JPG",
        scores: [2, 4, 4, 5, 5, 3, 2, 5, 4, 3]
    },


];

//Making the array accessible to other files.
module.exports = friends;
