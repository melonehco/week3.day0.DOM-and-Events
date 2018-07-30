const poros = [ "devil_poro", "draven_poro", "heim_poro", "poro1", "ziggs_poro" ];

function onClick()
{
    console.log( "ADDING PORO" );
    
    const p = document.createElement( "img" );

    //get random poro
    const idx = Math.floor( Math.random() * poros.length );
    const name = poros[idx];
    p.src = "assets/" + name + ".png";

    //set location from mouse location
    p.style.position = "absolute";
    const posTop = "" + event.clientY + "px";
    p.style.top = posTop;
    const posLeft = "" + event.clientX + "px";
    p.style.left = posLeft;

    const d = document.querySelector( "#poros" ); //div
    d.appendChild( p );
}

document.addEventListener( "click", onClick );
