import React from 'react'; 
import PropTypes from "prop-types";
import Ticket from './Ticket';

function PageOne(props){
  return (
    <h1>{props.sentence}</h1>
  )
}

Ticket.propTypes = {
  sentence: PropTypes.string
};

export default PageOne;