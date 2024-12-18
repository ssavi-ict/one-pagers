const SCRIPT_ID = 'AKfycbyKTYjjtAgXdeaksGzwVn2igJ7z2GJOjSyBIj6nW1Ngge5nezulkauaia_qQlv8N03R';
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/' + SCRIPT_ID + '/exec';

function search() {
  const bookingId = document.getElementById("bookingId").value;
  if (!bookingId) {
    alert("Please enter a Booking ID");
    return;
  }

  // Capture the referer (client's origin)
  const referer = window.location.origin;

  // Construct the URL with the required query parameters
  const requestUrl = `${APPS_SCRIPT_URL}?bookingId=${encodeURIComponent(bookingId)}&referer=${encodeURIComponent(referer)}`;

  fetch(requestUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(displayResult)
    .catch(error => {
      document.getElementById("output").innerHTML = `<p class="error">An error occurred: ${error.message}</p>`;
    });
}

function formatDate(isoDate) {
  if (isoDate === "N/A") return "N/A";
  const date = new Date(isoDate);
  return date.toLocaleDateString(); // Converts to user's local date format
}

function displayResult(result) {
  const output = document.getElementById("output");
  output.innerHTML = "";

  if (result.status === "Error") {
    output.innerHTML = `<p class="error">${result.message}</p>`;
  } else {
    output.innerHTML = `
      <div class="result">
        <h2>Information with Booking ID: ${result.bookingId}</h2>
        <table>
          <tr>
            <td class="left-column">
              <p><strong>Booking ID:</strong> ${result.bookingId}</p>
              <p><strong>Name:</strong> ${result.name}</p>
              <p><strong>Booking Date:</strong> ${formatDate(result.bookingDate)}</p>
              <p><strong>Session Topic:</strong> ${result.sessionTopic}</p>
              <p><strong>Preferred Schedule(s):</strong> ${result.preferredSchedules}</p>
            </td>
            <td class="right-column">
              <p><strong>Session Schedule:</strong> ${result.sessionSchedule}</p>
              <p><strong>Session Link:</strong> ${result.sessionLink}</p>
              <p><strong>Session Status:</strong> ${result.sessionStatus}</p>
              <p><strong>Session Note:</strong> ${result.sessionNote}</p>
              <p><strong>Session Feedback:</strong> ${result.sessionFeedback}</p>
            </td>
          </tr>
        </table>
      </div>`;
  }
}