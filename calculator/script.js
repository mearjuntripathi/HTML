let a;
function display(num) {
  a.value += num
}
function calulate() {
  a.value = eval(a.value)
}
function clr() {
  a.value = ""
}
function del() {
  a.value = a.value.slice(0, -1)
}
window.onload = function () {
  a = document.getElementById('inputsc')
}

console.log("   _____                  __                   ___________          .__                      __    .__      .__ ");
console.log("  /  _  \\   _______      |__|  __ __    ____   \\__    ___/ _______  |__| ______   _____    _/  |_  |  |__   |__|");
console.log(" /  /_\\  \\  \\_  __ \\     |  | |  |  \\  /    \\    |    |    \\_  __ \\ |  | \\____ \\  \\__  \\   \\   __\\ |  |  \\  |  |");
console.log("/    |    \\  |  | \\/     |  | |  |  / |   |  \\   |    |     |  | \\/ |  | |  |_> >  / __ \\_  |  |   |   Y  \\ |  |");
console.log("\\____|__  /  |__|    /\\__|  | |____/  |___|  /   |____|     |__|    |__| |   __/  (____  /  |__|   |___|  / |__|");
console.log("        \\/           \\______|              \\/                            |__|          \\/               \\/      ");