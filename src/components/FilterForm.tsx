import React from 'react';
import { Button } from 'antd';
import { searchQuery } from '../libs/search';

const FilterForm = () => {
  return (
    <form>
      <div className='form-group'>
        <label htmlFor='calories-min'>Minimum calories</label>
        <input type='text' name='calories-min' id='calories-min' />
      </div>
      <div className='form-group'>
        <label htmlFor='calories-max'>Maximum calories</label>
        <input type='text' name='calories-max' id='calories-max' />
      </div>
      <Button
         type='primary'
         onClick={() => {
         searchQuery('all');
         }}>
         Fetch data
      </Button>
    </form>
  );
};

export default FilterForm;
