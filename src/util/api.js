/* eslint-disable no-console */
// TODO: protect tokens from the front end
export const getTableData = async () =>
  fetch(
    `https://api.airtable.com/v0/appscy3GIeokSQk5U/Table%201?api_key=keyuR1RkwbWEkW9HA`
  )
    .then(data => data.json())
    .catch(err => ({ err }));

// Data consists of an array of objects
// key: fields, object with keys
// field keys: user, url, animalName, animalPrice
export const addTableRow = async data => {
  return fetch(
    `https://api.airtable.com/v0/appscy3GIeokSQk5U/Table%201`,
    {
      method: 'POST',
      body: JSON.stringify({
        typecast: true,
        records: data
      }),
      headers: {
        Authorization: `Bearer keyuR1RkwbWEkW9HA`,
        'Content-Type': 'application/json'
      }
    }
  )
    .then(data => data.json())
    .catch(console.error);
};
