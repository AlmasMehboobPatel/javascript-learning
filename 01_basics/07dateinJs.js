const myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())
// console.log(typeof myDate)

const myCreatedDate = new Date(2024,0,24,5,3)
// console.log(myCreatedDate.toDateString())
// console.log(myCreatedDate.toLocaleString())

const reCreatedDate = new Date("2024-03-07")
// console.log(reCreatedDate.toLocaleString())


let myTimeStamp = Date.now()
// console.log(myTimeStamp)

// console.log(reCreatedDate.getTime())

let newDate = new Date()
// console.log(newDate.getHours())
// console.log(newDate.getDate())
// console.log(newDate.getFullYear())
// console.log(newDate.getDay())

newDate.toLocaleString('default',{
    weekday: "long"
})

