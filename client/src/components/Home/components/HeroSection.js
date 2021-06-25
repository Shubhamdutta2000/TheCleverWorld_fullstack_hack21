import { Button, Grid, Paper, Typography } from "@material-ui/core";
import { useHistory, Link } from "react-router-dom";
import React from "react";
import HeroImage from "../../../assets/landing-page/vaccine.png";
import { useStyles } from "../../../style/Home/heroStyling";

const HeroSection = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Grid container justify="space-around">
      <Grid item md={6} className={classes.leftGrid}>
        <Typography className={classes.leftHeading} variant="h3" component="h2">
          Easy Jaber
        </Typography>
        <Typography className={classes.leftPara} variant="h5" component="p">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
          commodi eaque recus andae eveniet exm dolor sit amet, consectetur
          adipisicing elit. Mollitia commodi eaque recus andae eveniet e m dolor
          sit amet, consectetur adipisicing elit. Mollitia commodi eaque recus
          andae eveniet e <br />
        </Typography>
        <Link to="/Register" style={{ textDecoration: "none", color: "#fff" }}>
          <Button
            type="submit"
            variant="contained"
            className={classes.register}
          >
            Login As Authority
          </Button>
        </Link>
        <Link to="/Login" style={{ textDecoration: "none", color: "#fff" }}>
          <Button type="submit" variant="contained" className={classes.login}>
            Login As User
          </Button>
        </Link>
      </Grid>

      <Grid item md={5}>
        <img className={classes.imageIllustration} src={HeroImage} />
      </Grid>
    </Grid>
  );
};

export default HeroSection;
