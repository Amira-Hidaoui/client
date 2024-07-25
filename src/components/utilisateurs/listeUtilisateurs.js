import { Datagrid, DeleteButton, List, TextField } from "react-admin";

export const UtilisateursList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <TextField source="nom" />
      <DeleteButton />
    </Datagrid>
  </List>
);
