import React from 'react';
import {Content} from './Content';

export const Card = (props) => {
  return (
      <div className="card" style={{width: '18rem'}}>
        {props.children}
        <Content/>
      </div>
  );
};

