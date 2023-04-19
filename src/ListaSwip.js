// Realizar una lista de X, en la que se pueda agregar elementos
//Y eliminarlos

// borrar por id modificando el array por un bojeto con id y nombre

import { useState } from "react";
import { Button, Paper, Box, TextField, Typography } from "@mui/material";

import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions
} from "react-swipeable-list";

import "react-swipeable-list/dist/styles.css";
import "./index.css";

export default function App() {
  const [lista, setLista] = useState([]);
  const [item, setItem] = useState("");
  const [itemConID, setItemConID] = useState({});

  function handleNewItem(e) {
    setItem(e.target.value);
  }

  function handleEditar(person) {
    setItemConID(person);
    setItem(person.name);
  }

  function addItem(item) {
    if (Object.keys(itemConID).length !== 0) {
      console.log("actualizando");
      itemConID.name = item;
      const itemActualizado = itemConID;

      const itemsActualizados = lista.map((estudiante) =>
        estudiante.id === itemConID.id ? itemActualizado : estudiante
      );

      setLista(() => itemsActualizados);
      setItemConID({});
      setItem("");
    } else {
      console.log("creando");
      setLista((lista) => [...lista, { id: new Date().getTime(), name: item }]);

      setItemConID({});
      setItem("");
    }
  }

  function eraseItem(person) {
    const nuevaLista = lista.filter((id) => id.id !== person.id);
    setLista(nuevaLista);
  }
  // console.log(lista);
  // console.log(item);
  // console.log(itemConID);
  const leadingActions = (person) => (
    <LeadingActions>
      <SwipeAction onClick={() => handleEditar(person)}>Editar</SwipeAction>
    </LeadingActions>
  );

  const trailingActions = (person) => (
    <TrailingActions>
      <SwipeAction destructive={true} onClick={() => eraseItem(person)}>
        Eliminar
      </SwipeAction>
    </TrailingActions>
  );
  return (
    <Paper sx={{ maxWidth: "600px", margin: "0 auto", p: 4 }}>
      <Box sx={{ textAlign: "center" }}>
        <h1>Mi lista</h1>
        <h2>
          {lista.length < 1
            ? "Agrega una persona a la lista"
            : "Total personas: " + lista.length}
        </h2>

        {lista.map((person) => (
          <SwipeableList key={person.id}>
            <SwipeableListItem
              //   importamos las props del deslizador leading action (son las funciones que ejecutaremos cuando haga el efecto de deslizar)
              //  leadingAction para el swipe hacia la derecha y trailingAction para el swipe hacia la izquierda
              leadingActions={leadingActions(person)}
              trailingActions={trailingActions(person)}
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  width: "100%",
                  backgroundColor: "whitesmoke",
                  py: "16px"
                }}
              >
                {person.name}
              </Typography>
            </SwipeableListItem>
          </SwipeableList>
        ))}

        <TextField
          variant="outlined"
          size="small"
          fullWidth
          label="Introduzca Nombre"
          onChange={handleNewItem}
          type="text"
          value={item}
        />
        <Button
          sx={{ mt: 2 }}
          fullWidth
          variant="contained"
          onClick={() => addItem(item)}
        >
          {itemConID.id ? "Editar nombre" : "Agregar nuevo Nombre"}
        </Button>
      </Box>
    </Paper>
  );
}
