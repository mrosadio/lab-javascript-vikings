/********************************/
/***********  Soldier ***********/
/********************************/

class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength;
    }
    receiveDamage(damage) {
        this.health = this.health - damage;
    }
}


/********************************/
/***********  Viking ************/
/********************************/

class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    receiveDamage(damage) {
        this.health = this.health - damage;
        if (this.health > 0) return `${this.name} has received ${damage} points of damage`;
        else return `${this.name} has died in act of combat`;
    }
    battleCry() {
        return "Odin Owns You All!";
    }

}


/********************************/
/***********  Saxon *************/
/********************************/

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength);
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength;
    }
    receiveDamage(damage) {
        this.health = this.health - damage;
        if (this.health > 0) return `A Saxon has received ${damage} points of damage`;
        else return `A Saxon has died in combat`;
    }
}


/********************************/
/************  War **************/
/********************************/

class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
        this.saxonArmyNoDeads = this.saxonArmy.filter(saxon => saxon.health > 0);
    }
    addViking(viking) {
        this.vikingArmy.push(viking);
    }
    addSaxon(saxon) {
        this.saxonArmy.push(saxon); 
    }
    /*receiveDamage(damage) {
        this.health = this.health - damage;
    }
    */
    vikingAttack() {
        let randomSaxon = this.saxonArmy[Math.floor((Math.random() * this.saxonArmy.length))];
        let randomViking = this.vikingArmy[Math.floor((Math.random() * this.vikingArmy.length))];
        randomSaxon.receiveDamage(randomViking.strength);

        //remove dead saxons from army
        let saxonArmyNoDeads = this.saxonArmy.filter(saxon => saxon.health > 0);
         //
         return  
    }

    /* 1. declare receivedamage */
   saxonAttack() {
        randomSaxon.receiveDamage(Viking.strength);
    }

}
