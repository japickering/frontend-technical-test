import React from 'react';
import { Button } from 'antd';
import { searchQuery } from '../libs/search';

const FilterForm = () => {
  return (
    <div>
      <div>
        <span>
          <label htmlFor='calories-min'>Minimum calories</label>
          <input name='calories-min' id='calories-min' />
          <label htmlFor='calories-max'>Maximum calories</label>
          <input name='calories-max' id='calories-max' />
        </span>
        <span>
          <label htmlFor='carbs-min'>Minimum carbohydrates</label>
          <input name='carbs-min' id='carbs-min' />
          <label htmlFor='carbs-max'>Maximum carbohydrates</label>
          <input name='carbs-max' id='carbs-max' />
        </span>
        <span>
          <label htmlFor='sugar-min'>Minimum sugar</label>
          <input name='sugar-min' id='sugar-min' />
          <label htmlFor='sugar-max'>Maximum sugar</label>
          <input name='sugar-max' id='sugar-max' />
        </span>
        <span>
          <label htmlFor='family'>Minimum sugar</label>
          <select name='family' id='family'>
            <option>-</option>
            <option>Malus</option>
            <option>Musa</option>
          </select>
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
    </div>
  );
};

export default FilterForm;
