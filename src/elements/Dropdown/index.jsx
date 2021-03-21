import React from 'react';
import { StyledDropdown, DropdownWrapper, Label } from './Dropdown.styled';

// Component
const DropDown = ({ onSelect, options }) => {
  //  Don't render if options not available
  if (!options || !options.length) return null;

  return (
    <DropdownWrapper>
      <Label>Sort by</Label>
      <StyledDropdown
        defaultValue={options[0]}
        options={options}
        isSearchable={false}
        onChange={onSelect}
      />
    </DropdownWrapper>
  );
};

DropDown.defaultProps = {
  defaultValue: {},
  options: [],
  onSelect: () => {},
};

export default DropDown;
