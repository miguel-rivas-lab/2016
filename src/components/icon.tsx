import { ReactElement } from "react";

type IconProps = {
  glyph?: string,
}

function Icon({ glyph }: IconProps): ReactElement {
  const computedIcon = glyph ? `icon ${glyph}` : undefined;
  return (
    <span className={computedIcon} />
  );
}

export default Icon;