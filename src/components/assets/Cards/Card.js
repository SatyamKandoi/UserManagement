import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardGrid from "./CardGrid";


//Contains All the Cards Structure


export default function Cards({ setFormtype }) {
  return (
    <Card sx={{ width: 300  }}>
      <CardContent>
        <div className="newthree">
          <CardGrid setFormtype={setFormtype} />
        </div>
      </CardContent>
    </Card>
  );
}
