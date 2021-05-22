export function fetchCall(url, state) {
  console.log(url);
  return fetch(`${url}`)
    .then((res) => res.json())
    .then((data) => state(Object.entries(data)))
    .catch((err) => console.log(err));
}
