import { Container , Typography} from "@material-ui/core";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div style={{ color: "#fff", padding: "0.4rem 0" }}>
      <Container>
       <Typography variant='subtitle2' align='center'>        © Copyrights
        <Link to="/home" style={{ textDecoration: "none", color: "skyblue" }}>
          EasyJaber
        </Link>
        2021. All rights reserved.</Typography>
      </Container>
    </div>
  );
}

export default Footer;
