import { Button, ButtonGroup } from "@chakra-ui/react";

function Cwm_Button({ ...props }) {
  return (
    <Button colorScheme="yellow" size="sm" onClick={props.onClick}>
      {props.children}
    </Button>
  );
}

export default Cwm_Button;
