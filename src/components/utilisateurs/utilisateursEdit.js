import { Edit, SimpleForm, TextInput } from "react-admin";

export const UtilisateursEdit = () => (
  <Edit>
    <SimpleForm>
      {/* <TextInput source="id" /> */}
      <TextInput source="nom" />
    </SimpleForm>
  </Edit>
);