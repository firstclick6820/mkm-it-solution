import React from "react";
import styled from "styled-components";

export default function FullButton({ title, action, border }) {
  return (
    <Wrapper
    disableRipple
      className="animate pointer radius8"
      onClick={action ? () => action() : null}
      border={border}
    >
      {title}
    </Wrapper>
  );
}

const Wrapper = styled.button`
  border: none;
  background-image: linear-gradient(to left, #870000, #190a05);
  width: 100%;
  padding: 1em;
  transition: box-shadow 300ms ease-in-out;
  outline: none;
  box-shadow: 0 60px 80px rgba(0,0,0,0.60), 0 45px 26px rgba(0,0,0,0.14);
  color: #FEBEBE;
  :hover {
    background-image: linear-gradient(to right, #870000, #190a05);
    transform: scale(1.015);
    box-shadow: 0 1px 1px rgba(0,0,0,0.15), 0 2px 2px rgba(0,0,0,0.15), 0 4px 4px rgba(0,0,0,0.15), 0 8px 8px rgba(0,0,0,0.15);

  }
`;

