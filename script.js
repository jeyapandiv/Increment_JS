var result = 0;


document.getElementById("decrease").onclick = function () {
    result--
    assign(result)
    if (result < 0) {
        color("red")
    }
    else if (result == 0) {
        color("black")
    }
}

document.getElementById("reset").onclick = function () {
    result = 0
    assign(result)
    color("black")
}

document.getElementById("increase").onclick = function () {
    result++
    assign(result)
    if (result > 0) {
        color("green")
    }
    else if (result == 0) {
        color("black")
    }
}

function color(coloring) {
    document.getElementById("counter").style.color = coloring;
}

function assign(result_value) {
    document.getElementById("counter").innerHTML = result_value;
}