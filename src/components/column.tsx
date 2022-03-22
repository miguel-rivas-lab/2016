import { ReactElement, ReactNode } from "react";
import { validateSize } from "nano-grid/modules/columns-manager.js";
import classNames from 'classnames';

type ColumnProps = {
  children?: ReactNode,
  size: string,
  addClass?: string,
  tableElement: boolean,
}

function Column({ children, size, addClass, tableElement }: ColumnProps): ReactElement {
  const computedClasses = classNames("column", addClass, validateSize(size).class);
  let computedStyle = validateSize(size).width ? {
    flexBasis: validateSize(size).width,
    maxWidth: validateSize(size).width,
  } : {};
  if (validateSize(size).height) {
    computedStyle["height"] = validateSize(size).height
  }

  const computedRole = classNames({ "cell": tableElement });
  return (
    <div className={computedClasses} role={computedRole} style={computedStyle}>
      {children}
    </div>
  );
}

Column.defaultProps = {
  tableElement: false,
  size: ""
}

export default Column;