import React from 'react';
import '../styles/App.css';
import FruitTable from './components/FruitTable';
import FilterForm from './components/FilterForm';
import DynamicSearch from './components/DynamicSearch';

function App() {
  return (
    <div>
      <header>
        <h1>
          Fruit Filter
        </h1>
      </header>
      <body>
        <FilterForm />
        <FruitTable />
        <DynamicSearch />
      </body>
    </div>
  );
}

export default App;
