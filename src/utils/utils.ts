export function format(first: string, middle: string, last: string): string {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

export interface IPlant {
  plant: string,
  plantInformation: IPlantInformation[]
}

export interface IPlantInformation {
  icon: string,
  text: string
}

export const plants: IPlant[] = [
  {
  plant: "Aloe Vera",
  plantInformation: [
    {
      icon: "bi bi-droplet-half",
      text: "Regelmäßig gießen"
    },
    {
      icon: "bi bi-circle-half",
      text: "Halbschatten"
    },
    {
      icon: "bi bi-flower2",
      text: "Halbgroße Pflanze"
    },
    {
      icon: "bi bi-heart",
      text: "Benötigt viel Liebe"
    },
    {
      icon: "bi bi-snow",
      text: "Verträgt Temparaturen bis zu -10°C"
    },
  ]
},
{
  plant: "Grünlilie",
  plantInformation: [
    {
      icon: "bi bi-droplet-half",
      text: "Regelmäßig gießen"
    },
    {
      icon: "bi bi-circle-half",
      text: "Halbschatten"
    },
    {
      icon: "bi bi-flower2",
      text: "Halbgroße Pflanze"
    },
    {
      icon: "bi bi-heart",
      text: "Benötigt viel Liebe"
    },
    {
      icon: "bi bi-thermometer-low",
      text: "Verträgt Temparaturen bis zu -10°C"
    },
  ]
},
{
  plant: "Efeu",
  plantInformation: [
    {
      icon: "bi bi-droplet-half",
      text: "Regelmäßig gießen"
    },
    {
      icon: "bi bi-circle-half",
      text: "Halbschatten"
    },
    {
      icon: "bi bi-flower2",
      text: "Halbgroße Pflanze"
    },
    {
      icon: "bi bi-heart",
      text: "Benötigt viel Liebe"
    },
    {
      icon: "bi bi-thermometer-low",
      text: "Verträgt Temparaturen bis zu -10°C"
    },
  ]
},
{
  plant: "Kletterfeige",
  plantInformation: [
    {
      icon: "bi bi-droplet-half",
      text: "Regelmäßig gießen"
    },
    {
      icon: "bi bi-circle-half",
      text: "Halbschatten"
    },
    {
      icon: "bi bi-flower2",
      text: "Halbgroße Pflanze"
    },
    {
      icon: "bi bi-heart",
      text: "Benötigt viel Liebe"
    },
    {
      icon: "bi bi-thermometer-low",
      text: "Verträgt Temparaturen bis zu -10°C"
    },
  ]
}]
