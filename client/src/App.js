import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Container, Grid, Button, TextField, Box } from '@mui/material';

const App = () => {
  const [description, setDescription] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(description);
    setDescription("");
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Grid
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" }
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
          container
          direction="row"
          justifyContent="space-around"
          alignItems="center"
        >
          <Grid item xs={9} height="100%">
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              value={description}
              onChange={(e) => {
                e.preventDefault();
                setDescription(e.target.value);
              }}
              sx={{
                width: "100% !important"
              }}
              autoFocus
            />
          </Grid>
          <Grid item xs={2} height="100% !important">
            <Button variant="contained" type="submit" sx={{
              width: "100% !important",
              height: "100% !important"
            }}>
              Add
            </Button>
          </Grid>
        </Grid>
        <Grid
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="center"
        >
          <Box>
            This is a todo
          </Box>
        </Grid>
      </Container>
    </React.Fragment>
  )
}

export default App;
