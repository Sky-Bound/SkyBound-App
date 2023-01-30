import React from "react";

const DateInput = props => (
    <form onSubmit={props.changeDate}>
      Select a Date: 
      <input type="date"/>
      <input type="submit" />
    </form>
  );
  
export default DateInput;