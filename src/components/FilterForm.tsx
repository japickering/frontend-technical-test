import React from 'react';
import { fetchAll } from '../libs/search';
import { Button } from 'antd';

// TODO: get data and filter results table
const FilterForm = () => {
  return (
    <form>
      <Button type='primary' onClick={async () => console.log(await fetchAll())}>
        Search all
      </Button>
    </form>
  );
};

export default FilterForm;
