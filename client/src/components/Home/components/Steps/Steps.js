import React from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";

import { getSteps, getStepContent } from "./stepsValue";
import { useStyles } from "../../../../style/Home/Steps";
import Plag from "../../../../assets/landing-page/vaccine2.png";

export default function VerticalLinearStepper() {
  const classes = useStyles();
  const steps = getSteps();

  return (
    <>
      <Grid container className={classes.root}>
        <Grid md={7}>
          <img className={classes.leftImg} src={Plag} alt="Plagarism" />
        </Grid>
        <Grid md={5}>
          <Typography component="h3" variant="h4" className={classes.heading}>
            How It Works?
          </Typography>
          <Stepper orientation="vertical">
            {steps.map((label, index) => (
              <Step active={true} key={label}>
                <StepLabel>
                  <Typography
                    component="h3"
                    variant="h4"
                    className={classes.stepLabel}
                  >
                    {label}
                  </Typography>
                </StepLabel>
                <StepContent>
                  <Typography className={classes.stepContent}>
                    {getStepContent(index)}
                  </Typography>
                </StepContent>
              </Step>
            ))}
          </Stepper>
        </Grid>
      </Grid>
    </>
  );
}
