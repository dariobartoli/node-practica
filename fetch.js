/* fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => console.log(data)) */

async function loadData() {
  try {
    //throw new Error('estos es un error')
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

loadData();
