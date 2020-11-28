function registro(id) {
  return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
}

async function test() {
  try {
    const response = await registro(1);
    const a = await response.json();
    console.log(a);
  } catch (error) {
    console.log();
  }
}

test();
