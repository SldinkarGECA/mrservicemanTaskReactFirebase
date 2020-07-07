import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAM4vY3ZLwAZZ6z5asOAzRI3MybwZ8IJX8",
  authDomain: "taskfirebasemrserviceman.firebaseapp.com",
  databaseURL: "https://taskfirebasemrserviceman.firebaseio.com",
  projectId: "taskfirebasemrserviceman",
  storageBucket: "taskfirebasemrserviceman.appspot.com",
  messagingSenderId: "493774408766",
  appId: "1:493774408766:web:42cb5814eae732401b956f",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.database();

// var filter = [];
// const renderdata =db.ref().on("value", (data) => {
//     var ob = O2A(data);
//     // console.log(ob);
//     filter = ob.filter((personName) => {
//       return personName.name;
//       // .toLowerCase().indexOf(search.toLowerCase()) !== -1;
//     });
//     // console.log(filter);
//     // return filter.map((personName) => {
//     //   return (
//     //     <Card
//     //       name={personName.name}
//     //       email={personName.email}
//     //       source={personName.source}
//     //     />
//     //   );
//     // });
//     return filter;
//   });

// console.log(Object.values(renderdata));
export default db;
