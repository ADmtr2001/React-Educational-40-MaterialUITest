import { Button, Container, Typography } from "@mui/material";
import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export default function Create() {
  return (
    <Container>
      <Typography
        variant='h6'
        color='textSecondary'
        component='h2'
        gutterBottom
        sx={{}}
      >
        Create a New Note
      </Typography>

      <Button
        type='submit'
        color='secondary'
        variant='contained'
        onClick={() => console.log("you clicked me")}
        endIcon={<KeyboardArrowRightIcon />}
        sx={{}}
      >
        Submit
      </Button>
    </Container>
  );
}
