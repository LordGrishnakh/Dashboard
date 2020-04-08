import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { Switch } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import EditStyling from "./Edit.module.css";

import { connect } from 'react-redux';

export const EditContainer = (props: any) => {
  const [permission, setPermission] = useState(false);

  return (
    <Card className={EditStyling.Main}>
      <Card className={EditStyling.EditCard}>
        <div className={EditStyling.userAva}></div>
        <Typography variant="h6">User Avatar</Typography>
      </Card>
      <Card className={EditStyling.EditUser}>
      <Typography variant="h3" style={{ borderBottom: "1px solid blck" }}>
          EDIT USER
        </Typography>
        <Grid
            item
            style={{
              display: "flex",
              flexDirection: "column",
              justifyItems: "center",
              alignItems: "flex-start"
            }}
          >
            <Paper>Id: {props.selectedUser.id || ''}</Paper>
            <Paper>Fname: {props.selectedUser.data.fName || ''}</Paper>
            <Paper>lname: {props.selectedUser.data.lName || ''}</Paper>
            <Paper>age: {props.selectedUser.data.age || 0}</Paper>
            <Paper>email: {props.selectedUser.data.email || ''}</Paper>
          </Grid>
      </Card>
      <Card className={EditStyling.EditPermissions}>
        <Typography variant="h3" style={{ borderBottom: "1px solid blck" }}>
          PERMISSIONS
        </Typography>
        <Switch onClick={()=>setPermission(!permission)} />

        {permission ? (
          <Typography variant="h5">granted</Typography>
        ) : (
          <Typography variant="h5">denied</Typography>
        )}
      </Card>
    </Card>
  );
};

const mapStateToProps = (state: any) => {
  return {
    selected: state.selected,
    selectedUser: state.user
  };
};

export default connect(mapStateToProps, null)(EditContainer);
