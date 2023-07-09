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
//exercise 3
const fetchData = async () => {
  try {
    const apiResponse = fetch("https://jsonplaceholder.typicode.com/todos/");
    const fileResponse = fetch(
      "https://raw.githubusercontent.com/openai/gym/master/README.md"
    );
    const additionalApiResponse = fetch("https://api.github.com/users/bard");

    const [apiDataResponse, fileResponseText, additionalApiDataResponse] =
      await Promise.all([apiResponse, fileResponse, additionalApiResponse]);

    if (
      apiDataResponse.status === 200 &&
      additionalApiDataResponse.status === 200
    ) {
      const apiData = await apiDataResponse.json();
      const additionalApiData = await additionalApiDataResponse.json();
      const fileContents = await fileResponseText.text();

      // Xử lý dữ liệu thu được ở đây
      console.log("API Data:", apiData);
      console.log("File Contents:", fileContents);
      console.log("Additional API Data:", additionalApiData);

      return {
        apiData,
        fileContents,
        additionalApiData,
      };
    } else {
      throw new Error("Something went wrong with the HTTP requests.");
    }
  } catch (error) {
    console.log("Error:", error);
    throw error;
  }
};

fetchData();
