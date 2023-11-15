const icon = document.querySelector(".icon");
const newDiv = document.querySelector(".hidden");
const XIcon = document.querySelector(".XIcon");

icon.addEventListener("click",function () {
    newDiv.style.display="block";
    icon.style.display= "none";
    XIcon.style.display= "block";

})
XIcon.addEventListener("click", function () {
    newDiv.style.display="none";
    icon.style.display="block";
    XIcon.style.display="none";
})


const bagicon = document.querySelector(".bagIcon")
const exit = document.querySelector(".exit")
const fixnav = document.querySelector(".fixnav")

bagicon.addEventListener("click", function () {
    fixnav.style.transform="translate(0px)"

})
exit.addEventListener("click", function () {
    fixnav.style.transform="translate(400px)"
})