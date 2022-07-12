import React from 'react';
import { Button } from 'antd';
import { searchQuery } from '../libs/search';

const search = 'banana';

// TODO: live search; list of fruit should begin filtering as the user types
const DynamicSearch = () => (
  <form>
    <div className='form-group'>
      <label htmlFor='search'>Search by name</label>
      <input type='text' className='form-control' name='search' id='search' />
    </div>
    <Button
      type='primary'
      onClick={() => {
        searchQuery(search);
      }}>
      Submit
    </Button>
  </form>
);

export default DynamicSearch;
