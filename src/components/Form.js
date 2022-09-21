import React, { useState } from "react";
function Form({ setList }) {

  const prevState = {
    name: "",
  };

  const [formData, setFormData] = useState(prevState);

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:4000/workouts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ ...formData, movements: [] }),
    })
      .then((r) => r.json())
      .then((data) => setList((list) => [...list, data]));

    setFormData(prevState);
  };
  return (
    <form onSubmit={handleSubmit} style={{
      display: "block",
      width: "50%",
      marginLeft: 305,
      borderStyle:"hidden",
      fontWeight: "bold",
      marginTop: "10px",

      fontSize: 25,
      textAlign: "center",
      padding: 100,
      



    }}>
      <h1 style={{marginBottom: 50}}>Create A Name For Your Workout</h1>
      <ul style={{marginBottom: 50}}><h2>Then Go to List of Exercises to Add an Exercise to Your Workout</h2></ul>
      <div>
        <label
          htmlFor="name"
          style={{
            borderStyle: "solid",
            backgroundColor: "#fc5904",
            padding: "10px",
            marginLeft: -3,
          
          }}
        >
          Workout Name
        </label>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          style={{ padding: "10px" }}
        />
      </div>
      <br />

      <button style={{backgroundColor: "#fc5904", padding: "8px"}} >Submit</button>
    </form>
  );
}

export default Form;

// create a counter component
// start at 0 and increment by one using setInterval