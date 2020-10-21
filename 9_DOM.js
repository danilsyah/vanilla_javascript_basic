console.log(document);
document.getElementById("foo").innerText = "hai haykal";
const div = document.getElementsByTagName("div")
console.log(div)

for (let index = 0; index < div.length; index++) {
    const element = div[index];
    console.log(element);
}