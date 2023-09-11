import React from 'react'


export default function LoginPage (){

  return (
  
<form action="" method="Post" enctype="multipart/form-data">

<lable for="username"> User Name </lable>
<input type="text" id="username" minlenth="10" maxlenght="20" required placeholder="Please type Username"> </input>

<lable for="password"> Password </lable>
<input type="password" id="password" minlength="10" maxlenght="20" required placeholder="Please type Password" > </input>


<lable for="email"> email </lable>
<input type="email" id="email" minlength="10" maxlenght="20" required placeholder="emailid@domine.com" ></input>


<lable for="Phone"> email </lable>
<input type="tel" id="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="040-23462562" > </input>

<lable for="bdate"> DOB </lable>
<input type="date" id="bdate" > </input>


<lable for="quantity"> Quantity </lable>
<input type="number" id="quantity" min="0" max="99" value="1" ></input>

<lable for="title"> Title </lable>
<lable for="Mr"> Mr. </lable>
<input type="radio" id="Mr" value="Mr." name="title"></input>
<lable for="Ms">Ms. </lable>
<input type="radio" id="Ms" value="Ms." name="title"></input>
<lable for="PhD"> PhD </lable>
<input type="radio" id="PhD" value="PhD." name="title"></input>

<lable for="payment"> Payment Method </lable>
<select id="payment">
<option value="cash"> Cash</option>
<option value="upi"> UPI</option>
<option value="onlineb"> Online Banking</option>
</select>

<lable for="subscribe">Subscription </lable>
<input type="checkbox" id="subscribe"></input>

<lable for="comment"> Comments </lable>
<textarea id="comment" row="10" cols="25"> </textarea>

<lable for="file"> Upload your file here </lable>
<input type="file" id="file" accept="png/jpg/, image/jpeg"></input>

<input type = "reset"></input>
<input type = "submit"></input>


</form>
  );
}
