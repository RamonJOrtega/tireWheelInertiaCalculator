
const tireDiameter = document.getElementById("tireDiameter")
const tireWidth = document.getElementById("tireWidth")
const aspectRatio = document.getElementById("aspectRatio")
const calcDiameter = document.getElementById("calcDiameter")
const wheelDiameter = document.getElementById("wheelDiameter")
const tireWeight = document.getElementById("tireWeight")
const space0 = document.getElementById("space0")
const wheelWeight = document.getElementById("wheelWeight")

tireDiameter.style.display="block"
tireWidth.style.display = "none"
aspectRatio.style.display = "none"
calcDiameter.style.display="block"
space0.style.display="none"

const tireDia = document.getElementById("tireDia")
const tireWid = document.getElementById("tireWid")
const aspRat  = document.getElementById("aspRat")
const tireWt  = document.getElementById("tireWt")
const wheelDia= document.getElementById("wheelDia")
const wheelWt = document.getElementById("wheelWt")
const tireRes = document.getElementById("tireRes")
const wheelRes= document.getElementById("wheelRes") 
const totalRes= document.getElementById("totalRes")


// tireDia.value = 0
// tireWid.value = 0
// aspRat.value  = 0
// tireWt.value  = 0 
// wheelDia.value= 0
// wheelWt.value = 0
// tireRes.value = 0
// wheelRes.value= 0
// totalRes.value= 0

console.log(tireDia.value)

// tireDia.addEventListener("click", clearValue(tireDia.id))
// wheelDia.addEventListener("click", clearValue(wheelDia))
calcDiameter.addEventListener("click", diplayTireSizeElements)
space0.addEventListener("click", diplayTireSizeElements)

function clearValue(id){
  console.log(id)
  document.getElementById(`${id}`).value = 0
}

function diplayTireSizeElements() {
  if (aspectRatio.style.display === "none") {aspectRatio.style.display = "block"} 
  else {aspectRatio.style.display = "none"} 
  console.log('clicked')
  if (tireWidth.style.display === "none") {tireWidth.style.display = "block"} 
  else {tireWidth.style.display = "none"} 
  if (tireDiameter.style.display === "none") {tireDiameter.style.display = "block"} 
  else {tireDiameter.style.display = "none"} 
  if (calcDiameter.style.display === "none") {calcDiameter.style.display = "block"} 
  else {calcDiameter.style.display = "none"} 
  if (space0.style.display === "none") {space0.style.display = "block"} 
  else {space0.style.display = "none"} 
}

function calcTireDiaFromSize () {
  const sideWallHeight_in = aspRat.value * tireWid.value / 100 / (2.54 * 10)
  tireDia.value = (wheelDia.value + (2*sideWallHeight))
  console.log("tire diameter in inches is " + tireDia.value)
}


function calculateTireInertia() {
  const tireRad_m = tireDia.value * 0.0254/2;
  console.log('tire radius in meters: ' + tireRad_m)
  const tireMass_kg = tireWt.value * 0.453592;
  console.log('tire mass in kilograms: ' + tireMass_kg)
  const treadInertia = 0.75 * tireMass_kg * tireRad_m * tireRad_m
  console.log('treadInertia in kg*m^2: ' + treadInertia)
  const wheelRad_m = wheelDia.value * 0.0254 / 2
  const sidewallInertia = 0.25 * (1/2) * tireMass_kg * (tireRad_m * tireRad_m + wheelRad_m * wheelRad_m)
  console.log('sidewallInertia in kg*m^2: ' + sidewallInertia)
  tireRes.value = Math.round((treadInertia + sidewallInertia)*10)/10
  calculateTotalInertia()
}


function calculateWheelInertia() {                                                          //console.log( (wheelDia.value))
  const wheelRad_m = wheelDia.value * 0.0254 / 2                                            //  console.log('wheel radius in meters: ' + wheelRad_m)
  const wheelMass_kg = wheelWt.value * 0.453592                                             //console.log('tire mass in kilograms: ' + wheelMass_kg)
  const spokeInertia = 0.25 * (1/2) * wheelMass_kg * (wheelRad_m*wheelRad_m + 0.165 * 0.165)  //console.log("spokeInertia is " + spokeInertia)
  const hubInertia = 0.20 * (1/2) * wheelMass_kg * 0.165 * 0.165                              //console.log("hub inertia is " + hubInertia)
  const rimInertia = 0.55 * wheelMass_kg * wheelRad_m * wheelRad_m                            //console.log("RIM inertia is " + rimInertia)
  wheelRes.value = Math.round((rimInertia + spokeInertia + hubInertia)*10)/10
  calculateTotalInertia()
}


function calculateTotalInertia() {
  const totalInertia = Math.round((parseFloat(tireRes.value) + parseFloat(wheelRes.value))*10/10)
        totalRes.value = totalInertia
}
