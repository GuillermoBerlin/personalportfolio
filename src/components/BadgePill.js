import React from 'react';
import Badge from 'react-bootstrap/Badge';

export default function BadgePill(props) {
  const pill = {
    padding: "6px 17px",
    fontWeight: '500',
  };

  return (
    <div>
      <Badge pill bg="secondary" className="mt-2 mb-2" style={pill}>
        {props.label}
      </Badge>
    </div>
  );
}
