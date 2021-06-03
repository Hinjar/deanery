import React from "react";
import { Button, Grid, Paper } from "@material-ui/core";
import { NavLink } from "react-router-dom";

export const ItemsList = (title, items, path, addPath) => {
  return () => {
    return (
      <div>
        <Grid alignItems="center" container justify="space-between">
          <h1>{title}</h1>
          <NavLink className="link" to={addPath} exact>
            <Button variant="outlined" color="primary" color="primary">
              <b>Добавить</b>
            </Button>
          </NavLink>
        </Grid>

        {items.map((e) => {
          return (
            <NavLink className="link" to={path} exact>
              <Paper className="list-item">{e}</Paper>
            </NavLink>
          );
        })}
      </div>
    );
  };
};
