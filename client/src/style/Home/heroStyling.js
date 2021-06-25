import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  imageIllustration: {
    width: "94%",
    height: "94%",
    marginTop: "2rem",
  },
  leftGrid: {
    marginTop: "5rem",
  },
  leftHeading: {
    fontSize: "4.2rem",
    fontWeight: 900,
    color: "rgba(26,32,44,var(--tw-text-opacity))",
    lineHeight: "1.25",
    textAlign: "left",
  },
  leftPara: {
    marginTop: "1rem",
    marginBottom: "1rem",
    fontSize: "1.16rem",
    opacity: 0.8,
  },
  register: {
    padding: "0.5rem 2rem 0.5rem 2rem",
    width: "16rem",
    margin: "0.5rem 0 1rem 0",
    borderRadius: "40px",
    marginRight: "1rem",
    fontSize: "1rem",
    color: "#fff",
    fontWeight: "bold",
    backgroundColor: "#3E714F",
    border: "4px solid #3E714F",
    "&:hover": {
      backgroundColor: "transparent",
      color: "#fff",
    },
  },
  login: {
    padding: "0.6rem 2rem 0.6rem 2rem",
    margin: "0.5rem 0 1rem 0",
    width: "15rem",
    borderRadius: "40px",
    fontSize: "1rem",
    backgroundColor: "transparent",
    color: "#fff",
    fontWeight: "bold",
    border: "4px solid #3E714F",
    "&:hover": {
      backgroundColor: "#3E714F",
      color: "#fff",
    },
  },
  display: {
    display: "none",
  },
}));
