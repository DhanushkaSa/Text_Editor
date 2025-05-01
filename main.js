function bold() {
    document.execCommand('bold', false, null);

}

function underline() {
    document.execCommand('underline', false, null);
}

function italic() {
    document.execCommand('italic', false, null);
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

function colorChange() {

    const colors = document.getElementById("color").value;

    document.execCommand('foreColor', false, colors);

}

function undo() {
    document.execCommand('undo', false, null);
}

function redo() {
    document.execCommand('redo', false, null);
}