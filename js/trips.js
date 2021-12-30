let trips = [
    {   
        id: 1,
        user: "https://placebeard.it/100x100",
        name: "John",
        location: "Benin",
        destination: "Warri",
        price: 'N5000',
        time: 'Tuesday, December 28 at 6:00am',
        number: "0543236543",
        load: "yes",
        car: ["Toyota", "Sienna", "2010", "Red", 'seats available 3'],
        pickup: "Maingate",
        dropoff: "Osubi",
      },
      {
        id: 2,
        user: "https://placebeard.it/100x100",
        name: "Peter",
        location: "Benin",
        destination: "Asaba",
        price: 'N5000',
        time: 'Thursday, Janauary at 7:00am',
        number: "0543236543",
        load: "yes",
        car: ["Toyota", "Corolla", "2007", "Blue", 'seats available 2'],
        pickup: "Ringroad",
        dropoff: "Mongo park house",
      },
      {
        id: 3,
        user: "https://placebeard.it/100x100",
        name: "Fred",
        location: "Benin",
        destination: "Lagos",
        price: 'N45,000',
        time: 'Tuesday, December 28 at 6:00am',
        number: "0543236543",
        load: "yes",
        car: ["Benz", "E-class", "2010", "Silver", 'seats available 3'],
        pickup: "Oluku park",
        dropoff: "Ikeja",
      },
      {
        id: 4,
        user: "https://placebeard.it/100x100",
        name: "Lucky",
        location: "Benin",
        destination: "Auchi",
        price: 'N3,000',
        time: 'Monday, December 30 at 10:00am',
        number: "0543236543",
        load: "No",
        car: ["Toyota", "Sienna", "2007", "White", 'seats available 3'],
        pickup: "Maingate",
        dropoff: "Ososo tourist center",
      },
      {
        id: 5,
        user: "https://placebeard.it/100x100",
        name: "Osaro",
        location: "Warri",
        destination: "Benin",
        price: 'N5000',
        time: 'Tuesday, December 28 at 6:00am',
        number: "0543236543",
        load: "yes",
        car: ["Toyota", "Sienna", "2010", "Red", 'seats available 3'],
        pickup: "Delta shopping mall",
        dropoff: "Ring road",
      },
      {
        id: 6,
        user: "https://placebeard.it/100x100",
        name: "Kelly",
        location: "Benin",
        destination: "Agbor",
        price: 'N5000',
        time: 'Tuesday, December 28 at 6:00am',
        number: "0543236543",
        load: "yes",
        car: ["Toyota", "Sienna", "2010", "Red", 'seats available 3'],
        pickup: "Maingate",
        dropoff: "Mindcast hotel",
      },
      {
        id: 7,
        user: "https://placebeard.it/100x100",
        name: "Edobor",
        location: "Lagos",
        destination: "Benin",
        price: 'N5000',
        time: 'Tuesday, December 28 at 6:00am',
        number: "0543236543",
        load: "yes",
        car: ["Toyota", "Sienna", "2010", "Red", 'seats available 4'],
        pickup: "Epe",
        dropoff: "Uselu market",
      },
      {
        id: 8,
        user: "https://placebeard.it/100x100",
        name: "Olu",
        location: "Benin",
        destination: "Lagos",
        price: 'N50,000',
        time: 'Monday, December 30 at 5:00am',
        number: "0543236543",
        load: "yes",
        car: ["Toyota", "Camry", "2010", "Black", 'seats available 1'],
        pickup: "Oluku park",
        dropoff: "Epe",
      },
      {
        id: 9,
        user: "https://placebeard.it/100x100",
        name: "Cali",
        location: "Benin",
        destination: "Warri",
        price: 'N45,000',
        time: 'Tuesday, December 28 at 6:00am',
        number: "0543236543",
        load: "yes",
        car: ["Benz", "C-class", "2014", "Brown", 'seats available 2'],
        pickup: "Oluku park",
        dropoff: "Warri park",
      },
      {
        id: 10,
        user: "https://placebeard.it/100x100",
        name: "Jones",
        location: "Benin",
        destination: "Ekpoma",
        price: 'N6,000',
        time: 'Wednesday, December 29 at 6:00am',
        number: "0543236543",
        load: "yes",
        car: ["Nissan", "Elantra", "2010", "Silver", 'seats available 2'],
        pickup: "Oluku park",
        dropoff: "AAU",
      },
]

function lookUp(from, to) {

     let arr = []
    // Only change code below this line
   
   for(let i = 0; i < trips.length; i++){
     if(trips[i].location === from & trips[i].destination === to) {

        // from = document.getElementById('myInput').value;
        // to = document.getElementById('myInput1').value;

     arr.push( `<div class="container">    
    <div class="row">
        <div class="col-sm-12">
        <div class="panel panel-primary">
            <div class="panel-heading">...</div>
            <div class="panel-body">
            
          
                <div class="col-sm-3">
                    <img src=${trips[i].user} class="img-responsive img-circle"  alt="Image">
                    <p class="p-4">${trips[i].name}</p>   
                </div>
                <div class="col-sm-6">
                    <div class="d-flex flex-column destination-info">
                        <div class="p-4 d-flex" style="display: flex;">
                        <p class="p-4">${trips[i].location}</p> to <p class="p-4">${trips[i].destination}</p>    
                        </div>
                        <div class="p-4 destination-info" style="display: flex;">
                            <p class="p-4">Leaving: ${trips[i].time}</p>
                        </div>
                        <div class="p-2 destination-info" style="display: flex;">
                            <p class="p-4">Pickup: ${trips[i].pickup}</p>
                        </div>
                        <div class="p-2 destination-info" style="display: flex;">
                            <p class="p-4">Dropoff: ${trips[i].dropoff}</p>
                        </div>
                      </div>
                </div>
                <div class="col-sm-3">
                    <img src="https://www.testingautos.com/reviews/photos/Toyota-Sienna-2007.jpg" class="img-responsive img-rounded"  alt="Image">
                    <div class="p-2 destination-info" style="display: flex;">
                        <p class="p-4">Car Details: ${trips[i].car}</p>
                        <p class="p-4">Price: ${trips[i].price}</p>
                    </div>
                </div>
            
              
        </div>
        <div class="panel-footer"><a href="details.html">Book trip</a></div>
      </div>
    </div>`)
    
        
     }
        // return false;
    }
      return arr;
    
  }
  
//    lookUp("", "");

//   document.getElementById("trip").innerHTML = trip;