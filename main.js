function bold() {
    const texts = document.getElementById("fonts");
    if (texts.style.fontWeight === "bold") {
        texts.style.fontWeight = "normal";

    } else {
        texts.style.fontWeight = "bold";


    }
}

function underline() {
    const texts = document.getElementById("fonts");
    if (texts.style.textDecoration == "underline") {
        texts.style.textDecoration = "none";

    } else {
        texts.style.textDecoration = "underline";


    }
}

function italic() {
    const texts = document.getElementById("fonts");
    if (texts.style.fontStyle == "italic") {
        texts.style.fontStyle = "normal";

    } else {
        texts.style.fontStyle = "italic";


    }
}

function leftAlign() {
    const texts = document.getElementById("fonts");
    texts.style.textAlign = "left";
}

function centerAlign() {
    const texts = document.getElementById("fonts");
    texts.style.textAlign = "center";
}

function rightAlign() {
    const texts = document.getElementById("fonts");
    texts.style.textAlign = "right";
}

function justifyAlign() {
    const texts = document.getElementById("fonts");
    texts.style.textAlign = "justify";

}

function colorChange(){
    const texts = document.getElementById("fonts");
    const colors=document.getElementById("color").value;
    texts.style.color=colors;

}