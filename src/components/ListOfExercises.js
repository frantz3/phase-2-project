import React from "react";
import Item from "./Exercise";


function List({ list }) {
  
  // const [items, setItems] = useState([]);
  
  // useEffect(() => {
  //   fetch("http://localhost:4000/workouts")
  //   .then((r) => r.json())
  //   .then((items) => setItems(items));
  // }, []);
  
 
  const listOfJSX = list.map((item) => <Item  {...item} />);

  return (
    <>
      <div
        style={{
          textAlign: "center",
          marginLeft: 200,
          marginRight: 200,
          fontWeight: "semi bold",
          marginTop: "10px",
          marginBottom: "10px",
          fontSize: 25,
        }}
        >
      

        <h3 style={{color:"#fc5904"}}>Traditional 6-Day Push, Pull & Legs Routine</h3>
        <li>Day 1 – Chest, Shoulder and Triceps</li>
        <li>Day 2 – Back, Biceps and Abs</li>
        <li>Day 3 – Legs</li>
        <li>Day 4 – Chest, Shoulder and Triceps</li>
        <li>Day 5 – Back, Biceps and Abs</li>
        <li>Day 6 – Legs</li>
        <li>Day 7 – OFF</li>
        <h3 style={{color:"#fc5904"}}>Push/Pull/Legs Workout Schedule</h3>
  
        <li>

        Newer lifters should follow the routine in an every-other-day split:
        </li>
        <li>

        Push/Rest/Pull/Rest/Legs/Rest (Repeat). Intermediate lifters should
        perform the routine in a 3-on/1-off split: Push/Pull/Legs/Rest (Repeat).
        </li>
        <li>

        Advanced lifters should perform the routine in a 6-on/1-off manner:
        </li>
        <li>

        Push/Pull/Legs/Push/Pull/Legs/Rest (Repeat).
        </li>
      </div>
      <h3 key={listOfJSX}>{listOfJSX}</h3>
      
    </>
  );
}

export default List;
