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


///////////// submit /////////////////////
function GourabDas(){
	const scriptURL = 'https://script.google.com/macros/s/AKfycbziVQJk3lejFeRt15m1AigDxM0tIIt4Ijyq6r6ChofWDPCSs8Mq-KqXZYvknCYMjx2HJw/exec'
	const form = document.forms['google-sheet']
	form.addEventListener('submit', e => {
		e.preventDefault();document.getElementById('submit').style.display = 'none'
		fetch(scriptURL, { method: 'POST', body: new FormData(form)})
		.then(response =>{swal({
			title: "Good job!",
			text: "Submited Sucessfully",
			icon: "success",
		  })
		  .then(document.getElementsByClassName('swal-button-container')[0].onclick=()=>{location.reload()})
		  .then(document.body.onclick=()=>{location.reload()})
		
		})
		  .catch(error => console.log('Error!', error.message))
	  }) 
}
function SubhankarDas(){
	const scriptURL = 'https://script.google.com/macros/s/AKfycbzE3nOOBUWQuqf5vIaP9jzJJdOzVwOhGqMOGPdn66ZyEg6rGTh9CqGcM9CU16RlFBRLEg/exec'
	const form = document.forms['google-sheet']
	form.addEventListener('submit', e => {
		e.preventDefault();document.getElementById('submit').style.display = 'none'
		fetch(scriptURL, { method: 'POST', body: new FormData(form)})
		.then(response =>{swal({
			title: "Good job!",
			text: "Submited Sucessfully",
			icon: "success",
		  })
		  .then(document.getElementsByClassName('swal-button-container')[0].onclick=()=>{location.reload()})
		  .then(document.body.onclick=()=>{location.reload()})
		
		})
		  .catch(error => console.log('Error!', error.message))
	  }) 
}
function IndranilChowdhury(){
	const scriptURL = 'https://script.google.com/macros/s/AKfycbyPcUtchZHfPY4eiYkRkTaYwUaJwm8OaFOEVszfz2KNiTSVEXXv0j0Mn3cxCILHIgAR5w/exec'
	const form = document.forms['google-sheet']
	form.addEventListener('submit', e => {
		e.preventDefault();document.getElementById('submit').style.display = 'none'
		fetch(scriptURL, { method: 'POST', body: new FormData(form)})
		.then(response =>{swal({
			title: "Good job!",
			text: "Submited Sucessfully",
			icon: "success",
		  })
		  .then(document.getElementsByClassName('swal-button-container')[0].onclick=()=>{location.reload()})
		  .then(document.body.onclick=()=>{location.reload()})
		
		})
		  .catch(error => console.log('Error!', error.message))
	  }) 
}
function AbhisekGhosh(){
	const scriptURL = 'https://script.google.com/macros/s/AKfycbzmbzpl12qWwaLzqh2qfEh32Qx92CtufO-Eco4huAd5YHkXLudttfNqnXDIymZl6KJY2g/exec'
	const form = document.forms['google-sheet']
	form.addEventListener('submit', e => {
		e.preventDefault();document.getElementById('submit').style.display = 'none'
		fetch(scriptURL, { method: 'POST', body: new FormData(form)})
		.then(response =>{swal({
			title: "Good job!",
			text: "Submited Sucessfully",
			icon: "success",
		  })
		  .then(document.getElementsByClassName('swal-button-container')[0].onclick=()=>{location.reload()})
		  .then(document.body.onclick=()=>{location.reload()})
		
		})
		  .catch(error => console.log('Error!', error.message))
	  }) 
}
function SwapnaMondal(){
	const scriptURL = 'https://script.google.com/macros/s/AKfycbwUAUXB1JZ6Y3i32HuyFrcsw-p3VClnEiiuVgaL7gc8nkvGfoEZBWNKw3ARJcKkbi7yEQ/exec'
	const form = document.forms['google-sheet']
	form.addEventListener('submit', e => {
		e.preventDefault();document.getElementById('submit').style.display = 'none'
		fetch(scriptURL, { method: 'POST', body: new FormData(form)})
		  .then(response =>{swal({
			title: "Good job!",
			text: "Submited Sucessfully",
			icon: "success",
		  })
		  .then(document.getElementsByClassName('swal-button-container')[0].onclick=()=>{location.reload()})
		  .then(document.body.onclick=()=>{location.reload()})
		
		})
		  .catch(error => console.log('Error!', error.message))
	  })
}
function SudipMahanto(){
	const scriptURL = 'https://script.google.com/macros/s/AKfycbwaQ2s9xYK-PXBNJzb2VRalWMIQN9B3HP0jZCliuFRCvNw6_1k99KqdYDHk2_67Ze0HlQ/exec'
	const form = document.forms['google-sheet']
	form.addEventListener('submit', e => {
		e.preventDefault();document.getElementById('submit').style.display = 'none'
		fetch(scriptURL, { method: 'POST', body: new FormData(form)})
		  .then(response =>{swal({
			title: "Good job!",
			text: "Submited Sucessfully",
			icon: "success",
		  })
		  .then(document.getElementsByClassName('swal-button-container')[0].onclick=()=>{location.reload()})
		  .then(document.body.onclick=()=>{location.reload()})
		
		})
		  .catch(error => console.log('Error!', error.message))
	  })
}

function SandipDas(){
	const scriptURL = 'https://script.google.com/macros/s/AKfycbyXkXntJJAjosUzs4o4IRTKWo9oXl0mYhrDwo4CFThpb3QpaMGD0c-P75jtELi6iyDdCw/exec'
	const form = document.forms['google-sheet']
	form.addEventListener('submit', e => {
		e.preventDefault();document.getElementById('submit').style.display = 'none'
		fetch(scriptURL, { method: 'POST', body: new FormData(form)})
		  .then(response =>{swal({
			title: "Good job!",
			text: "Submited Sucessfully",
			icon: "success",
		  })
		  .then(document.getElementsByClassName('swal-button-container')[0].onclick=()=>{location.reload()})
		  .then(document.body.onclick=()=>{location.reload()})
		
		})
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
		  .then(response =>{swal({
			title: "Good job!",
			text: "Submited Sucessfully",
			icon: "success",
		  })
		  .then(document.getElementsByClassName('swal-button-container')[0].onclick=()=>{location.reload()})
		  .then(document.body.onclick=()=>{location.reload()})
		
		})
		  .catch(error => console.log('Error!', error.message))
	  })
}
function RahulAdak(){
	const scriptURL = 'https://script.google.com/macros/s/AKfycbzI5A_J2zdgYtYZcDzJG5xdd5q-vqQoVw2c8Rg416NtYTjrFrJOVXDh2nQIWzAyJCP_8w/exec'
	const form = document.forms['google-sheet']
	form.addEventListener('submit', e => {
		e.preventDefault();document.getElementById('submit').style.display = 'none'
		fetch(scriptURL, { method: 'POST', body: new FormData(form)})
		  .then(response =>{swal({
			title: "Good job!",
			text: "Submited Sucessfully",
			icon: "success",
		  })
		  .then(document.getElementsByClassName('swal-button-container')[0].onclick=()=>{location.reload()})
		  .then(document.body.onclick=()=>{location.reload()})
		
		})
		  .catch(error => console.log('Error!', error.message))
	  })
}
function KoyelPurkait(){
	const scriptURL = 'https://script.google.com/macros/s/AKfycbwqseqwU0EMyPtwnBEXD8bHr-Kz9v643q0RKOeK2bhoJ5V02ahr_0rLpRZ4OgJVF3ti9w/exec'
	const form = document.forms['google-sheet']
	form.addEventListener('submit', e => {
		e.preventDefault();document.getElementById('submit').style.display = 'none'
		fetch(scriptURL, { method: 'POST', body: new FormData(form)})
		  .then(response =>{swal({
			title: "Good job!",
			text: "You clicked the button!",
			icon: "success",
		  })
		  .then(location.reload())
		
		})
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
						document.getElementById('form').innerHTML = basic + form;
						MenuSelecetion()
						var date = new Date();
                        var currentDate = date.toISOString().slice(0,10);
                        document.getElementById('date').value = currentDate;
                        document.getElementById('sdate').value = new Date();
						document.getElementById('form').style.display = 'flex';
						setclick()
						fcc=[]
						var greet;
						if(document.getElementById('login').querySelector('time').innerText.includes('PM')){
							if(parseInt(document.getElementById('login').querySelector('time').innerText.slice(0,2)) <12 && parseInt(document.getElementById('login').querySelector('time').innerText.slice(0,2)) >9){
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
		
	function setclick(){

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
				document.getElementById('intime').style.display='block';
				document.getElementById('outtime').style.display='block';
				document.getElementById('inlabel').style.display='block';
				document.getElementById('outlabel').style.display='block';
				document.getElementById('Remarks').style.display='block';
				document.getElementById('date').style.display='block';
			//	document.getElementById('detail').style.paddingTop= '27%';
			//	document.getElementById('detail').style.top = '-20%';
				e.target.src= './img/setting.png';
				// if(screen.availWidth<500){
				// 	document.getElementById('detail').style.padding = '40% 10%';
				// 	document.getElementById('detail').style.top = '-7%';
				// }
			}
			else{
				document.getElementById('detail').children[0].style.display='none';
				document.getElementById('detail').children[1].style.display='none'
				document.getElementById('detail').children[2].style.display='none'
				document.getElementById('detail').children[3].style.display='none'
				document.getElementById('detail').children[4].style.display='none'
				document.getElementById('submit').style.display='none';
				document.getElementById('intime').style.display='none';
				document.getElementById('Remarks').style.display='none';
				document.getElementById('date').style.display='none';
				document.getElementById('outtime').style.display='none';
				document.getElementById('inlabel').style.display='none';
				document.getElementById('outlabel').style.display='none';
				document.getElementById('pass').style.display='block';
				document.getElementById('passgiven').style.display='block';
			//	document.getElementById('detail').style.top = '-83px';
			//	document.getElementById('detail').style.padding = '80% 10%';
			//	document.getElementById('passgiven').style.top = '-150px';
				e.target.src= './img/close.png';
				// if(screen.availWidth<500){
				// 	document.getElementById('detail').style.padding = '100% 10%';
				// 	document.getElementById('passgiven').style.top = '-160px';
				// }
			}
			document.getElementById('submit').style.display='block'
		}
	}	
	

///////////////////////// time Update Part //////////////////
function logallthings(){
	function logInSelect(){
		document.getElementById('loginTime').style.display='block'
		document.getElementById('loginTimel').style.display='block'
		document.getElementById('logoutTime').style.display='none'
		document.getElementById('logoutTimel').style.display='none'
		document.getElementById('logTimeSubmit').style.display='block'
		if(document.getElementById('infoattan') !== null){
			document.getElementById('infoattan').remove()
		}
		if(document.getElementById('attaSpan') !== null){
			document.getElementById('attaSpan').remove()
		}
	}
	function logOutSelect(){
		document.getElementById('logoutTime').style.display='block'
		document.getElementById('logoutTimel').style.display='block'
		document.getElementById('loginTimel').style.display='none'
		document.getElementById('loginTime').style.display='none'
		document.getElementById('logTimeSubmit').style.display='block'
		if(document.getElementById('infoattan') !== null){
			document.getElementById('infoattan').remove()
		}
		if(document.getElementById('attaSpan') !== null){
			document.getElementById('attaSpan').remove()
		}
		
	}
	function elseInSelect(){
		document.getElementById('loginTime').style.display='none'
		document.getElementById('logoutTime').style.display='none'
		document.getElementById('logoutTimel').style.display='none'
		document.getElementById('loginTimel').style.display='none'
		document.getElementById('logTimeSubmit').style.display='none';
		if(document.getElementById('infoattan') !== null){
			document.getElementById('infoattan').remove()
		}
		if(document.getElementById('attaSpan') !== null){
			document.getElementById('attaSpan').remove()
		}
		
		
	}
	
	document.getElementById('logproduct').onchange=()=>{
	  if(document.getElementById('logproduct').value=="Login"){logInSelect()}
	  else if(document.getElementById('logproduct').value=="Logout"){logOutSelect()}
	  else if(document.getElementById('logproduct').value=='Attandance Check'){
		document.getElementById('loginTime').style.display='none'
		document.getElementById('logoutTime').style.display='none'
		document.getElementById('logoutTimel').style.display='none'
		document.getElementById('loginTimel').style.display='none'
		document.getElementById('logTimeSubmit').style.display='none';
		var span = document.createElement('span')
		span.setAttribute('id','infoattan')
		span.setAttribute('style','display: block;margin-left: 10px;width: 90%;height: max-content;overflow: hidden;padding: 5px;')
		document.getElementById('timeUpdate').append(span)
		span.innerHTML+= infoAttandance;

		document.getElementById('Get List').onclick=()=>{
			if(document.getElementById('month').value!=='none' && document.getElementById('EmpName').value !== 'none'){
				if(document.getElementById('attaSpan') !== null){
					document.getElementById('attaSpan').remove()
				}
				const dbref = ref(db);
 var a = (new Date().getFullYear()+'-'+(parseInt(new Date().getMonth())+1)+'-'+new Date().getDate()).toString()
 var m = parseInt(document.getElementById('month').value)
 var emp = document.getElementById('EmpName').value
 get(child(dbref,"/Attandance/"+ emp+'/'+m)).then((snapshot)=>{
    if(snapshot.exists()){
        console.log('op')
        var all=[]  
      snapshot.forEach(function(childSnapshot) {
        all.push({
            date: childSnapshot.key,
            value: childSnapshot.val()
        })
      //  all.push(childSnapshot.val())
        console.log(all)
      });
	  var span = document.createElement('span')
	  span.setAttribute('id','attaSpan')
      span.innerHTML+= `<button id="download" style="
	  width: 120px;
	  height: 35px;
	  margin-bottom: 20px;
	  background: #525252;
	  color: #e5e5e5;
	  box-shadow: 2px 2px 10px #c9c9c9;
  ">Download</button><table id="table"><tr style="background-color:orange;font-size:20px"><th style="width: 15%;">Date</th><th>Total Log in & Out</th></table>`
	  document.getElementById('timeUpdate').append(span)
      for (let i = 0; i < all.length; i++) {
        var tr= document.createElement('tr')
        tr.innerHTML += `<td>${all[i].date}</td>`
        if(i % 2 !==0){tr.style.backgroundColor='lightgrey'}
        var td= document.createElement('td')
        td.style.textAlign='center'
        for (let ii = 0; ii < all[i].value.length; ii++) {
            td.innerHTML+= `Log in - ${all[i].value[ii].on},&nbsp; Log out - ${all[i].value[ii].off} &nbsp;&nbsp;&nbsp; <br>   &nbsp;&nbsp;&nbsp;   `
        }
        tr.append(td)
        document.getElementById('table').querySelector('tbody').append(tr)
      }
	  
      function exportTableToExcel(tableID, filename = ''){
        var downloadLink;
        var dataType = 'application/vnd.ms-excel';
        var tableSelect = document.getElementById(tableID);
        var tableHTML = tableSelect.outerHTML.replace(/ /g, '%20');
        
        // Specify file name
        filename = filename?filename+'.xls':'excel_data.xls';
        
        // Create download link element
        downloadLink = document.createElement("a");
        
        document.body.appendChild(downloadLink);
        
        if(navigator.msSaveOrOpenBlob){
            var blob = new Blob(['\ufeff', tableHTML], {
                type: dataType
            });
            navigator.msSaveOrOpenBlob( blob, filename);
        }else{
            // Create a link to the file
            downloadLink.href = 'data:' + dataType + ', ' + tableHTML;
        
            // Setting the file name
            downloadLink.download = filename;
            
            //triggering the function
            downloadLink.click();
        }
    }
	document.getElementById('download').onclick=()=>{
		exportTableToExcel('table',emp+' '+m+' Log In & Out Time')
	}
    
    }
    else{
        console.log('no')
    }
 })
			}
		}
	}
	  else{
		elseInSelect()
	  }
	}
}


function MenuSelecetion(){
document.getElementById('reportbtn').onclick=()=>{
	document.getElementById('form').innerHTML = document.getElementById('form').innerHTML.slice(0,1047)
	document.getElementById('form').innerHTML += form;
	setclick()
	MenuSelecetion()
	document.getElementById('sdate').value = new Date()
	var nameCon = document.getElementById('name').innerText;
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
}
document.getElementById('calenderbtn').onclick=()=>{
	document.getElementById('form').innerHTML = document.getElementById('form').innerHTML.slice(0,1047)
	document.getElementById('form').innerHTML += TimeUpdateThing;
	var name = document.getElementById('name').innerText.slice(1)
	if(name.includes('SOURAS')){
		document.getElementById('logproduct').innerHTML += `<option value="Attandance Check"> Attandance Check </option>`
	}
	logallthings()
	setclick()
	MenuSelecetion()
	document.getElementById('logTimeSubmit').onclick=()=>{
		var name = document.getElementById('name').innerText.slice(1)
		const dbref = ref(db);
		if(document.getElementById('logproduct').value=="Login"){
			document.getElementById('logTimeSubmit').innerText = 'Please Wait....';
			setTimeout(()=>{document.getElementById('logTimeSubmit').style.display='none'},1100)
			var a = new Date().getFullYear()+'-'+(parseInt(new Date().getMonth())+1)+'-'+new Date().getDate()
			var m = parseInt(new Date().getMonth())+1
			var all=[]
			console.log('start')
			function timeNow(i) {
				var d = new Date(),
				  h = (d.getHours()<10?'0':'') + d.getHours(),
				  m = (d.getMinutes()<10?'0':'') + d.getMinutes();
				i.value = h + ':' + m;
			  }
			  timeNow(document.getElementById('loginTime'))
			get(child(dbref,"Attandance/"+name+'/'+m+'/'+ a)).then((snapshot)=>{
				if(snapshot.exists()){
					
					snapshot.forEach(function(childSnapshot) {
						all.push(childSnapshot.val())
					  });
					  console.log(all)
					  if(all[all.length-1].off == null){
						alert('You Dont Have Previous Log Out Time')
						document.getElementById('logTimeSubmit').innerText = 'Submit'
							document.getElementById('logTimeSubmit').style.display='block'
					  }
					  else{
						set(ref(db, "Attandance/"+ name+'/'+m+'/'+ a+'/'+all.length),{
							on: document.getElementById('loginTime').value,
						})
						.then(()=>{
							alert('submit')
							document.getElementById('logTimeSubmit').innerText = 'Submit'
							document.getElementById('logTimeSubmit').style.display='block'
						})
					  }
				}
				else{
					set(ref(db, "Attandance/"+ name+'/'+m+'/'+ a+'/'+0),{
						on: document.getElementById('loginTime').value,
					})
					.then(()=>{
						alert('submit')
						document.getElementById('logTimeSubmit').innerText = 'Submit'
							document.getElementById('logTimeSubmit').style.display='block'
					})
				}
			 })
	 
	
		}
		else if(document.getElementById('logproduct').value=="Logout"){
			document.getElementById('logTimeSubmit').innerText = 'Please Wait....';
			setTimeout(()=>{document.getElementById('logTimeSubmit').style.display='none'},1100)
			var a = new Date().getFullYear()+'-'+(parseInt(new Date().getMonth())+1)+'-'+new Date().getDate()
			var m = parseInt(new Date().getMonth())+1
			var all=[]
			console.log('start out')
			function timeNow(i) {
				var d = new Date(),
				  h = (d.getHours()<10?'0':'') + d.getHours(),
				  m = (d.getMinutes()<10?'0':'') + d.getMinutes();
				i.value = h + ':' + m;
			  }
			  timeNow(document.getElementById('logoutTime'))
			get(child(dbref,"Attandance/"+ name+'/'+m+'/'+ a)).then((snapshot)=>{
				if(snapshot.exists()){
					snapshot.forEach(function(childSnapshot) {
						all.push(childSnapshot.val())
					  });
					  console.log(all[all.length-1].off)
						update(ref(db, "Attandance/"+ name+'/'+m+'/'+ a+'/'+(all.length-1)),{
							off: document.getElementById('logoutTime').value
						})
						.then(()=>{
							alert('submit')
							document.getElementById('logTimeSubmit').innerText = 'Submit'
							document.getElementById('logTimeSubmit').style.display='block'
							document.getElementById('logTimeSubmit').innerText = 'Submit'
						})
				}
				else{
					set(ref(db, "Attandance/"+ name+'/'+m+'/'+ a+'/'+0),{
						off: document.getElementById('logoutTime').value
					})
					.then(()=>{
						alert('submit')
						document.getElementById('logTimeSubmit').innerText = 'Submit'
						document.getElementById('logTimeSubmit').style.display='block'
						
					})
				}
			 })
		}
		else{
			alert('Select Option First')
		}
	}

}
document.getElementById('supportbtn').onclick=()=>{
	document.getElementById('form').innerHTML = document.getElementById('form').innerHTML.slice(0,1047)
	document.getElementById('form').innerHTML += ContactUs;
	setclick()
	MenuSelecetion()
}
document.getElementById('homebtn').onclick=()=>{
	document.getElementById('form').innerHTML = document.getElementById('form').innerHTML.slice(0,1047)
	document.getElementById('form').innerHTML += workInHand;
	setclick()
	MenuSelecetion()
}
}

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig1 = {
  apiKey: "AIzaSyC9inIiN2Y_2FdrSsfBM1UmQnvt5zJ9_z8",
  authDomain: "workspace-eeab4.firebaseapp.com",
  databaseURL: "https://workspace-eeab4-default-rtdb.firebaseio.com",
  projectId: "workspace-eeab4",
  storageBucket: "workspace-eeab4.appspot.com",
  messagingSenderId: "1084720198113",
  appId: "1:1084720198113:web:f5933597da8f610f4fe2a0",
  measurementId: "G-KFVL6YMYH2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig1);
const analytics = getAnalytics(app);

import {getDatabase, ref, get,  set, child, update, remove} 
from "https://www.gstatic.com/firebasejs/9.13.0/firebase-database.js";
const db = getDatabase();

