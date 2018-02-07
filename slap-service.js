//Service is responsible for all data and data manipulation
function SlapService() {
    //private
    function Target(name, health, slap, punch, kick, img) {
        this.name = name
        this.health = health
        this.maxHealth = health
        this.attacks = {
            slap: slap,
            punch: punch,
            kick: kick
        }
        this.hits = 0
        this.img = img
        this.items = []
    }


    var dirk = new Target("Dirk the Daring", 120, 2, 5, 10, "assets/images/FreshMeat.jpg")

    function Item(name, modifier, description) {
        this.name = name;
        this.modifier = modifier;
        this.description = description;
    };

    var items = {
        shield: new Item('Shield', -.2, "Shield yourself from damage"),
        elixir: new Item('Elixir', -.5, "An elixir to help reduce damage"),
        love: new Item('Love', -.8, "Behold the power of Love!")
    };

    function addMods() {
        var total = 1
        for (var index = 0; index < dirk.items.length; index++) {
            var item = dirk.items[index];
            total += item.modifier
        }
        return total
    };

    //public

    //attack('kick')
    this.attack = function attack(attackType) {
        dirk.health -= dirk.attacks[attackType] * addMods()
        dirk.hits += 1
    }

    this.giveItem = function giveItem(itemType) {
        dirk.items.push(items[itemType])
    }

    this.reset = function reset() {
        dirk.health = dirk.maxHealth
    }

    this.getHealth = function getHealth() {
        return dirk.health
    }

    this.getTarget = function getTarget(){
        return dirk
    }

    this.getHit = function getHit() {
        return dirk.hits 
    }

}


