// This example requires Node 18 or the use of the `--experimental-fetch` flag

const getData = () => {
  fetch('https://pokeapi.co/api/v2/pokemon/', {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify({}),
  })
    .then((response) => response.json())
    .then(console.log);
};

getData();
