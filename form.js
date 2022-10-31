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
<label id="inlabel" style="margin-top:0">In Time<text style="    font-size: 33px;
   position: relative;
   color: #dbdbdb;
"> &#x2A</text></label>
<input type="time" id="intime"  style="margin-top:0" name="In Time" required>
<label id="outlabel" style="margin-top:0">Out Time<text style="    font-size: 33px;
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
    background: aliceblue;
    overflow: hidden;
    overflow-y: scroll;
">
  <span style="
    display: block;
    height: max-content;
    background-color: #c9c9bb;
    width: 90%;
    min-height: 300px;
    margin: 10px 5%;
"></span>  
</span>
</span>`