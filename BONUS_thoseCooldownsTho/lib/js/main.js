const cooldownIndic = { "q": false, "w": false, "e": false, "r": false };
const cooldowns = { "q": 10000, "w": 10000, "e": 8000, "r": 50000 };

function onKeyPress()
{
    const id = event.key;
    
    if ( id in cooldownIndic ) //if valid key
    {
        cooldownIndic[id] = true;

        //darken that power icon
        const i = document.getElementById( id );
        i.style.filter = "brightness(.3)";

        setTimeout( offCooldown, cooldowns[id], id ); //turn cooldown off in 1 sec
    }
}

/* turns off cooldown for given power (id by key) */
function offCooldown( key )
{
    cooldownIndic[key] = false;

    //lighten power icon
    const i = document.getElementById( key );
    i.style.filter = "brightness(1.0)";
}

document.addEventListener( "keypress", onKeyPress );