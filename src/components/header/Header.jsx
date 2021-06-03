import React from "react";
import { AppBar, Button, Grid, Toolbar, Typography } from "@material-ui/core";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container justify="space-between">
          <Typography className="header-title" variant="h6">
            Учет успеваемости
          </Typography>
          <Grid justify="space-between" container xs={4}>
            <NavLink className="nav-link" to="/" exact>
              <Button className="nav-item">Преподаватели</Button>
            </NavLink>
            <NavLink
              activeClass="active"
              className="nav-link"
              to="/specialization-list"
              exact
            >
              <Button className="nav-item">Специальности</Button>
            </NavLink>
            <NavLink
              activeClass="active"
              className="nav-link"
              to="/group-list"
              exact
            >
              <Button className="nav-item">Группы</Button>
            </NavLink>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
