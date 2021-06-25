import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  contact: {
    color: "#4D7178",
    padding: "3em 4em",
    marginTop: "2rem",
  },
  title: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "bolder",
    fontSize: "3rem",
    marginBottom: "4rem",
  },

  address: {
    color: "#fff",
  },

  map: {
    width: "60%",
    //marginLeft: "30%",
  },
}));
