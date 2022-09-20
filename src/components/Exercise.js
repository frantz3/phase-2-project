import React from "react";
import { useHistory } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import ListGroup from "react-bootstrap/ListGroup";

function Item({ movements, name, id,   }) {
  const history = useHistory();
  
  const listOfMovements = movements.map((moveObj) => {
    
   
    return (
      <ListGroup
        style={{
          flexDirection: "row",
          display: "flex",
          width: "100%",
          marginLeft: -15,
          textAlign: "center",
          fontWeight: "bold",
          marginTop: "10px",
          marginBottom: "10px",
          fontSize: 25,
        }}
      >
        <ListGroup.Item style={{ textAlign: "center", width: "30%" }}>
          {moveObj.name}
        </ListGroup.Item>

        <ListGroup.Item style={{ textAlign: "center", width: "30%" }}>
          <h3 style={{ fontWeight: "bold", fontSize: 25 }}>sets x reps</h3>
          <h3 style={{ fontWeight: "bold", fontSize: 25 }}>
            {moveObj.sets}x{moveObj.reps}
          </h3>
        </ListGroup.Item>

        <ListGroup.Item style={{ textAlign: "center", width: "30%" }}>
          <h3 style={{ fontWeight: "bold", fontSize: 25, }}>rest</h3>
          <h3 style={{ fontWeight: "bold", fontSize: 25 }}>
            {moveObj.restTime} seconds{" "}
          </h3>
        </ListGroup.Item>
      
      </ListGroup>
    );
  });

  return (
    <>
      <Accordion
        style={{ width: "80%", margin: "auto" }}
        defaultActiveKey={["1"]}
        alwaysOpen
      >
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <span style={{ color: "#fc5904", marginLeft: 400, fontSize: 40, fontWeight:"Semi Bold" }}>
              {name}
            </span>
          </Accordion.Header>
          <Accordion.Body>
            <ol>{listOfMovements}</ol>
            <button
              style={{ marginLeft: 320, padding: 8, backgroundColor: "#fc5904" }}
              onClick={() => history.push(`/exercises/${id}/edit`)}
            >
              Add New Activity
            </button>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}

export default Item;
