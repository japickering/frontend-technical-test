export async function fetchAll() {
  const res = await fetch(`https://www.fruityvice.com/api/fruit/all`);
  const data = await res.json();
  if (res.ok) {
    return JSON.stringify(data);
  } else {
    return `error ${res.status} on fetch request`;
  }
}

export async function search(str: string) {
  const res = await fetch(`https://www.fruityvice.com/api/fruit/${str}`);
  const data = await res.json();
  if (res.ok) {
    return JSON.stringify(data);
  } else {
    return `error on fetch request`;
  }
}
