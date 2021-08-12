import { Typography, Link } from "@material-ui/core";
import React from "react";
import SettingsForm from "../components/settings/preferences-component";
import Constants from "../constants/constants";

export default function SettingsPage() {
  return (
    <>
      <SettingsForm />
      <br/>
      <br/>
      <Typography variant="caption" display="block" gutterBottom>
        <center>
          <br/><span>{Constants.appVersion}</span>
          </center>
      </Typography>
    </>
  );
}
