//exercise 1
const ul = document.getElementById("demo");
const text = document.getElementById("demo1");
const doSomethingElse = async () => {
  // Make a HTTP request to the GitHub API.
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
  if (response.status === 200) {
    const data = await response.json();
    return data;
  } else {
    return "Something went wrong with the HTTP request.";
  }
};
const callApi = doSomethingElse()
  .then((data) => {
    let htmls = data.map(function (result) {
      return `
<h4>id :${result.id}</h4>
<li>title :${result.title}</li>
`;
    });
    ul.innerHTML = htmls.join("");
  })
  .catch((error) => {
    return error;
  });
//exercise 2

const fetchFileContents = async () => {
  const response = await fetch(
    "https://raw.githubusercontent.com/openai/gym/master/README.md"
  );
  if (response.status === 200) {
    const data = await response.text();
    return data;
  } else {
    return "Something went wrong with the HTTP request.";
  }
};
fetchFileContents().then((data) => {
  text.innerHTML = data;
});
