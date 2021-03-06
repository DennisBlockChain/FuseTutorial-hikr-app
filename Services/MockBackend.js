const hikes = [
    {
      id: 0,
      name: "Tricky Trails",
      location: "Lakebed, Utah",
      distance: 10.4,
      rating: 4,
      comments: "This hike was nice and hike-like. Glad i didn't bring a bike."
    },
    {
      id: 1,
      name: "Mondo Mountains",
      location: "Black Hills, South Dakota",
      distance: 20.86,
      rating: 3,
      comments: "Not the best, but would probably do again. Note to self: don't forget the sandwiches next time."
    },
    {
      id: 2,
      name: "Pesky Peaks",
      location: "Bergenhagen, Norway",
      distance: 8.2,
      rating: 5,
      comments: "Short but SO sweet!!"
    },
     {
      id: 3,
      name: "Rad Rivers",
      location: "Moriyama, Japan",
      distance: 12.3,
      rating: 4,
      comments: "Took my time with this one. Great view!"
    },
    {
      id: 4,
      name: "Dangerous Dirt",
      location: "Cactus, Arizona",
      distance: 19.34,
      rating: 2,
      comments: "Too long, too hot. Also that snakebite wasn't very fun"
    }
  ];

  export default class MockBackend{
    getHikes(){
      return new Promise((resolve, reject) => {
        resolve(hikes);
      });
    }


    updateHike(id, name, location, distance, rating, comments){
      return new Promise ((resolve, reject) => {
        hikes.filter(hike => {
          return hike.id === id
        }).forEach(hike => {
          hike.name = name;
          hike.location = location;
          hike.distance = distance;
          hike.rating = rating;
          hike.comments = comments;
        });
        resolve();
      });
    }
  }
