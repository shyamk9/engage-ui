import * as React from 'react';
import Item, {Position} from './Item';
import * as styles from './Connected.scss';

export interface Props {
  left?: React.ReactNode,
  right?: React.ReactNode,
  children?: React.ReactNode,
  style?: React.CSSProperties,
}

export interface State {
  focused?: Position | null,
}

export default function Connected({children, left, right, style}: Props) {
  if (left == null && right == null) {
    return React.Children.only(children);
  }

  const leftConnectionMarkup = left
    ? <Item position={Position.Left}>{left}</Item>
    : null;

  const rightConnectionMarkup = right
    ? <Item position={Position.Right}>{right}</Item>
    : null;

  return (
    <div className={styles.Connected} style={style}>
      {leftConnectionMarkup}
      <Item position={Position.Primary}>
        {children}
      </Item>
      {rightConnectionMarkup}
    </div>
  );
}
