import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    background: "#fff",
    //width: "100%",
    boxShadow: "none",
  },
  easyJaber: {
    marginTop: "1rem",
    width: "14rem",
    height: "5rem",
  },
  height: {
    height: "4.5rem",
    background: "#CDDDD1",
    boxShadow: "none",
  },
  imgLogo: {
    width: "8em",
  },
  menuButton: {
    marginRight: theme.spacing(3),
    color: "black",
  },
  title: {
    flexGrow: 1,
    margin: "2rem 0.5rem",
  },
  navItems: {
    color: "#457D58",
    flexGrow: 1,
    fontWeight: 600,
    fontSize: "1.42rem",
    margin: "0 1.2rem",
    "&:hover": {
      color: "#7530ff",
      borderBottom: "2px solid #7530ff",
    },
  },
  flex: {
    display: "flex",
  },
  space: {
    margin: "0 0 0 2.1rem",
  },

  mobilenavItems: {
    color: "#4D7178",
    flexGrow: 0,
    fontWeight: 600,
    fontSize: "1rem",
    padding: "1.2rem 0",
  },
  list: {
    width: 210,
  },
  fullList: {
    width: "auto",
  },
}));
