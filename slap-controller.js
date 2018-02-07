//Controller Responsibilities
//user controlls, interactions between the data and the user
//Draw function
//giveItem
//reset
//attack
//draw the html for the player etc 

function SlapController() {
    //private
    var slapService = new SlapService()

    function draw() {
        var healthElem = document.getElementById('health')
        healthElem.innerHTML = slapService.getHealth()
        var hitElem = document.getElementById('hits')
        hitElem.innerHTML = slapService.getHit()

    }

    function drawTarget() {
        var player = slapService.getTarget()
        var template = ''
        var playerElem = document.getElementById("player-card")
        template += `
            <div class="card text-center card-custom">
                <div class="card-header">
                    <h4>${player.name}</h4>
                    <h5>Health: <span id='health'>${player.health}</span></h5>
                    <p>Hits:<span id="hits"> ${player.hits}</span></p>
                </div>
                <div class="card-body">
                    <img src="${player.img}" alt="target">
                </div>
                <div class="card-footer">
                    <button type="button" class="btn btn-danger" onClick="app.controllers.slapController.attack('slap')">Slap!</button>
                    <button type="button" class="btn btn-warning" onClick="app.controllers.slapController.attack('punch')">Punch!</button>
                    <button type="button" class="btn btn-dark" onClick="app.controllers.slapController.attack('kick')">Kick!</button>
                    <hr>
                    <p>Choose from below to reduce damage</p>
                    <button type="button" class="btn btn-info" onClick="app.controllers.slapController.giveItem('shield')">Shield</button>
                    <button type="button" class="btn btn-success" onClick="app.controllers.slapController.giveItem('elixir')">Elixir</button>
                    <button type="button" class="btn btn-primary" onClick="app.controllers.slapController.giveItem('love')">Love</button>
                </div>
            </div> 
            `
        playerElem.innerHTML = template
    }

    //public
    this.giveItem = function giveItem(itemType){
        slapService.giveItem(itemType)
      }

    this.attack = function attack(attackType) {
        slapService.attack(attackType)
        draw()
    }

    this.reset = function reset() {
        slapService.reset()
    }

    drawTarget()
}












