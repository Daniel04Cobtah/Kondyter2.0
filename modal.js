let interval =  setInterval(FACEBOOK, 1000);

let modal = document.getElementById("moduleWindow");

function FACEBOOK()
{
    modal.style.display = "block";
    let tea = setInterval(cleaning, 10000);

}
function cleaning()
{
    clearInterval(interval);
    modal.style.display = "none";
    document.body.style.overflow = "auto";
}
