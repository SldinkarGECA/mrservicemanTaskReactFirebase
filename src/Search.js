import React, { useState } from "react";
import Card from "./Card";
import database from "./firedb";
import { O2A } from "object-to-array-convert";
const Cards = () => {
  const [search, setSearch] = useState("");
  const renderProfile = (personName) => {
    return (
      <Card
        name={personName.name}
        email={personName.email}
        source={personName.source}
      />
    );
  };
  let filter = [];
  const renderdata = () => {
     database.ref().on("value", (data) => {
      var ob = O2A(data);
      // console.log(ob);
      filter = ob.filter((personName) => {
        return (
          personName.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
        );
      });
      console.log(filter);
      filter.forEach((personName) => {
        return renderProfile(personName);
      });
      
    });
    return filter.map((personName) => {
      return (
        <Card
          name={personName.name}
          email={personName.email}
          source={personName.source}
        />
      );
    });
  };

  return (
    <div className="searchBox">
      <br></br>
      <br></br>
      <input
        className="Input"
        type="text"
        placeholder="Enter name of the person"
        onChange={(e) => setSearch(e.target.value)}
      ></input>

      <div className="row">{renderdata()}</div>
    </div>
  );
};

export default Cards;

// const filteredProfiles = database.ref().on("value", (data) => {
//   const ob = Object.values(data);
//   return ob.filter((personName) => {
//     return personName.name;
//   });
// });

// const [data, setData] = useState([]);
// useEffect(() => {
//   database.ref().on("value", (data) => {
//     setData(O2A(data));
//   });
// });

// const data = database.ref().on("value", (data) => {
//   // console.log(data.val());
//   return data.val().filter();

//   // O2A(data);
// });

/* { Object.values(filteredProfiles).map((personName) => {
         return renderProfile(personName);
        })} */

// const renderProfile = (personName) => {
//   // console.log(personName.name);
//   ReactDOM.render(
//     <Card
//       name={personName.name}
//       source={personName.source}
//       email={personName.email}
//     />,
//     document.getElementById("root")
//   );
// };

// let filter = [];
// const renderdata = () => {
//   database.ref().on("value", (data) => {
//     var ob = O2A(data);
//     // console.log(ob);
//     filter = ob.filter((personName) => {
//       return personName.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
//     });
//     console.log(filter);
//     return filter.map((personName) => {
//       return (
//         <Card
//           name={personName.name}
//           email={personName.email}
//           source={personName.source}
//         />
//       );
//     });
//   });
// };
