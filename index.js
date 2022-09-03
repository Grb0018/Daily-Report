
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
function send(){
	const scriptURL = 'https://script.google.com/macros/s/AKfycbziVQJk3lejFeRt15m1AigDxM0tIIt4Ijyq6r6ChofWDPCSs8Mq-KqXZYvknCYMjx2HJw/exec'
	const form = document.forms['google-sheet']
	form.addEventListener('submit', e => {
		e.preventDefault()
		fetch(scriptURL, { method: 'POST', body: new FormData(form)})
		  .then(response => alert("Submitted"))
		  .then(alert("Submitted"))
		  .then(location.reload())
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
						send()
						return;
					}else{
						document.getElementById('head').innerHTML += " <br><br> <font style='color:red'>Check Your Name & Password </font>";
						setTimeout(()=>{document.getElementById('head').innerHTML='Report Submission Form'},2000)
						}
				}	
				
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
		  .then(location.reload())
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
			document.getElementById('detail').style.top = '-20%';
			e.target.src= './img/setting.png';
			if(screen.availWidth<500){
				document.getElementById('detail').style.padding = '60% 10%';
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
			document.getElementById('detail').style.top = '2px';
			e.target.src= './img/close.png';
			if(screen.availWidth<500){
				document.getElementById('detail').style.padding = '100% 10%';
				document.getElementById('passgiven').style.top = '-160px';
			}
		}
		
	}	

