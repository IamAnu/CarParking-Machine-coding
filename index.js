console.log("js is running");

let hatchCount = 0 ;
let suvCount = 0;
let parkedCar = [];
let hatchpackCars = [];
let suvCars = [];

//  this function wil park the cars onClick
function parkCar(){
    const carType = document.getElementById("carType").value;
    const parkingRate = carType === "hatchback" ? 10 : 20;

      //  parking duration of 1 hour for simplicity
      const payment = parkingRate;

      if (carType === "hatchback" ) {
        hatchpackCars.push({
            carNo : hatchCount,
            time: Date.now(),
        })
        hatchCount++;
      } 
      else if (carType === "suv"){
        suvCars.push({
            carNo : suvCount,
            time: Date.now(),
        })
        suvCount++;
      }
       parkedCar.push({ carType, payment });
      updateParkingStatus();
      alert(`Car parked successfully. Payment: ${payment} rupees.`);
}

function updateParkingStatus(){
    document.getElementById("hatchbackCount").innerText = hatchCount;
    document.getElementById("suvCount").innerText = suvCount;
}

function viewAllCars(){
    if(parkedCar.length === 0){
        alert("park count is 0");
    }
    else{
        const carList = parkedCar.map(car => `Type: ${car.carType}, Payment: ${car.payment} Rs`);
        alert(` List of cars is: ${carList}` );
    }
}

function exitParking() {


    const exitCarType = document.getElementById("exitCarType").value;

    const carIndex = parkedCar.findIndex(car => car.carType === exitCarType);

    if (carIndex !== -1) {
      const payment = parkedCar[carIndex].payment;
      parkedCar.splice(carIndex, 1);

      if (exitCarType === "hatchback") {
        hatchbackCount--;
      } else {
        suvCount--;
      }

      updateParkingStatus();
      alert(`Car exited successfully. Payment: ${payment} rupees.`);
    } else {
      alert(`No ${exitCarType} cars found in the parking lot.`);
    }
}