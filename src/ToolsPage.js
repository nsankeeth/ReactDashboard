import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import SideMenu from "./SideMenu";
import Navbar from "./Navbar";
import Card from "./Card";

// render calculator widget
function Calculator() {
  const styles = {
    container: {
      margin: 10,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    },
    expr: {
      width: 200,
      height: 25,
      textAlign: "end",
      borderStyle: "solid",
      borderWidth: 1,
      borderColor: "black",
      marginBottom: 10,
    },
    row: {
      display: "flex",
      width: 200,
      justifyContent: "space-between",
      marginBottom: 10,
    },
    button: { width: 40 },
  };

  const [expr, setExpr] = useState("");

  function buttonClick(e) {
    const value = e.target.innerHTML;
    if (value === "Del") {
      setExpr(expr.slice(0, -1));
    } else if (value === "Clr") {
      setExpr("");
    } else if (value === "=") {
      setExpr(eval(expr) + "");
    } else {
      setExpr(expr + value);
    }
  }

  return (
    <div style={styles.container}>
      <div style={styles.expr}>
        <text>{expr}</text>
      </div>
      <div>
        <div style={styles.row}>
          <button style={styles.button} onClick={buttonClick}>
            {"("}
          </button>
          <button style={styles.button} onClick={buttonClick}>
            {")"}
          </button>
          <button style={styles.button} onClick={buttonClick}>
            Del
          </button>
          <button style={styles.button} onClick={buttonClick}>
            /
          </button>
        </div>

        <div style={styles.row}>
          <button style={styles.button} onClick={buttonClick}>
            7
          </button>
          <button style={styles.button} onClick={buttonClick}>
            8
          </button>
          <button style={styles.button} onClick={buttonClick}>
            9
          </button>
          <button style={styles.button} onClick={buttonClick}>
            *
          </button>
        </div>

        <div style={styles.row}>
          <button style={styles.button} onClick={buttonClick}>
            4
          </button>
          <button style={styles.button} onClick={buttonClick}>
            5
          </button>
          <button style={styles.button} onClick={buttonClick}>
            6
          </button>
          <button style={styles.button} onClick={buttonClick}>
            -
          </button>
        </div>

        <div style={styles.row}>
          <button style={styles.button} onClick={buttonClick}>
            1
          </button>
          <button style={styles.button} onClick={buttonClick}>
            2
          </button>
          <button style={styles.button} onClick={buttonClick}>
            3
          </button>
          <button style={styles.button} onClick={buttonClick}>
            +
          </button>
        </div>

        <div style={styles.row}>
          <button style={styles.button} onClick={buttonClick}>
            Clr
          </button>
          <button style={styles.button} onClick={buttonClick}>
            0
          </button>
          <button style={styles.button} onClick={buttonClick}>
            .
          </button>
          <button style={styles.button} onClick={buttonClick}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}

// render notes widget
function Notes() {
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    },
    note: {
      width: 300,
      borderStyle: "solid",
      borderWidth: 1,
      borderColor: "black",
      marginTop: 20,
    },
    input: {
      width: 300,
      height: 25,
      marginTop: 20,
    },
  };

  const exampleNotes = new Map();
  exampleNotes.set(
    "0",
    "Angela Lewis, FRSP case manager, met with Ms. George at her home on 10/24/2019 at 10:00am for her scheduled monthly home visit. "
  );
  exampleNotes.set(
    "1",
    "Ms. George was home alone at the time of the home visit as she reported that her children were at school. "
  );

  const [notes, setNotes] = useState(exampleNotes);

  const [newNote, setNewNote] = useState("");

  return (
    <div style={styles.container}>
      {Array.from(notes).map(([key, value]) => (
        <div>
          <div style={styles.note} key={key}>
            {value}
          </div>
          <button
            onClick={() => {
              var newNotes = new Map(notes);
              newNotes.delete(key);
              setNotes(newNotes);
            }}
          >
            Delete
          </button>
        </div>
      ))}
      <div>
        <input
          style={styles.input}
          type="text"
          value={newNote}
          onChange={(event) => {
            setNewNote(event.target.value);
          }}
        />
        <button
          onClick={() => {
            var newNotes = new Map(notes);
            newNotes.set(uuidv4(), newNote);
            setNotes(newNotes);
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
}

// renders tools page
function ToolsPage() {
  return (
    <div>
      <SideMenu activeTab={"tools"} />
      <div className="p-2 dashboard-container">
        <Navbar />
        <div>
          <div className="row">
            <div className="col-md-6 mb-2">
              <Card title={"Calculator"}>
                <Calculator />
              </Card>
            </div>
            <div className="col-md-6 mb-2 center">
              <Card title={"Simple Note"}>
                <Notes />
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToolsPage;
