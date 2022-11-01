        // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
        import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-analytics.js";
        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries
        
        // Your web app's Firebase configuration
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        const firebaseConfig = {
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
        const app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(app);

        import {getDatabase, ref, get,  set, child, update, remove} 
        from "https://www.gstatic.com/firebasejs/9.13.0/firebase-database.js";
const db = getDatabase();
const name = document.getElementById('name');
const date = document.getElementById('date');

///////////// Insert Data ///////////////

     document.getElementById('Save').onclick=()=>{
        set(ref(db, "Attandance/"+ date.value),{
            name: name.value,
            date: date.value
        })
        .then(()=>{
            alert('submit')
        })
     }

/////////////// Update Data ////////////

document.getElementById('Insert').onclick=()=>{
    update(ref(db, "Attandance/"+ date.value),{
        name: name.value,
    })
}

/////////////// Get Data ////////////

document.getElementById('Get').onclick=()=>{
 const dbref = ref(db);
 var a = (new Date().getFullYear()+'-'+(parseInt(new Date().getMonth())+1)+'-'+new Date().getDate()).toString()
 console.log(a)
 get(child(dbref,"/Attandance/GOURAB")).then((snapshot)=>{
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
      document.body.innerHTML+= `<table id="table"><tr style="background-color:orange;font-size:20px"><th style="width: 15%;">Date</th><th>Total Log in & Out</th></table>`
      for (let i = 0; i < all.length; i++) {
        var tr= document.createElement('tr')
        tr.innerHTML += `<td>${all[i].date}</td>`
        if(i % 2 !==0){tr.style.backgroundColor='lightgrey'}
        var td= document.createElement('td')
        td.style.textAlign='center'
        for (let ii = 0; ii < all[i].value.length; ii++) {
            td.innerHTML+= `Log in - ${all[i].value[ii].on},&nbsp; Log out - ${all[i].value[ii].off} &nbsp;&nbsp;&nbsp; |   &nbsp;&nbsp;&nbsp;   `
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
    exportTableToExcel('table','table')
    }
    else{
        console.log('no')
    }
 })

}

/////////////// Delete Data ////////////

document.getElementById('Delete').onclick=()=>{

}
