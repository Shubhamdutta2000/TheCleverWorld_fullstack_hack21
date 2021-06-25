//For adding multiple class in a component
import clsx from "clsx";

//MUI components
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

//Styling
import { useStyles } from "../../../../style/Home/Contact";
import Map from "../../../../assets/landing-page/map.png";
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import PhoneIcon from '@material-ui/icons/Phone';
function Footer() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.contact}>
        {/*Column-1 logo column */}
        <Typography variant="h4" className={classes.title}>
          Contact Us
        </Typography>
        <Grid container>
        <Grid item md={5}>
            <img src={Map} className={classes.map} alt="Map" />
          </Grid>
          <Grid item md={6}>
          <HomeWorkIcon color='#fff'/>
            <Typography varient="h5" className={classes.address}>
              Main Campus (Kolkata) HEAD OFFICE (College Street Campus) : 90/6A,
              Mahatma Gandhi Road, 1st Floor; Kolkata - 700 007 Rashbehari
              Branch Office : 162, S. P. Mukherjee Road, Rashbehari Avenue
              (Ground Floor), Kolkata - 700 026
            </Typography>
            <PhoneIcon color='#fff'/>
            <Typography varient="h5" className={classes.address}>
             Helpline: 1800 1800 18000
            </Typography>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Footer;
