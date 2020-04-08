import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import UserGridStyling from './UserGrid.module.css';

//Change later to fetching from indexedDB
import { users } from "../../data";

import * as actionTypes from '../../store/actions/actionTypes';
import * as actions from '../../store/actions/actions';
import { connect } from 'react-redux';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  })
);

const UserGrid = (props: any) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={3}
        direction="column"
        justify="flex-start"
        alignItems="stretch"
      >
        <Grid
            item
            style={{
              display: "flex",
              flexDirection: "row",
              justifyItems: "center",
              alignItems: "stretch"
            }}
          >
            <Paper className={classes.paper}>Id</Paper>
            <Paper className={classes.paper}>Fname</Paper>
            <Paper className={classes.paper}>lname</Paper>
            <Paper className={classes.paper}>age</Paper>
            <Paper className={classes.paper}>email</Paper>
          </Grid>
        {users.map((user, id) => (
          <Grid
            item
            style={{
              display: "flex",
              flexDirection: "row",
              justifyItems: "center",
              alignItems: "center"
            }}
            className={UserGridStyling.UserGrid}
            onClick={()=>props.select(user)}
          >
            <Paper className={classes.paper}>{user.id}</Paper>
            <Paper className={classes.paper}>{user.data.fName}</Paper>
            <Paper className={classes.paper}>{user.data.lName}</Paper>
            <Paper className={classes.paper}>{user.data.age}</Paper>
            <Paper className={classes.paper}>{user.data.email}</Paper>
          </Grid>
        ))}
        {/* <Grid item xs={12}>
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid> */}
      </Grid>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    selected: state.selected,
    selectedUser: state.user
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    select: (user: any) => dispatch(actions.selectUser(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserGrid);