import { Container } from "@material-ui/core";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div style={{ color: "#fff", background: "black", padding: "0.4rem 0" }}>
      <Container>
        © Copyrights
        <Link to="/home" style={{ textDecoration: "none", color: "skyblue" }}>
          EasyJaber
        </Link>
        2021. All rights reserved.
      </Container>
    </div>
  );
}

export default Footer;
