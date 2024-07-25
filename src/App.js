import React from "react";
import { Admin, EditGuesser, ListGuesser, Resource } from "react-admin";
import restProvider from "ra-data-simple-rest";
import { ChantierList } from "./components/chantier/ListChantier";
import { ChantierEdit } from "./components/chantier/ChantierEdit";
import { ChantierCreate } from "./components/chantier/CreateChantier";
import { FichierNavitteList } from "./components/fichierNavitte/listeFichierNavitte";

function App() {
  return (
    <Admin dataProvider={restProvider("http://localhost:8080")}>
      <Resource
        name="chantier"
        create={ChantierCreate}
        list={ChantierList}
        edit={ChantierEdit}
      />
      <Resource name="fichiernavitte" list={ListGuesser} />
      <Resource name="utilisateurs" list={ListGuesser} />
    </Admin>
  );
}

export default App;
