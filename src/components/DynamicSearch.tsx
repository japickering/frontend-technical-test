import React from 'react';
import { Button } from 'antd';
import { searchQuery } from '../libs/search';

const search = 'banana';

// TODO: live search; list of fruit should begin filtering as the user types
const DynamicSearch = () => (
  <form>
    <div className='form-group'>
      <input type='text' id='search' name='search' className='form-control' placeholder='Search by name..' />
    </div>
    <Button
      type='primary'
      onClick={() => {
        searchQuery(search);
      }}>
      Search
    </Button>
  </form>
);

export default DynamicSearch;
