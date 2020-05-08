/*
NavBar imena in in navigacija
*/

export default function() {
  return [
    {
      title: "Glavna stran",
      to: "/glavna-stran",
      htmlBefore: '<i class="material-icons">edit</i>',
      htmlAfter: ""
    },
    {
      title: "Sprejemi",
      htmlBefore: '<i class="material-icons">vertical_split</i>',
      to: "/sprejemi",
    },
    {
      title: "Odpusti",
      htmlBefore: '<i class="material-icons">note_add</i>',
      to: "/odpusti",
    },
    {
      title: "Kontrole",
      htmlBefore: '<i class="material-icons">view_module</i>',
      to: "/kontrole",
    },
    {
      title: "Izpis podatkov",
      htmlBefore: '<i class="material-icons">table_chart</i>',
      to: "/izpis-podatkov",
    },
    {
      title: "Moj profil",
      htmlBefore: '<i class="material-icons">person</i>',
      to: "/moj-profil",
    },
    {
      title: "Stran v izdelavi",
      htmlBefore: '<i class="material-icons">error</i>',
      to: "/error",
    }
  ];
}
