$('body').mouseup(function() {
    var text=getSelectedText();
    if (text!='') {
    var msg = new SpeechSynthesisUtterance();
    msg.text = text;
    var words = text.split(" ");
    for(var i=0; i< words.length; i++)
    {
        console.log(words[i]);
    }
    window.speechSynthesis.speak(msg);
    }
});
function getSelectedText() {
    if (window.getSelection) {
        return window.getSelection().toString();
    } else if (document.selection) {
        return document.selection.createRange().text;
    }
    return '';
}
