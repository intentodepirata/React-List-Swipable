// Realizar una lista de X, en la que se pueda agregar elementos
//Y eliminarlos

// borrar por id modificando el array por un bojeto con id y nombre

import { useState } from "react";
import {
  Button,
  Paper,
  Box,
  TextField,
  IconButton,
  Typography
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

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
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              gap: "16px",
              backgroundColor: "whitesmoke",
              width: "100%",
              mb: 2
            }}
            key={person.id}
          >
            <Typography sx={{ fontWeight: "bold", width: "100%" }}>
              {person.name}
            </Typography>
            <Box content="div" sx={{ display: "flex" }}>
              <IconButton
                aria-label="edit"
                onClick={() => handleEditar(person)}
              >
                <EditIcon color="warning" />
              </IconButton>
              <IconButton aria-label="delete" onClick={() => eraseItem(person)}>
                <DeleteIcon color="error" />
              </IconButton>
            </Box>
          </Box>
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
