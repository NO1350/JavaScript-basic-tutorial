/**
 * Created by crixalis on 15-1-18.
 */
/*
 This is an example of a long JavaScript comment.Note the
 characters at the beginning and ending if the comment.
 This script adds the words "Hello,world!" into the body
 area of the HTML page.
 对于多行的注释，行开头的／*让JavaScript忽略此后的所有内容，直到注释的结尾为止。
 */
window.onload=writeMessage;
//Do this when page finishes loading
function writeMessage(){
    //Here's where the actual work gets done
    document.getElementById("helloMessage").innerHTML="Hello,world!";
}