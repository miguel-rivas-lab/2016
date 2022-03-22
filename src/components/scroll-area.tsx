import { ReactElement, ReactNode } from "react";
import classNames from 'classnames';
import { colorsType } from '../types/colors';

type ScrollAreaProps = {
  children?: ReactNode,
  color?: colorsType,
  addClass?: String,
  horizontal?: boolean,
  vertical?: boolean,
}

function ScrollArea({ children, color, addClass, horizontal, vertical }: ScrollAreaProps): ReactElement {
  const computedClasses = classNames(color, addClass, "scroll-area", { "no-horizontal": !horizontal, "no-vertical": !vertical });
  return (
    <div className={computedClasses}>
      {children}
    </div>
  );
}

ScrollArea.defaultProps = {
  color: "royal-purple",
  horizontal: true,
  vertical: true,
}

export default ScrollArea;