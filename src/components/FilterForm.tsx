import React from 'react';
import { Button } from 'antd';
import { searchQuery } from '../libs/search';

const FilterForm = () => {
  return (
    <form>
      <div>
        <span>
          <label htmlFor='calories-min'>Minimum calories</label>
          <input name='calories-min' id='calories-min' />
          <label htmlFor='calories-max'>Maximum calories</label>
          <input name='calories-max' id='calories-max' />
        </span>
      </div>
      <div>
        <Button
          type='primary'
          onClick={() => {
            searchQuery('mango');
          }}>
          Fetch data
        </Button>
      </div>
    </form>
  );
};

export default FilterForm;
