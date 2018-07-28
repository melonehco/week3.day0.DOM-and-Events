function onClick()
{
    const r = document.getElementById("rengar");
    r.src = "assets/rengar.png";

    alert( "You've been deleted!" );
}

document.addEventListener("click", onClick);