import PropTypes from "prop-types";

const Mensaje = ({ message, color }) => {
  return <h1 style={{color: color}}> {message}</h1>;
};

Mensaje.propTypes = {
    color: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
  };
  
export default Mensaje;
