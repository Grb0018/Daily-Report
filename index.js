/////////// getting data link ////////////////
https://script.googleusercontent.com/macros/echo?user_content_key=qTnwwrxCOVGoaiW2N9v4c8rFAGIsj2Xe0yDJKq0uTuC_OfWs9BTNvT3srYBBDoM8PweXSsmbfG8jRJxc_p2KQTUMENJZPK3Rm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnJUv-wmZYVS6l7TvsbKwtHES575oy0P1Nf2Q_xBpq06YNGP6FNmiERIkTioDufDlo6JRik9kaKoAOesA7Cb0eBfdQKQk5Yp0M9z9Jw9Md8uu&lib=MqTehLefX9j6B4t66SL1f44qXmfyi8Swi
///////////

////////// time and date update /////
setInterval(()=>{
    const d = new Date();
    var chng = d.toLocaleTimeString().slice(0,4);
    var zone;
    if(d.toLocaleTimeString().includes('AM')){zone = 'AM'}else{zone = 'PM'}
    var text = d.toLocaleTimeString().slice(0,4) + ' '+ zone;
    document.getElementById('form').querySelector('time').innerHTML = text;
	document.getElementById('login').querySelector('time').innerHTML  = text;
},1000)
var date = new Date();
var currentDate = date.toISOString().slice(0,10);
document.getElementById('date').value = currentDate;
document.getElementById('sdate').value = new Date();

///////////// submit /////////////////////
function GourabDas(){
	const scriptURL = 'https://script.google.com/macros/s/AKfycbziVQJk3lejFeRt15m1AigDxM0tIIt4Ijyq6r6ChofWDPCSs8Mq-KqXZYvknCYMjx2HJw/exec'
	const form = document.forms['google-sheet']
	form.addEventListener('submit', e => {
		e.preventDefault();document.getElementById('submit').style.display = 'none'
		fetch(scriptURL, { method: 'POST', body: new FormData(form)})
		  .then(response =>{alert('Successfully Submited');location.reload()})
		  .catch(error => console.log('Error!', error.message))
	  }) 
}
function SubhankarDas(){
	const scriptURL = 'https://script.google.com/macros/s/AKfycbzE3nOOBUWQuqf5vIaP9jzJJdOzVwOhGqMOGPdn66ZyEg6rGTh9CqGcM9CU16RlFBRLEg/exec'
	const form = document.forms['google-sheet']
	form.addEventListener('submit', e => {
		e.preventDefault();document.getElementById('submit').style.display = 'none'
		fetch(scriptURL, { method: 'POST', body: new FormData(form)})
		  .then(response =>{alert('Successfully Submited');location.reload()})
		  .catch(error => console.log('Error!', error.message))
	  }) 
}
function IndranilChowdhury(){
	const scriptURL = 'https://script.google.com/macros/s/AKfycbyPcUtchZHfPY4eiYkRkTaYwUaJwm8OaFOEVszfz2KNiTSVEXXv0j0Mn3cxCILHIgAR5w/exec'
	const form = document.forms['google-sheet']
	form.addEventListener('submit', e => {
		e.preventDefault();document.getElementById('submit').style.display = 'none'
		fetch(scriptURL, { method: 'POST', body: new FormData(form)})
		  .then(response =>{alert('Successfully Submited');location.reload()})
		  .catch(error => console.log('Error!', error.message))
	  }) 
}
function AbhisekGhosh(){
	const scriptURL = 'https://script.google.com/macros/s/AKfycbzmbzpl12qWwaLzqh2qfEh32Qx92CtufO-Eco4huAd5YHkXLudttfNqnXDIymZl6KJY2g/exec'
	const form = document.forms['google-sheet']
	form.addEventListener('submit', e => {
		e.preventDefault();document.getElementById('submit').style.display = 'none'
		fetch(scriptURL, { method: 'POST', body: new FormData(form)})
		  .then(response =>{alert('Successfully Submited');location.reload()})
		  .catch(error => console.log('Error!', error.message))
	  }) 
}
function SwapnaMondal(){
	const scriptURL = 'https://script.google.com/macros/s/AKfycbwUAUXB1JZ6Y3i32HuyFrcsw-p3VClnEiiuVgaL7gc8nkvGfoEZBWNKw3ARJcKkbi7yEQ/exec'
	const form = document.forms['google-sheet']
	form.addEventListener('submit', e => {
		e.preventDefault();document.getElementById('submit').style.display = 'none'
		fetch(scriptURL, { method: 'POST', body: new FormData(form)})
		  .then(response =>{alert('Successfully Submited');location.reload()})
		  .catch(error => console.log('Error!', error.message))
	  })
}
function SudipMahanto(){
	const scriptURL = 'https://script.google.com/macros/s/AKfycbwaQ2s9xYK-PXBNJzb2VRalWMIQN9B3HP0jZCliuFRCvNw6_1k99KqdYDHk2_67Ze0HlQ/exec'
	const form = document.forms['google-sheet']
	form.addEventListener('submit', e => {
		e.preventDefault();document.getElementById('submit').style.display = 'none'
		fetch(scriptURL, { method: 'POST', body: new FormData(form)})
		  .then(response =>{alert('Successfully Submited');location.reload()})
		  .catch(error => console.log('Error!', error.message))
	  })
}

function SandipDas(){
	const scriptURL = 'https://script.google.com/macros/s/AKfycbyXkXntJJAjosUzs4o4IRTKWo9oXl0mYhrDwo4CFThpb3QpaMGD0c-P75jtELi6iyDdCw/exec'
	const form = document.forms['google-sheet']
	form.addEventListener('submit', e => {
		e.preventDefault();document.getElementById('submit').style.display = 'none'
		fetch(scriptURL, { method: 'POST', body: new FormData(form)})
		  .then(response =>{alert('Successfully Submited');location.reload()})
		//   .then(location.reload())
		  .catch(error => console.log('Error!', error.message))
	  })
}
function SouvonikChakraborty(){
	const scriptURL = 'https://script.google.com/macros/s/AKfycbyvIhBPrb1KfTHwi-ysQvwQ4YiuIGg4wl6R0NQq5ua-lguqS_3rUd575gOD5X9t1Wvk0g/exec'
	const form = document.forms['google-sheet']
	form.addEventListener('submit', e => {
		e.preventDefault();document.getElementById('submit').style.display = 'none'
		fetch(scriptURL, { method: 'POST', body: new FormData(form)})
		  .then(response =>{alert('Successfully Submited');location.reload()})
		  .catch(error => console.log('Error!', error.message))
	  })
}
function RahulAdak(){
	const scriptURL = 'https://script.google.com/macros/s/AKfycbzI5A_J2zdgYtYZcDzJG5xdd5q-vqQoVw2c8Rg416NtYTjrFrJOVXDh2nQIWzAyJCP_8w/exec'
	const form = document.forms['google-sheet']
	form.addEventListener('submit', e => {
		e.preventDefault();document.getElementById('submit').style.display = 'none'
		fetch(scriptURL, { method: 'POST', body: new FormData(form)})
		  .then(response =>{alert('Successfully Submited');location.reload()})
		  .catch(error => console.log('Error!', error.message))
	  })
}
function KoyelPurkait(){
	const scriptURL = 'https://script.google.com/macros/s/AKfycbwqseqwU0EMyPtwnBEXD8bHr-Kz9v643q0RKOeK2bhoJ5V02ahr_0rLpRZ4OgJVF3ti9w/exec'
	const form = document.forms['google-sheet']
	form.addEventListener('submit', e => {
		e.preventDefault();document.getElementById('submit').style.display = 'none'
		fetch(scriptURL, { method: 'POST', body: new FormData(form)})
		  .then(response =>{alert('Successfully Submited');location.reload()})
		  .catch(error => console.log('Error!', error.message))
	  })
}
    
             
			  const firebaseConfig = {
				apiKey: "AIzaSyAKdtgCw5Z_lIv7s82g38J2wwBgUSie0sM",
				authDomain: "data-6ac8d.firebaseapp.com",
				databaseURL: "https://data-6ac8d-default-rtdb.firebaseio.com",
				projectId: "data-6ac8d",
				storageBucket: "data-6ac8d.appspot.com",
				messagingSenderId: "266578292656",
				appId: "1:266578292656:web:8453635c7cdab257777075"
			  };



			  firebase.initializeApp(firebaseConfig);
		var gets =0;	  
		  var cc=[];
		  var fcc=[];
		  function chk(){
			var leadsRef = firebase.database().ref();
			leadsRef.on('value', function(snapshot) {
				snapshot.forEach(function(childSnapshot) {
					console.log(childSnapshot.val())
					cc.push(childSnapshot.val())
		  })})
		}
		function chkp(){
			const name = document.getElementById('Name').value.toUpperCase();
			for (let i = 1; i < fcc.length; i++) {
				if(fcc[i].name.toUpperCase() === name){
					gets=true;
					if(fcc[i].pass == document.getElementById('Password').value){
						document.getElementById('login').style.display = 'none';
						document.getElementById('form').style.display = 'flex';
						fcc=[]
						var greet;
						if(document.getElementById('login').querySelector('time').innerText.includes('PM')){
							if(parseInt(document.getElementById('login').querySelector('time').innerText.slice(0,2)) <12 && parseInt(document.getElementById('login').querySelector('time').innerText.slice(0,2)) >09){
								greet = '<br> Good Night !!';
							}else{
								greet = '<br> Good AfterNoon !!';
							}
						}else{ greet = '<br> Good Morning !!';}
						document.getElementById('name').innerHTML = ' ' +  name;
						document.getElementById('name').parentElement.innerHTML += greet ;
						document.getElementById('agent').value = name;
						var nameCon = name;
						if(nameCon.includes('GOURAB')){GourabDas();console.log('o')}
						else if(nameCon.includes('KOYEL')){KoyelPurkait()}
						else if(nameCon.includes('RAHUL')){RahulAdak()}
						else if(nameCon.includes('SOUVONIK')){SouvonikChakraborty()}
						else if(nameCon.includes('SANDIP')){SandipDas()}
						else if(nameCon.includes('SUDIP')){SudipMahanto()}
						else if(nameCon.includes('SWAPNA')){SwapnaMondal()}
						else if(nameCon.includes('ABHISEK')){AbhisekGhosh()}
						else if(nameCon.includes('INDRANIL')){IndranilChowdhury()}
						else if(nameCon.includes('SUBHANKAR')){SubhankarDas()};
						
						return;
					}else{
						document.getElementById('head').innerHTML += " <br><br> <font style='color:red'>Check Your Name & Password </font>";
						setTimeout(()=>{document.getElementById('head').innerHTML='Report Submission Form';},2000)
						}
				}
				
			}
			if(gets==0){
				document.getElementById('head').innerHTML += " <br><br> <font style='color:red'>Hey !!! Enter Your Full Name </font>";
				setTimeout(()=>{document.getElementById('head').innerHTML='Report Submission Form'},2000)
			}
		} 


function updatepass(){
   fcc = cc[0];
   for (let i = 1; i < fcc.length; i++) {
	if(' ' + fcc[i].name.toUpperCase() === document.getElementById('name').innerText.toUpperCase()){
		var mname = document.getElementById('name').innerText.toUpperCase();
		mname = mname.slice(1,mname.length);
		firebase.database().ref('Employee/'+ i).set({
			name: mname,
			pass: document.getElementById('passgiven').value	
		  })
		  .then(fcc=[])
		  .then(alert('Succesfully Updated'))
		//   .then(location.reload())
	}
   }
}
document.getElementById('pass').onclick = ()=>{
	chk()
	if(document.getElementById('passgiven').style.display==='block'){
		var updatego = setInterval(()=>{
			if(cc.length>0){
				fcc = cc[0];
				clearInterval(updatego);
				updatepass()
			}
		},100)
	}
}

		document.getElementById('Submit').onclick =()=>{
			chk()
				document.getElementById('head').innerHTML += '<br><br> Checking ....';
			var chkgo = setInterval(()=>{
				if(cc.length>0){
					fcc = cc[0]
					clearInterval(chkgo);
					chkp();	
					document.getElementById('head').innerHTML = document.getElementById('head').innerHTML.replace('<br><br> Checking ....','');
				}
			},200)
		}
		
	document.getElementById('settings').onclick = (e)=>{
		if(e.target.getAttribute('src') === './img/close.png'){
			document.getElementById('detail').children[0].style.display='block';
			document.getElementById('detail').children[1].style.display='block'
			document.getElementById('detail').children[2].style.display='block'
			document.getElementById('detail').children[3].style.display='block'
			document.getElementById('detail').children[4].style.display='block'
			document.getElementById('submit').style.display='block';
			document.getElementById('pass').style.display='none';
			document.getElementById('passgiven').style.display='none';
			document.getElementById('detail').style.paddingTop= '27%';
			document.getElementById('detail').style.top = '-20%';
			e.target.src= './img/setting.png';
			if(screen.availWidth<500){
				document.getElementById('detail').style.padding = '40% 10%';
				document.getElementById('detail').style.top = '-7%';
			}
		}
		else{
			document.getElementById('detail').children[0].style.display='none';
			document.getElementById('detail').children[1].style.display='none'
			document.getElementById('detail').children[2].style.display='none'
			document.getElementById('detail').children[3].style.display='none'
			document.getElementById('detail').children[4].style.display='none'
			document.getElementById('submit').style.display='none';
			document.getElementById('pass').style.display='block';
			document.getElementById('passgiven').style.display='block';
			document.getElementById('detail').style.top = '-83px';
			document.getElementById('detail').style.padding = '80% 10%';
			document.getElementById('passgiven').style.top = '-150px';
			e.target.src= './img/close.png';
			if(screen.availWidth<500){
				document.getElementById('detail').style.padding = '100% 10%';
				document.getElementById('passgiven').style.top = '-160px';
			}
		}
		
	}	

