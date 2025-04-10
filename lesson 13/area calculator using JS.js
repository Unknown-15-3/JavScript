var a = prompt("Welcome to area calculator.\n please enter your choice. \n 1. area of rectangle. \n 2. area of triangle. \n 3. area of circle. \n 4. area of parralogram")

if (a=="1"){
    var l= prompt("enter the length")
    var b= prompt("enter the breadth")
    var result= Number(l)*Number(b)
    alert("the area of rectangle is "+ result)
}
if (a == "2") {
    var h = prompt("enter the height")
    var b = prompt("enter the base")
    var result = Number(h) * Number(b)/2
    alert("the area of triangle is "+ result)
}
if (a == "3") {
    var r = prompt("enter the radius")
    var result = 3.14*Number(r) * Number(r)
    alert("the area of circle is "+ result)
}
if (a == "4") {
    var h = prompt("enter the height")
    var b = prompt("enter the base")
    var result = Number(h) * Number(b)
    alert("the area of paralellogram is "+ result)
}