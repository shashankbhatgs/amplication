import * as React from "react";
import {
  Create,
  SimpleForm,
  NumberInput,
  ReferenceInput,
  SelectInput,
  CreateProps,
} from "react-admin";

declare const INPUTS: React.ReactElement[];

export const COMPONENT_NAME = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>{INPUTS}</SimpleForm>
    </Create>
  );
};
