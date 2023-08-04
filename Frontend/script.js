// input field get data
// delete data via button
// update data via button and input fields
// add data via butto

const url = new URL(location.href);


let body = document.body;
let inputLabelID = document.createElement("label");
let inputFieldID = document.createElement("input");
let inputLabelFirstname = document.createElement("label");
let inputFieldFirstname = document.createElement("input");
let inputLabelLastname = document.createElement("label");
let inputFieldLastname = document.createElement("input");
let inputLabelEmail = document.createElement("label");
let inputFieldEmail = document.createElement("input");
let div1 = document.createElement("div");
let div2 = document.createElement("div");
let div3 = document.createElement("div");
let addButton = document.createElement("button");
let deleteButton = document.createElement("button");
let updateButton = document.createElement("button");
let getButton = document.createElement("button");

async function GetUser() 
{
    const userId = inputFieldID.value;
    const data = await fetch("http://192.168.178.43:80/api/v1/users/" + userId).then((res) => res.json());
    firstName = data.firstName;
    lastName = data.lastName;
    eMail = data.email;

    div1.textContent = `${firstName}`;
    div2.textContent = `${lastName}`;
    div3.textContent = `${eMail}`;
    console.log(data);
};

async function DeleteUser()
{
    const userId = inputFieldID.value;
    const data = await fetch("http://127.0.0.1:8000/api/v1/users/" + userId, { method: "DELETE" }).then((res) => res.json());
}

async function UpdateUser()
{
    const userId = inputFieldID.value;
    const firstName = inputFieldFirstname.value;
    const lastName = inputFieldLastname.value;
    const email = inputFieldEmail.value;
    const data = await fetch("http://127.0.0.1:8000/api/v1/users/" + userId, { method: "PUT", cors: "cors", headers: {"Content-Type": "application/json"}, body: JSON.stringify({ "firstName": firstName, "lastName": lastName, "email": email})}).then((res) => res.json());
}

async function AddUser()
{
    const firstName = inputFieldFirstname.value;
    const lastName = inputFieldLastname.value;
    const email = inputFieldEmail.value;
    const data = await fetch("http://127.0.0.1:8000/api/v1/users/new", { method: "POST", cors: "cors", headers: {"Content-Type": "application/json"}, body: JSON.stringify({ "firstName": firstName, "lastName": lastName, "email": email})}).then((res) => res.json());

}

addButton.textContent = "Add User";
deleteButton.textContent = "Delete User";
updateButton.textContent = "Update User";
getButton.textContent = "Get User";

inputLabelID.htmlFor = "inputFieldID";
inputLabelFirstname.htmlFor = "inputFieldFirstname";
inputLabelLastname.htmlFor = "inputFieldLastname";
inputLabelEmail.htmlFor = "inputFieldEmail";

inputFieldFirstname.type = "text";
inputFieldFirstname.name = "inputFieldID";
inputFieldFirstname.value = "Enter Firstname";
inputFieldFirstname.title = "Add new Name";

inputFieldEmail.type = "text";
inputFieldEmail.name = "inputFieldID";
inputFieldEmail.value = "Enter EMail";
inputFieldEmail.title = "Add new Name";

inputFieldLastname.type = "text";
inputFieldLastname.name = "inputFieldID";
inputFieldLastname.value = "Enter Lastname";
inputFieldLastname.title = "Add new Name";

inputFieldID.type = "text";
inputFieldID.name = "inputFieldID";
inputFieldID.value = "Enter ID";
inputFieldID.title = "Add new Name";

deleteButton.addEventListener("click", DeleteUser);
updateButton.addEventListener("click", UpdateUser);
getButton.addEventListener("click", GetUser);
addButton.addEventListener("click", AddUser);

body.appendChild(div1);
body.appendChild(div2);
body.appendChild(div3);
body.appendChild(inputFieldID);
body.appendChild(inputFieldFirstname);
body.appendChild(inputFieldLastname);
body.appendChild(inputFieldEmail);
body.appendChild(addButton);
body.appendChild(deleteButton);
body.appendChild(updateButton);
body.appendChild(getButton);

