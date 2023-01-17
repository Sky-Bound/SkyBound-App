// Main call
function nasaRequest() {
  let xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let data = JSON.parse(this.responseText);

      // Data from NASA API json
      let copyright = data["copyright"];
      let date = data["date"];
      let explanation = data["explanation"];
      let hdurl = data["hdurl"];
      let media_type = data["media_type"];
      let title = data["title"];
      let url = data["url"];

      // HTML markup for images and videos
      let imageType = `
        <div
          class="bg-image hover-overlay ripple shadow-1-strong rounded"
          data-ripple-color="light"
        >
          <img id="wrapper-image" src="" class="w-100" />
          <a id="wrapper-hdurl" href="" target="_blank">
            <div class="mask" style="background-color: rgba(251, 251, 251, 0.2);"></div>
          </a>
        </div>
        `;
      let videoType = `
        <div class="ratio ratio-16x9">
          <iframe
            class="shadow-1-strong rounded"
            id="wrapper-video"
            src=""
            title="YouTube video"
            allowfullscreen
          ></iframe>
        </div>
        `;

      // Static elements
      document.getElementById("wrapper-title").innerHTML = title;
      document.getElementById(
        "wrapper-explanation"
      ).innerHTML = explanation;
      document.getElementById("wrapper-copyright").innerHTML = copyright;
      document.getElementById("intro-date").innerHTML = date;

      // If statement for images/videos
      if (media_type === "video") {
        document.getElementById("wrapper-media").innerHTML = videoType;
        document.getElementById("wrapper-video").src = url;
      } else {
        document.getElementById("wrapper-media").innerHTML = imageType;
        document.getElementById("wrapper-image").src = url;
        document.getElementById("wrapper-hdurl").href = hdurl;
      }
    }
  };
  // Acessing a value from the date picker
  let datepicker_date = document.getElementById("wrapper-date").value;
  // NASA API link
  let queryUrl = "https://api.nasa.gov/planetary/apod?";
  // API KEY
  let queryKey = "api_key=IzI1tggvGQoqd425WYCQ2nGdY1ubGx9Geg3Yi084";
  // Selected date
  let queryDate = "date=" + datepicker_date + "&";
  // Full query
  let queryFull = queryUrl + queryKey + queryDate;

  xmlhttp.open("GET", queryFull, true);
  xmlhttp.send();
}

// Datepicker init
const datePicker = document.getElementById("date-picker");
// Call nasaRequest on date change
datePicker.addEventListener("dateChange.mdb.datepicker", (e) => {
  nasaRequest();
});

// Initial call on page load
nasaRequest().onload;