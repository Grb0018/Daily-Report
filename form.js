const form = `<form method="post" name="google-sheet" id="detail" style="transition:2s">
<label for="UpdateWork">Assigned Work<text style="    font-size: 33px;
   position: relative;
   top: 10px;
   color: #dbdbdb;
"> &#x2A</text></label>
<textarea id="UpdateWork" name="GivenWork" required></textarea>
<label for="UpdateWork">Work Status<text style="    font-size: 33px;
   position: relative;
   top: 10px;
   color: #dbdbdb;
"> &#x2A</text></label>
<textarea id="UpdateWork" name="FinalWork" required></textarea>
<label for="Remarks" style="display: block;">Remarks<text style="    font-size: 33px;
   position: relative;
   top: 10px;
   color: #dbdbdb;
"> *</text></label>
<textarea id="Remarks" name="Remarks" required="" style="display: block;"></textarea>
<input type="date" name="date" id="date">
<label id="inlabel" style="margin-top:0">Start Time<text style="    font-size: 33px;
   position: relative;
   color: #dbdbdb;
"> &#x2A</text></label>
<input type="time" id="intime"  style="margin-top:0" name="In Time" required>
<label id="outlabel" style="margin-top:0">End Time<text style="    font-size: 33px;
   position: relative;
   color: #dbdbdb;
"> &#x2A</text></label>
<input type="time" style="margin-top:0" id='outtime' name="Out Time" required>
<input name="Agent" type="text" style="display:none" id="agent">
<input name="submitdate" type="text" style="display:none" id="sdate">
<input type="password" placeholder="Enter Your Password" id="passgiven" style="margin-top: 45%;">
<input type="submit" id="submit">
</form>`

const basic = ` <div id="menu">
<img src="./img/home.png" id="homebtn" style="width: 25px;
height: 25px;
padding: 7px 12px;
border-radius: 15px;
filter: drop-shadow(1px 1px 1px lightgrey) invert(1);transition: 1s;">
<img src="./img/timetable.png" id="calenderbtn" style="    width: 19px;
height: 19px;
padding: 6px 12px;
border-radius: 15px;
filter: drop-shadow(1px 1px 1px lightgrey) invert(1);transition: 1s;">
<img src="./img/file.png" id="reportbtn" style="    width: 19px;
height: 19px;
padding: 6px 12px;
border-radius: 15px;
filter: drop-shadow(1px 1px 1px lightgrey) invert(1);transition: 1s;">
<img src="./img/support.png" id="supportbtn" style="width: 19px;
height: 19px;
padding: 6px 12px;
border-radius: 15px;
filter: drop-shadow(1px 1px 1px lightgrey) invert(1);transition: 1s;">
</div>
<time>12.10pm</time>
<text>Hey<strong id="name"></strong></text>
<img src="./img/Artstation-Character-Portrait-Demo-by-Anthony-Jones.png" id="face">
<img src="./img/setting.png" alt="" id="settings">
<button id="pass">Change</button>`


const TimeUpdateThing = ` <span id="timeUpdate" style="transition:2s">
<h2 style="    width: 98%;    margin-top: 42px;
text-align: center;"> Update Log In & Out</h2>
<select id="logproduct" style="
margin: 25px 15%;
width: 70%;
height: 12%;
text-align: center;
border: 0;
border-radius: 6px;
">
<option value="">- Select -</option>
<option value="Login"> Log In </option>
<option value="Logout"> Log Out </option>
</select>
<label style="    bottom: -5%;display:none" id="loginTimel"> Update Log In Time</label>
<input type="time" id="loginTime" style="display:none">
<label style="    bottom: -5%;display:none" id="logoutTimel"> Update Log Out Time</label>
<input type="time" id="logoutTime" style="display:none">
<button id="logTimeSubmit" style="display:none">Submit</button>
</span> `

const ContactUs = `
<div id="contactdiv">
<div id="contactpersons" style="
display: flex;
width: 192px;
padding: 10%;
margin-top: 25%;
height: 150px;
border-radius: 10px;
overflow-x: scroll;
">
<span id="person1" style="
display: flex;
position: relative;flex-direction: column;
justify-content: space-around;
width: 166px;
background: aliceblue;
align-content: space-between;
margin-right: 20px;
padding: 10px;
border-radius: 10px;
box-shadow: 2px 2px 10px #423636;
"><p style="
width: 130px;
text-align: center;
">PRADIP KUMAR BHOWAL</p><span style="display: flex;justify-content: space-around;"><img style="width:25px;" src="./img/phone.png" onclick="window.parent.location.href = 'tel:+919830054463'"><a href = "mailto: pkbhowal@gmail.com"><img style="width:25px;" src="./img/gmail.png"></a></span></span>
<span id="person2" style="
display: flex;
width: 166px;
background: aliceblue;
align-content: space-between;
margin-right: 20px;
padding: 10px;
border-radius: 10px;
box-shadow: 2px 2px 10px #423636;
flex-direction: column;
justify-content: space-around;
"><p style="
width: 130px;
text-align: center;
">SOURASISH DASGUPTA</p><span style="display: flex;justify-content: space-around;"><img style="width:25px;" src="./img/phone.png" onclick="window.parent.location.href = 'tel:+918961158820'"><a href = "mailto: sourashisbitblits@gmail.com"><img style="width:25px;" src="./img/gmail.png"></a></span></span>
<span id="person3" style="
display: flex;flex-direction: column;
justify-content: space-around;
width: 166px;
background: aliceblue;
align-content: space-between;
margin-right: 20px;
padding: 10px;
border-radius: 10px;
box-shadow: 2px 2px 10px #423636;
"><p style="
width: 130px;
text-align: center;
">GOURAB DAS</p><span style="display: flex;justify-content: space-around;"><img style="width:25px;" src="./img/phone.png" onclick="window.parent.location.href = 'tel:+918420204013'"><a href = "mailto: gourab.bitblits@gmail.com"><img style="width:25px;" src="./img/gmail.png"></a></span></span>
</div></div>`

const workInHand = `<span id="workInHand" style="transition:2s">
<h2 style="    width: 98%;    margin-top: 42px;
text-align: center;">Works In Hand</h2><span style="
    width: 95%;
    height: 200px;
    margin-top: 10px;
    background: url('./img/note.png');
    background-size:cover;
    overflow: hidden;
    overflow-y: scroll;
">
  <span style="
  display: block;
  height: max-content;
  width: 85%;
  min-height: 300px;
  margin: 24px 11%;
  font-family: system-ui;
"></span>  
</span>
</span>`

const infoAttandance = `
<select id="month" style="
margin: 10px 15%;
width: 70%;
height: 40px;
text-align: center;
border: 0;
border-radius: 6px;
">
    <option value="none">- Select Month -</option>
    <option value="1">JAN</option>
    <option value="2">FEB</option>
    <option value="3">MAR</option>
    <option value="4">APR</option>
    <option value="5">MAY</option>
    <option value="6">JUNE</option>
    <option value="7">JULY</option>
    <option value="8">AUG</option>
    <option value="9">SEP</option>
    <option value="10">OCT</option>
    <option value="11">NOV</option>
    <option value="12">DEC</option>
</select>
<select id="EmpName" style="
margin: 10px 15%;
width: 70%;
height: 40px;
text-align: center;
border: 0;
border-radius: 6px;
">
    <option value="none">- Select Employee -</option>
    <option value="GOURAB">Gourab Das</option>
    <option value="SUDIP MAHANTA">Sudip Mahanta</option>
    <option value="SANDIP DAS">Sandip Das</option>
    <option value="SWAPNA MONDAL">Swapna Mondal</option>
</select>
<button id="Get List" style="
width: 50%;
height: 40px;
color: black;
margin: 10px 25%;
">Get List</button>
`

const setbox = `
<span id="passbox" style="
width: 100%;
height: 50px;
display: flex;
align-items: center;
justify-content: center;
background: #242323;
border-bottom: 1px solid #db2424;
color: #c7c7c7;
filter: drop-shadow(2px 4px 6px black);
">
Password Change
</span>
<span id="imagebox" style="
width: 100%;
background-color: #242323;
height: 50px;
display: flex;
align-items: center;
justify-content: center;
border-bottom: 1px solid #db2424;
color: #c7c7c7;
filter: drop-shadow(2px 4px 6px black);
">Profile Image Change</span>
<span id="logout" style="
width: 100%;
background-color: #242323;
height: 50px;
display: flex;
align-items: center;
justify-content: center;
color: #c7c7c7;
filter: drop-shadow(2px 4px 6px black);
">Log Out</span>
`

const passSpan = `
    <p id="back" style="
    border-radius: 6px;
    padding: 10px;
    width: max-content;
    background: white;
    margin-bottom: 10px;
">&lt;</p>
    <p>New Password</p>
<input type="password" id="passwordn" style="
    margin-bottom: 35px;
">
<br>
<br>
<p>Confirm Password</p>
<input type="password" id="passwordc">
<br><br>
<button id="updatePass" style="
    padding: 6px;
    border-radius: 6px;
    background: #938888;
    border: 0;
    color: antiquewhite;
    box-shadow: 0px 0px 10px black;
">Password Update</button>`

const dpSpan = `
<p id="back" style="
border-radius: 6px;
padding: 10px;
width: max-content;
background: white;
margin-bottom: 10px;
">&lt;</p>
<p style="
margin-top: 10%;
">Select Image</p>
<br><hr style="
width: 41%;
">
<input type="file" id="passwordn" accept="image/png, image/gif, image/jpeg" style="
margin-bottom: 35px;
background: none;
border: 0;
">
<br>
<br>



<button id="updateimg" style="
padding: 6px;
border-radius: 6px;
background: #938888;
border: 0;
color: antiquewhite;
box-shadow: 0px 0px 10px black;
">Update Now</button>`
