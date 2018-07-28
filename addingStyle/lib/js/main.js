const rightSide = document.getElementsByClassName("right_side")[0];
rightSide.style.backgroundColor = "#d3c26f";

const names = document.getElementsByClassName("name"); //array-like thing
for (let i = 0; i < names.length; i++)
{
    names[i].style.textShadow = "-6px 5px 2px yellow";
}