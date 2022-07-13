import DataTable from 'react-data-table-component';
import { data, columns } from '../constants/table';

// TODO: pass data schema from API results
export default function FruitTable() {
  return <DataTable title='fruit table' data={data} columns={columns} highlightOnHover pointerOnHover />;
}
