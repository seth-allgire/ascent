import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
// import "Mulish-SemiBold" from "./assets/fonts/Mulish-SemiBold.ttf";

export default function PackageCard({
  idx,
  name,
  description,
  cardBackInfo,
  buttonText,
}) {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <section className="flip-card-front">
          <div className="card-content">
            <p className="card-title">{name}</p>
            <p className="card-description">{description}</p>
          </div>
        </section>
        <section className="flip-card-back">
          <div className="card-content">
            <p className="card-title">{name}</p>
            <p>{cardBackInfo}</p>
            <div className="button-container">
              <button className="card-button">{buttonText}</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
