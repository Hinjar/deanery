import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { Route } from "react-router";
import { Home } from "../pages/Home";
import { Header } from "../components/header/Header";
import { TeachersList } from "../components/teachers-list/TeachersList";
import { Grid } from "@material-ui/core";
import { TeacherInfo } from "../pages/TeacherInfo";
import { ItemsList } from "../hoc/ItemsList";
import { SpecializationInfo } from "../pages/SpecializationInfo";
import { GroupInfo } from "../pages/GroupInfo";
import { AddTeacherForm } from "../components/add-teacher/AddTeacherForm";
import { AddDisciplineForm } from "../components/add-discipline/AddDisciplineForm";
import { AddGroupForm } from "../components/add-group/AddGroupForm";
import { AddSpecializationForm } from "../components/add-specialization/AddSpecializationForm";
import { DistInfo } from "../pages/DistInfo";

export const Routers = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Header />
        <Grid className="education-container" container justify={"center"}>
          <Grid xs={6}>
            <Switch>
              <Route
                component={ItemsList(
                  "Список преподавателей",
                  Array(6).fill(1),
                  "/teacher-info",
                  "/add-teacher"
                )}
                exact
                path="/"
              />
              <Route
                component={ItemsList(
                  "Список специальностей",
                  Array(8).fill(2),
                  "/specialization-info",
                  "/add-specialization"
                )}
                exact
                path="/specialization-list"
              />
              <Route
                component={ItemsList(
                  "Список групп",
                  Array(8).fill("ИСП-202"),
                  "/group-info",
                  "/add-group"
                )}
                exact
                path="/group-list"
              />
              <Route
                component={ItemsList(
                  "Список дисциплин",
                  Array(8).fill("Биология"),
                  "/disc-info",
                  "/disc-add"
                )}
                exact
                path="/disc-list"
              />
              <Route component={TeacherInfo} exact path="/teacher-info" />
              <Route component={DistInfo} exact path="/disc-info" />
              <Route
                component={SpecializationInfo}
                exact
                path="/specialization-info"
              />
              <Route component={GroupInfo} exact path="/group-info" />
              <Route component={AddTeacherForm} exact path="/add-teacher" />
              <Route
                component={AddDisciplineForm}
                exact
                path="/add-discipline"
              />
              <Route component={AddDisciplineForm} exact path="/disc-add" />
              <Route
                component={AddSpecializationForm}
                exact
                path="/add-specialization"
              />
              <Route component={AddGroupForm} exact path="/add-group" />
            </Switch>
          </Grid>
        </Grid>
      </BrowserRouter>
    </React.Fragment>
  );
};
