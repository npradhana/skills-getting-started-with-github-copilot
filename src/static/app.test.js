const fetchMock = require("jest-fetch-mock");
fetchMock.enableMocks();

beforeEach(() => {
  fetch.resetMocks();
});

test("fetchActivities populates activities list and dropdown", async () => {
  document.body.innerHTML = `
    <div id="activities-list"></div>
    <select id="activity"></select>
  `;

  const activities = {
    "Basketball": {
      description: "Play basketball",
      schedule: "Mon & Wed 3-5pm",
      max_participants: 20,
      participants: ["student1@mergington.edu"]
    }
  };

  fetch.mockResponseOnce(JSON.stringify(activities));

  await fetchActivities();

  expect(document.getElementById("activities-list").innerHTML).toContain("Basketball");
  expect(document.getElementById("activity").innerHTML).toContain("Basketball");
});

test("signupForm submission shows success message", async () => {
  document.body.innerHTML = `
    <form id="signup-form">
      <input type="email" id="email" value="student@mergington.edu" />
      <select id="activity">
        <option value="Basketball">Basketball</option>
      </select>
    </form>
    <div id="message" class="hidden"></div>
  `;

  fetch.mockResponseOnce(JSON.stringify({ message: "Signed up successfully" }), { status: 200 });

  const form = document.getElementById("signup-form");
  const event = new Event("submit");
  form.dispatchEvent(event);

  await new Promise((resolve) => setTimeout(resolve, 0));

  expect(document.getElementById("message").textContent).toBe("Signed up successfully");
  expect(document.getElementById("message").className).toBe("success");
});

test("unregisterActivity shows success message", async () => {
  document.body.innerHTML = `
    <div id="message" class="hidden"></div>
  `;

  fetch.mockResponseOnce(JSON.stringify({ message: "Unregistered successfully" }), { status: 200 });

  await unregisterActivity("student@mergington.edu", "Basketball");

  expect(document.getElementById("message").textContent).toBe("Unregistered successfully");
  expect(document.getElementById("message").className).toBe("success");
});
