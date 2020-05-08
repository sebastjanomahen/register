import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import GlavnaStran from "./views/GlavnaStran";
import Kontrole from "./views/Kontrole";
import Errors from "./views/Errors";
import Odpusti from "./views/Odpusti"
import Izpis from "./views/Izpis";
import Sprejemi from "./views/Sprejemi";
import MojProfil from "./views/MojProfil"

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/glavna-stran" />
  },
  {
    path: "/glavna-stran",
    layout: DefaultLayout,
    component: GlavnaStran
  },
  {
    path: "/moj-profil",
    layout: DefaultLayout,
    component: MojProfil
  },
  {
    path: "/odpusti",
    layout: DefaultLayout,
    component: Odpusti
  },
  {
    path: "/error",
    layout: DefaultLayout,
    component: Errors
  },
  {
    path: "/kontrole",
    layout: DefaultLayout,
    component: Kontrole
  },
  {
    path: "/izpis-podatkov",
    layout: DefaultLayout,
    component: Izpis
  },
  {
    path: "/sprejemi",
    layout: DefaultLayout,
    component: Sprejemi
  }
];
