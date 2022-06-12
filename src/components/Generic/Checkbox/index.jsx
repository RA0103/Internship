import React from "react";
import { AntCheckbox} from "./styles";

export const Checkbox = ({
  children,
  onClick,
  height,
  width,
  mr,
  ml,
  mb,
  mt,
  onChange,
  size,
}) => {
  return (
    <AntCheckbox
      mr={mr}
      ml={ml}
      mb={mb}
      mt={mt}
      size={size}
      onChange={onChange}
      onClick={onClick}
    >
      {children}
    </AntCheckbox>
  );
};
export default Checkbox;
