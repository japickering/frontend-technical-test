// Mock up sortable table
export const data = [
  {
    id: 1,
    name: 'Banana',
    genus: 'Musa',
    calories: 5,
    carbohydrates: 2,
    sugar: 1,
  },
  {
    id: 2,
    name: 'Apple',
    genus: 'Malus',
    calories: 4,
    carbohydrates: 2,
    sugar: 12,
  },
];

export const columns = [
  {
    name: 'Name',
    selector: (row: { name: string }) => row.name,
    sortable: true,
  },
  {
    name: 'Genus',
    selector: (row: { genus: string }) => row.genus,
    sortable: true,
  },
  {
    name: 'Calories',
    selector: (row: { calories: number }) => row.calories,
    sortable: true,
  },
  {
    name: 'Carbohydrates',
    selector: (row: { carbohydrates: number }) => row.carbohydrates,
    sortable: true,
  },
  {
    name: 'Sugar',
    selector: (row: { sugar: number }) => row.sugar,
    sortable: true,
  },
];
