import { Button, Container, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const field = {
  marginTop: "20px",
  marginBottom: "20px",
  display: "block",
};

export default function Create() {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setTitleError(false);
    setDetailsError(false);

    if (title === "") {
      setTitleError(true);
    }

    if (details === "") {
      setDetailsError(true);
    }

    if (title && details) {
      console.log(title, details);
    }
  };

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

      <form noValidate autoComplete='off' onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          label='Note Title'
          variant='outlined'
          color='secondary'
          fullWidth
          required
          sx={field}
          error={titleError}
        />

        <TextField
          onChange={(e) => setDetails(e.target.value)}
          label='Note Title'
          variant='outlined'
          color='secondary'
          multiline
          rows={4}
          fullWidth
          required
          sx={field}
          error={detailsError}
        />

        <Button
          type='submit'
          color='secondary'
          variant='contained'
          endIcon={<KeyboardArrowRightIcon />}
          sx={{}}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
}
