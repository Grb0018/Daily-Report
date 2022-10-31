
//       // Import the functions you need from the SDKs you need
//         import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
//         import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-analytics.js";
//         // TODO: Add SDKs for Firebase products that you want to use
//         // https://firebase.google.com/docs/web/setup#available-libraries
        
//         // Your web app's Firebase configuration
//         // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//         const firebaseConfig = {
//           apiKey: "AIzaSyC9inIiN2Y_2FdrSsfBM1UmQnvt5zJ9_z8",
//           authDomain: "workspace-eeab4.firebaseapp.com",
//           databaseURL: "https://workspace-eeab4-default-rtdb.firebaseio.com",
//           projectId: "workspace-eeab4",
//           storageBucket: "workspace-eeab4.appspot.com",
//           messagingSenderId: "1084720198113",
//           appId: "1:1084720198113:web:f5933597da8f610f4fe2a0",
//           measurementId: "G-KFVL6YMYH2"
//         };
        
//         // Initialize Firebase
//         const app = initializeApp(firebaseConfig);
//         const analytics = getAnalytics(app);

//         import {getDatabase, ref, get,  set, child, update, remove} 
//         from "https://www.gstatic.com/firebasejs/9.13.0/firebase-database.js";
// const db = getDatabase();


// const name = document.getElementById('name');
// const date = document.getElementById('date');

// ///////////// Insert Data ///////////////

// //      document.getElementById('Save').onclick=()=>{
// //         set(ref(db, "Attandance/"+ date.value),{
// //             name: name.value,
// //             date: date.value
// //         })
// //         .then(()=>{
// //             alert('submit')
// //         })
// //      }

// // /////////////// Update Data ////////////

// // document.getElementById('Insert').onclick=()=>{
// //     update(ref(db, "Attandance/"+ date.value),{
// //         name: name.value,
// //     })
// // }

// // /////////////// Get Data ////////////

// // document.getElementById('Get').onclick=()=>{
// //  const dbref = ref(db);
// //  get(child(dbref,"Attandance/"+ date.value)).then((snapshot)=>{
// //     if(snapshot.exists()){
// //         name.value = snapshot.val().name;
// //         date.value = snapshot.val().date;
// //     }
// //  })
// // }



// document.getElementById('logTimeSubmit').onclick=()=>{
//     const dbref = ref(db);
//     if(document.getElementById('logproduct').value=="Login"){
//         var a = new Date().getFullYear()+'-'+(parseInt(new Date().getMonth())+1)+'-'+new Date().getDate()
//         var all=[]
//         console.log('start')
//         get(child(dbref,"Attandance/"+ date.value)).then((snapshot)=>{
//             if(snapshot.exists()){
                
//                 snapshot.forEach(function(childSnapshot) {
//                     all.push(childSnapshot.val())
//                   });
//                   console.log(all)
//                   if(all[all.length-1].off !== null){
//                     set(ref(db, "Attandance/"+ a+'/'+all.length),{
//                         on: document.getElementById('loginTime').value,
//                     })
//                     .then(()=>{
//                         alert('submit')
//                     })
//                   }
//                   else{
//                     alert('You Dont Have Previous Log in')
//                   }
//             }
//             else{
//                 set(ref(db, "Attandance/"+ a+'/'+0),{
//                     on: document.getElementById('loginTime').value,
//                 })
//                 .then(()=>{
//                     alert('submit')
//                 })
//             }
//          })
 

//     }
// }


