const newDiv = document.createElement( "div" );
newDiv.classList.add( "champ_container" );
newDiv.classList.add( "pyke" );
newDiv.innerHTML = "<h2>pyke, the bloodharbor ripper</h2>"
document.body.appendChild( newDiv );

const p = document.querySelector( ".pyke" );
p.style.backgroundImage = "url(assets/pyke.jpg)";
p.style.color = "#92fdfe";