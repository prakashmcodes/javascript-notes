const favFruits = ["Apple","Orange","Banana"]

let fruitsJoin = favFruits.join(", ")

console.log(fruitsJoin);


let cricketer = "Virat Kohli"

let cname = cricketer.split(" ")

let firstName = cname[0]
let lastName = cname[1]

console.log(`Top Odi cricketer is ${firstName} ${lastName}`);


let countryName = "My Country is India".toLocaleLowerCase()

let countrySlug = countryName.split(" ")
let lastSlug = countrySlug.join("_")

console.log(lastSlug);
