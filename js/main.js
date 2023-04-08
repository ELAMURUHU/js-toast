/* <div class="toast-message">
   <div class="toast-header">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNdMPVWnSk9A5RELZAywyS2Trixb-VAHf0plW7G3Q7rg&s" alt="blue-box" width="25px" height="25px">
      <h2>Bootstrap</h2>

      <p class="time">11 mins ago</p>
      <button type="button">X</button>
   </div>

    <div class="toast-body">
      <p>Hello World!This is a toast message.</p>
    </div>

</div> */

let press = document.getElementsByTagName("button");
let identity = document.getElementById("main");
//function

for(let i=0;i<press.length;i++){
	press[i].addEventListener('click',function(event){
let message = document.createElement("div");
let header = document.createElement("div");
let imag_box = document.createElement("img");
let heading = document.createElement("h2");
let para = document.createElement("p");
let btn = document.createElement("button");
let body = document.createElement("div");
let para_2 = document.createElement("p");

//set attributes
message.setAttribute("class","toast-message");

header.setAttribute("class","toast-header");
imag_box.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNdMPVWnSk9A5RELZAywyS2Trixb-VAHf0plW7G3Q7rg&s");
para.setAttribute("class","time");
btn.setAttribute("type","button");
body.setAttribute("class","toast-body");

//set inner text
heading.innerText="Bootstrap";
para.innerText="11 mins ago";
btn.innerText="X";
para_2.innerText="Hello World!This is a toast message.";

//appendChild
header.appendChild(imag_box);
header.appendChild(heading);
header.appendChild(para);
header.appendChild(btn);
body.appendChild(para_2);
message.appendChild(header,body);
identity.appendChild(message);

btn.addEventListener('click',function(e){
	btn.parentNode.parentNode.remove();
});

	});
        }




