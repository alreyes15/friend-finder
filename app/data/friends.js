// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friends = [
    {
      name: "Kevin Hart",
      photo: "https://images.fatherly.com/wp-content/uploads/2018/05/hart_johnson_header.jpg?q=65&enable=upscale&w=1200",
      scores: [
      "5",
      "1",
      "4",
      "3",
      "1",
      "5",
      "1",
      "4",
      "3",
      "1",],
    },
    {
      "name":"Ahmed",
      "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
      "scores":[
          5,
          1,
          4,
          4,
          5,
          1,
          2,
          5,
          4,
          1
        ]
    },

  ];
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = friends;