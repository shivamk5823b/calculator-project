
window.onload = function () {
    document.getElementById("screen").focus();

    let screen = document.getElementById("screen");
    let buttons = document.querySelectorAll("button");

    buttons.forEach(function (btn) {

        /* the main reason of using dataset. value to not write name on each and every button
        and (this) help js to know which button press. for an example, if i press 5 then
        (this==5).
        */
        if (btn.dataset.value) {
            btn.onclick = function () {
                screen.value += this.dataset.value;
            };
        }

    });

    // clear button
    document.getElementById("clear").onclick = function () {
        screen.value = "";
    };

    // equals button
    document.getElementById("equals").onclick = function () {
        try {
            screen.value = eval(screen.value);
    /* i use inbuilt function eval here which help to convert string into numeric and apply 
    arithmetic operation     

    */
        } catch {
            alert("Invalid input");
        }
    };

};