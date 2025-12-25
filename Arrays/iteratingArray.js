const favFruits = ["Apple","Orange","Banana"]

// For of

for(let fruit of favFruits){
    console.log(fruit)
}

//For in

for(let fruit in favFruits){
    console.log(favFruits[fruit])
}

//For Each
favFruits.forEach((fruit, index)=>{
    console.log(index, fruit)
})