import React from 'react';
import 'antd/dist/antd.css';
import './styles/App.css';

import FruitTable from './components/FruitTable';
import FilterForm from './components/FilterForm';
import DynamicSearch from './components/DynamicSearch';

function App() {
  return (
    <div className='wrapper'>
      <header className='header'>
        <h1>Fruityvice</h1>
        <DynamicSearch />
      </header>
      <main>
        <FilterForm />
        <FruitTable />
      </main>
    </div>
  );
}

export default App;
