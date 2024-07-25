import {
  Datagrid,
  DeleteButton,
  List,
  TextInput,
  DateInput,
} from "react-admin";

export const FichierNavitteList = () => (
  <List>
    <Datagrid>
      <TextInput source="id" />
      <TextInput source="NFn" />
      <TextInput source="facture" />
      <DateInput source="dateFacture" />
      <TextInput source="nomFournisseur" />
      <DeleteButton />
    </Datagrid>
  </List>
);
