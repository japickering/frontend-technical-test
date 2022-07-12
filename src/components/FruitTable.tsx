// TODO: tables columns should be sortable based on the API data
const FruitTable = () => (
	<table className="fruit-table">
      <thead>
         <tr>
            <th>Name</th>
            <th>Genus</th>
            <th>Calories</th>
            <th>Carbohydrates</th>
            <th>Sugar</th>
         </tr>
      </thead>
      <tbody>
         <tr>
            <td>Banana</td>
            <td>Musa</td>
            <td>5</td>
            <td>2</td>
            <td>1</td>
         </tr>
         <tr>
            <td>Apple</td>
            <td>Malus</td>
            <td>4</td>
            <td>2</td>
            <td>12</td>
         </tr>
      </tbody>
	</table>
);

export default FruitTable;