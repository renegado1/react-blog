import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ChipsComponent from "../components/favorites/chips-component";

const useStyles = makeStyles({
  root: {},
});

export default function FavoritesPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h4>Escolha as preferências sob as quais suas postagens preferidas serão exibidas</h4>
      <ChipsComponent />
    </div>
  );
}
