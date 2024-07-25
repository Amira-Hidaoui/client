import { Create, SimpleForm, TextInput } from "react-admin";

export const ChantierCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="nom" />
    </SimpleForm>
  </Create>
);
