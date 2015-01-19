/**
 * Created by 100068 on 2015/1/19.
 */
window.onload = initAll;
function initAll() {
    document.getElementById("redirect").onclick = initRedirect;
}
function initRedirect() {
    alert("We are not responsible for the content of pages outside our site");
    window.location=this;
    return false;
}