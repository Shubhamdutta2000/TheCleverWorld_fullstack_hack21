import * as React from 'react';

const ICON = `M 10,30
A 20,20 0,0,1 50,30
A 20,20 0,0,1 90,30
Q 90,60 50,90
Q 10,60 10,30 z`;

const pinStyle = {
  fill: '#8ec29b',
  stroke: '#8ec29b',
};

function Pin(props) {
  const { size = 100 } = props;

  return (
    <svg
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      style={pinStyle}
    >
      <path d={ICON} />
    </svg>
  );
}

export default React.memo(Pin);
