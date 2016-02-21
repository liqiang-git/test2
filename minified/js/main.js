/**
 * Created by ibm on 2016/2/20.
 */
alert("Welcome!");

/**
 * Created by ibm on 2016/2/20.
 */
function showPic(whichpic){
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src",source);
    var text = whichpic.getAttribute("title");
    var description = document.getElementById("description");
    description.firstChild.nodeValue = text;
}
