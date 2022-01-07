const { Console } = require('console');
const Bag = require('./Bag');


class Traveller{


    //properties
    name;
    bags = [];

    //contructor
    constructor(name){
    this.name = name;
    this.bags=[];
    }

    addBags(Bag){
        this.bags.push(Bag);
    


    }
}
const uche = new Traveller("uche")
const ucheHoldBag = new Bag(12)
const mandy = new Traveller("mandy")
const mandyHoldBag = new Bag(22)
uche.addBags(ucheHoldBag)
mandy.addBags(mandyHoldBag)
console.log(uche.bags) 
console.log(mandy.bags)
console.log(uche)
console.log(mandy)

module.exports = Traveller




