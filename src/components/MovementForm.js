import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MovementForm({ setList }) {
  const prevState = {
    name: "",
    sets: "",
    reps: "",
    priority: "",
    restTime: "",
  };
  const [formData, setFormData] = useState(prevState);
  const [workout, setWorkout] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/workouts/${id}`)
      .then((r) => r.json())
      .then((data) => setWorkout(data));
  }, []);

  

  const handleChange = (e) => {
    e.preventDefault()
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:4000/workouts/${id}/`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ movements: [...workout.movements, formData] }),
    })
      .then((r) => r.json())
      .then((newW) =>
        setList((list) =>
          list.map((w) => {
            if (w.id === newW.id) return newW;
            return w;
          })
        )
      );
  };

  return (
    <>
      <h1 style={{ textAlign: "center", paddingBottom: 50 }}>
        Create Your Own Exercise{" "}
      </h1>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "block",
          width: "100%",
          marginLeft: 25,

          fontWeight: "bold",
          marginTop: "10px",
          marginBottom: "10px",
          fontSize: 25,
          textAlign: "center",
        }}
      >
        <div>
          <label
            htmlFor="name"
            style={{
              borderStyle: "solid",
              backgroundColor: "#fc5904",
              padding: "10px",
              marginLeft:-3
            }}
          >
            Exercise Name
          </label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{ padding: "10px" }}
          />
        </div>
        <br />
        <div>
          <label
            htmlFor="sets"
            style={{
              borderStyle: "solid",
              backgroundColor: "#fc5904",
              padding: "10px",
              marginLeft:6,
            }}
          >
            Number of Sets
          </label>
          <input
            name="sets"
            value={formData.sets}
            onChange={handleChange}
            style={{ padding: "10px" }}
          />
        </div>
        <br />
        <div>
          <label
            htmlFor="reps"
            style={{
              borderStyle: "solid",
              backgroundColor: "#fc5904",
              padding: "10px",
              marginLeft: 17
            }}
          >
            Number of Reps
          </label>
          <input
            name="reps"
            value={formData.reps}
            onChange={handleChange}
            style={{ padding: "10px" }}
          />
        </div>
        <br />
 

        <div style={{marginBottom: 20}}>
          <label
            htmlFor="rest"
            style={{
              borderStyle: "solid",
              backgroundColor: "#fc5904",
              padding: "10px",
              marginLeft: 90
            }}
          >
            Rest Time (in seconds)
          </label>
          <input
            name="restTime"
            value={formData.restTime}
            onChange={handleChange}
            style={{ padding: "10px" }}
          />
        </div>

        <button style={{backgroundColor: "#fc5904", padding: "8px"}} >Submit</button>
      </form>
    </>
  );
}

export default MovementForm;
