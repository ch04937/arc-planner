import React from 'react';

type ColProps = {
  isOver: string;
  children: string;
};
const Col: React.FC<ColProps> = ({ isOver, children }) => {
  const className = isOver ? 'colhighlight-region' : 'col';
  return <div className={className}>{children}</div>;
};
export default Col;
