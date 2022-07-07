/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const convertBtn = document.getElementById("conv")
const entry = document.getElementById("entry")

let units = [
    {
        name: "meter",
        convertTo: "feet",
        initialValue: entry,
        convertedValue: 3.281
    },
    
    {
        name: "liter",
        convertTo: "gallon",
        initialValue: entry,
        convertedValue: 0.264
    },
    
    {
        name: "kilo",
        convertTo: "pound",
        initialValue: entry,
        convertedValue: 2.204
    }
]
const descEl = document.getElementById("desc-el")
const meterEl = document.getElementById("meter-el")
const literEl = document.getElementById("liter-el")
const kiloEl = document.getElementById("kilo-el")


convertBtn.addEventListener("click", function() {
    
    clear()
    
    let input = localStorage.setItem("initialValue", entry.value)
    input = JSON.parse( localStorage.getItem("initialValue") )
    
    let meter = input * 3.281
    let feet =  input * 0.3048
    
    let liter = input * 0.264
    let gallon = input * 3.785
    
    let kilogram = input * 2.204
    let pound = input * 0.45359
        
    meterEl.innerHTML += `${input} meters = ${meter.toFixed(3)} feet | ${input} feet = ${feet.toFixed(3)} meters`
    
    literEl.innerHTML += `${input} liters = ${liter.toFixed(3)} gallons | ${input} gallons = ${gallon.toFixed(3)} liters`
    
    kiloEl.innerHTML += `${input} kilos = ${kilogram.toFixed(3)} pounds | ${input} pounds = ${pound.toFixed(3)} kilos`
    console.log(input)
})

function clear(){
    meterEl.innerHTML = ""
    literEl.innerHTML = ""
    kiloEl.innerHTML = ""
}


