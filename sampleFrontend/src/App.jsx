import React from "react";
import axios from "axios";
const App = () => {
  const handleClick = async () => {
    const respose = await axios
      .post("https://sample-backend-sigma.vercel.app/post", {
        message: "test",
      })
      .then((response) => {
        console.log(response.data.msg);
      });
  };
  return (
    <div>
      <button onClick={handleClick}>post</button>
    </div>
  );
};

export default App;
