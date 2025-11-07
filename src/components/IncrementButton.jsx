import {Typography, Button} from "@mui/material";
import {useState, useEffect} from "react";

export const IncrementButton = () => {

  const [count, setCount] = useState(0)
  const [double, setDouble] = useState(0)

  useEffect(() => {
    setDouble(() => count * 2);
  }, [count]);

  return (
    <>
      <Typography variant="h6">count: {count}</Typography>
      <Typography variant="h6">double count: {double}</Typography>
      <Button
        variant="contained"
        onClick={() => setCount((c) => c + 1)}
      >
        click
      </Button>
    </>
  )
}