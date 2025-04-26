// Getting OS info from user
function getOSInfo() {
  const userAgent = navigator.userAgent;

  if (userAgent.includes("Windows")) return "Windows";
  else if (userAgent.includes("Macintosh")) return "Mac";
  else {
    return "Linux";
  }
}

// Getting browser info from user
function getBrowserInfo() {
  const userAgent = navigator.userAgent;

  if (userAgent.includes("Chrome")) {
    return "Chrome";
  } else if (userAgent.includes("Safari")) {
    return "Safari";
  } else if (userAgent.includes("Firefox")) {
    return "Firefox";
  } else if (userAgent.includes("Edge")) {
    return "Edge";
  } else {
    return "Opera | Something else";
  }
}

// Setting info to the local storage
localStorage.setItem("os", getOSInfo());
localStorage.setItem("browser", getBrowserInfo());

// Inserting browser and os info to the footer text
const footer = document.getElementById("footer-text");
footer.innerHTML =
  footer.innerHTML +
  " " +
  localStorage.getItem("os") +
  " " +
  localStorage.getItem("browser");

// Getting and showing comments
async function getComments() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts/11/comments"
  );
  const data = await response.json();

  data.forEach((comment) => {
    const commentElement = document.getElementById("comments");
    commentElement.innerHTML =
      commentElement.innerHTML +
      "<div>" +
      `<h4>${comment.name}</h4><p>${comment.body}</p>` +
      "</div>";
  });
}

getComments();

// Showing modal window
setTimeout(() => {
  document.getElementById("modal").style.display = "block";
}, 60000);

// Closing modal window
function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// Change day/knight mode
const header = document.getElementById("header");
const toggleTheme = document.getElementById("theme-toggle");

toggleTheme.addEventListener("click", function () {
  if (header.classList.contains("day")) {
    header.classList.remove("day");
    header.classList.add("night");
  } else {
    header.classList.remove("night");
    header.classList.add("day");
  }
});

// When downloads page changes theme according time
function setThemeByTime() {
  const hour = new Date().getHours();

  if (hour >= 7 && hour < 21) {
    header.classList.remove("night");
    header.classList.add("day");
  } else {
    header.classList.remove("day");
    header.classList.add("night");
  }
}

setThemeByTime();
