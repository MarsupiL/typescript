/// <reference path="../typings/angularjs/angular.d.ts" />
/// <reference path="../typings/angularjs/angular-route.d.ts" />

class Hello{
    constructor() {
        angular.module("HelloApp", []);
    }
}

// interface Iidentifier {
//   title: string;
//   description: string;
//   type: string;
//   format: string;
// }
// interface Iemailaddress extends Iidentifier {
//   pattern: string;
//   maxLength: number;
// }
// interface Iphonenumber extends Iidentifier {
//   example: string;
//   maxLength: number;
// }
// interface Iname {
//   type: string;
//   maxLength: number;
// }
// interface Ipicture extends Iname {
//   format: string;
// }
// interface Icontact {
//   id: Iidentifier;
//   email: Iemailaddress;
//   firstName: Iname;
//   lastName: Iname;
//   phonenumber?: Iphonenumber;
//   picture?: Ipicture;
// }
// interface Icontact {
//   id: Iidentifier;
//   email: Iemailaddress;
//   firstName: Iname;
//   lastName: Iname;
//   phonenumber?: Iphonenumber;
//   picture?: Ipicture;
// }
interface Iuser {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phonenumber?: string;
  picture?: string;
}

// var user = {id:"8­4­4­4­12", firstname: "Jane", lastname: "Dow"};


// class Contact implements Icontact  {
//   constructor(id: number, m: number) { }
// }

// function greeter(contact : Icontact) {
//     return "Hello, " + contact.firstName + " " + contact.lastName;
// }
// document.body.innerHTML = "Hello, " + errorMessage;
document.getElementById("message").innerHTML = "Paragraph changed!";
