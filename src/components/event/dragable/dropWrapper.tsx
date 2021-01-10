import React from 'react';
import { useDrop } from 'react-dnd';
import { ITEM_TYPE } from './types';

type DropWrapperProps = {
  onDrop: string;
  children: string;
  teamId: string;
};

const DropWrapper: React.FC<DropWrapperProps> = ({ onDrop, children, teamId }) => {
  const [{ isOver }, drop] = useDrop({
    accept: ITEM_TYPE,
    // drop: (item, monitor) => onDrop(item, monitor, teamId),
    collect: (monitor) => ({ isOver: monitor.isOver() }),
  });
  return (
    <div ref={drop} className={'drop-wrapper'}>
      {/* {React.cloneElement(children, { isOver })} */}
    </div>
  );
};
export default DropWrapper;
