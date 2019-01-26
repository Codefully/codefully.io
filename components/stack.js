import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import LogoRails from "../images/logo-rails.png";
import LogoPostgres from "../images/logo-postgresql.png";
import LogoHighcharts from "../images/logo-highcharts.png";
import LogoNode from "../images/logo-nodejs.png";
import LogoReact from "../images/logo-react.png";
import LogoRedux from "../images/logo-redux.png";
import LogoAws from "../images/logo-aws.png";
import LogoHeroku from "../images/logo-heroku.png";
import LogoMaterial from "../images/logo-materialui.png";
import LogoBootstrap from "../images/logo-bootstrap.png";

const styles = () => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    padding: 50
  },
  img: {
    margin: 20
  }
});

const Stack = ({ classes }) => (
  <div className={classes.root}>
    <img
      className={classes.img}
      style={{ width: 90 }}
      src={LogoAws}
      alt="AWS"
    />
    <img
      className={classes.img}
      style={{ width: 150 }}
      src={LogoHeroku}
      alt="Heroku"
    />
    <img
      className={classes.img}
      style={{ width: 120 }}
      src={LogoNode}
      alt="Node"
    />
    <img
      className={classes.img}
      style={{ width: 130 }}
      src={LogoReact}
      alt="React"
    />
    <img
      className={classes.img}
      style={{ width: 130 }}
      src={LogoRedux}
      alt="Redux"
    />
    <img
      className={classes.img}
      style={{ width: 130 }}
      src={LogoRails}
      alt="Ruby on Rails"
    />
    <img
      className={classes.img}
      style={{ width: 190 }}
      src={LogoPostgres}
      alt="PostgreSQL"
    />
    <img
      className={classes.img}
      style={{ width: 80 }}
      src={LogoMaterial}
      alt="Material UI"
    />
    <img
      className={classes.img}
      style={{ width: 100 }}
      src={LogoBootstrap}
      alt="Bootstrap"
    />
    <img
      className={classes.img}
      style={{ width: 210 }}
      src={LogoHighcharts}
      alt="Highcharts"
    />
  </div>
);

Stack.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Stack);
