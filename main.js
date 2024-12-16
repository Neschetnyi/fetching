const input_url = document.querySelector(".input_url");
const start_fetch = document.querySelector(".start_fetch");
const paste_content = document.querySelector(".paste_content");
const clear_content = document.querySelector(".clear_content");
let content_type = document.querySelector(".content_type");
let wrapper_content = document.querySelector(".wrapper_content");
let result;
let url;

async function fetching() {
  result = await fetch(`${url}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  content_type.textContent = typeof result;
  wrapper_content.textContent = result;
}

input_url.addEventListener("input", () => {
  url = input_url.value;
});

start_fetch.addEventListener("click", () => {
  console.log(url);

  if (url) {
    alert(`lets Sart ${url}`);
    fetching();
  } else {
    alert("no url");
  }
});
