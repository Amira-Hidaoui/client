import { Create, DateInput, SimpleForm, TextInput } from "react-admin";

export const CreateFichierNavitte = () => (
  <Create>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="NFn" />
      <TextInput source="facture" />
      <DateInput source="dateFacture" />
      <TextInput source="nomFournisseur" />
    </SimpleForm>
  </Create>
);
