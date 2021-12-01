import React from "react";
import { Button, Container, Typography } from "@material-ui/core";
import AcUnitIcon from "@mui/icons-material/AcUnit";

export default function Create() {
  return (
    <Container>
      <Typography
        variant='h6'
        color='textSecondary'
        component='h2'
        gutterBottom
      >
        Create a New Note
      </Typography>

      <Button
        type='submit'
        color='secondary'
        variant='contained'
        onClick={() => console.log("you clicked me")}
      >
        Submit
      </Button>
    </Container>
  );
}
