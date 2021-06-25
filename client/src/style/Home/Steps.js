import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: "5.4rem",
    marginBottom: "4rem",
  },
  leftImg: {
    width: "100%",
    marginTop: "1rem",
    height:'100%'
  },
  heading: {
    textAlign: "left",
    fontSize: "2.4rem",
    fontWeight: "900",
    color: "#fff",
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
  stepLabel: {
    fontSize: "1.6rem",
    color: "#fff",
    fontWeight: "800",
  },
}));
