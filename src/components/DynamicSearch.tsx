import React, { useState } from 'react';
import { Button } from 'antd';

const DynamicSearch = (): JSX.Element => {
  const [query, setQuery] = useState('');

  // TODO: play the CORS acceptable headers guessing game
  const search = (query: string) => {
    fetch(`http://www.fruityvice.com/api/fruit/${query}`, {
      method: 'GET',
      headers: {
        contentType: 'application/json',
      },
    })
      .then((res) => {
        return res.json;
      })
      .then((data) => {
        console.log('data: ', data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
          placeholder='Search..'
          value={query}
          onChange={inputHandler}
        />
      </div>
      <Button type='primary' onClick={(event: React.MouseEvent) => search(query)}>
        Search FruityVice
      </Button>
    </form>
  );
};

export default DynamicSearch;
