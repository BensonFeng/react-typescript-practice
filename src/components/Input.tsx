import React from "react";

type InputProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
export function Input(props: InputProps) {
  // const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   console.log(event);
  // };
  /* <input type="text" value={props.value} onChange={handleInputChange} />; */

  return (
    <input type="text" value={props.value} onChange={props.handleChange} />
  );
}
