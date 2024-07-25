import { Edit, SimpleForm, TextInput, DateInput } from "react-admin";

export const fichierNavitteEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="NFn" />
      <TextInput source="facture" />
      <DateInput source="dateFacture" />
      <TextInput source="nomFournisseur" />
    </SimpleForm>
  </Edit>
);