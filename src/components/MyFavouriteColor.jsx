import {useState} from "react";
import {Button, Typography} from "@mui/material"

export const MyFavouriteColor = () => {

  const [color, setColor] = useState("pink");
  const colors = ["red", "orange", "yellow", "green", "blue", "pink"]

  return (
    <>
      <Typography variant="h3">My favorite color is <span style={{color}}>{color}</span>!</Typography>

      {colors.map((c) => (
        <Button
          key={c}
          sx={{
            color: c
          }}
          onClick={() => setColor(c)}
        >
          {c}
        </Button>
      ))}
    </>
  )
}