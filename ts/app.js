/// <reference path="../typings/angularjs/angular.d.ts" />
/// <reference path="../typings/angularjs/angular-route.d.ts" />
var Hello = (function () {
    function Hello() {
        angular.module("HelloApp", []);
    }
    return Hello;
}());
// var user = {id:"8­4­4­4­12", firstname: "Jane", lastname: "Dow"};
// class Contact implements Icontact  {
//   constructor(id: number, m: number) { }
// }
// function greeter(contact : Icontact) {
//     return "Hello, " + contact.firstName + " " + contact.lastName;
// }
// document.body.innerHTML = "Hello, " + errorMessage;
document.getElementById("message").innerHTML = "Paragraph changed!";
