import React, { useState } from "react";

const Profile = (props) => {
  const [count, setCount] = useState(0);
  const [count2,setCount2] = useState(0); // Unused, but fine if you plan to use later


  return (
    <>
      <h1>Profile Function Component {props.name}</h1>
      <button onClick={() => {
        setCount(count + 1)
        setCount2(count2+2)
      }}>Increment ctr</button>
      <h5>Count: {count} {count2}</h5>
    </>
  );
};

export default Profile;
