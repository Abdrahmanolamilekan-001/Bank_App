async function fetchData() {
  fetchbtn.innerText = "Loading...";
  fetchbtn.disabled = true;
  const url = "https://dog.ceo/api/breeds/image/random";

  try {
    const response = await fetch(url);
    const data = await response.json().then((data) => {
      document.getElementById("dogImage").src = data.message;
      fetchbtn.innerText = "Generate Another Image";
      fetchbtn.disabled = false;
    });

    // fetchbtn.disabled = false;
  } catch (error) {
    console.error("Error fetching the dog image:", error);
  }
}
