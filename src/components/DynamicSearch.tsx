import React, { useState } from 'react';
import { search } from '../libs/search';
import { Button } from 'antd';

const DynamicSearch = () => {
  const [query, setQuery] = useState('');

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const str = event.target.value;
    setQuery(str);
  };

  return (
    <form>
      <div className='form-group'>
        <input
          type='search'
          id='search'
          name='search'
          className='form-control'
          aria-label='search'
          placeholder='Search fruit..'
          value={query}
          onChange={inputHandler}
        />
      </div>
      <Button type='primary' onClick={async () => console.log(await search(query))}>
        Search
      </Button>
    </form>
  );
};

export default DynamicSearch;
