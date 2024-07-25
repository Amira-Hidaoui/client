import { Create, SimpleForm, TextInput } from "react-admin";

export const CreateUtilisateurs = () => (
  <Create>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="nom" />
    </SimpleForm>
  </Create>
);