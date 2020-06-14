$(document).ready(function () {
  // Variables

  setInterval(updateTime, 1000);
  setInterval(checkHour, 1000);

  // Call and display the time using moment.js
  function updateTime() {
    const time = moment();
    const eDisplayMoment = document.getElementById("currentDay");
    eDisplayMoment.innerHTML = time.format("M-D-YYYY hh:mm:ss");
  }

  // Create array from the string in <h2> elements
  // Split the value at the colon to compare just the hour of <li> to current hour
  function checkHour() {
    let h2_9Tag = document.getElementById("9");
    let tag9Hour = h2_9Tag.textContent.split(":");
    let tag9HourVal = tag9Hour[0];

    let h2_10Tag = document.getElementById("10");
    let tag10Hour = h2_10Tag.textContent.split(":");
    let tag10HourVal = tag10Hour[0];

    let h2_11Tag = document.getElementById("11");
    let tag11Hour = h2_11Tag.textContent.split(":");
    let tag11HourVal = tag11Hour[0];

    let h2_12Tag = document.getElementById("12");
    let tag12Hour = h2_12Tag.textContent.split(":");
    let tag12HourVal = tag12Hour[0];

    let h2_1Tag = document.getElementById("1");
    let tag1Hour = h2_1Tag.textContent.split(":");
    let tag1HourVal = tag1Hour[0];

    let h2_2Tag = document.getElementById("2");
    let tag2Hour = h2_2Tag.textContent.split(":");
    let tag2HourVal = tag2Hour[0];

    let h2_3Tag = document.getElementById("3");
    let tag3Hour = h2_3Tag.textContent.split(":");
    let tag3HourVal = tag3Hour[0];

    let h2_4Tag = document.getElementById("4");
    let tag4Hour = h2_4Tag.textContent.split(":");
    let tag4HourVal = tag4Hour[0];

    let h2_5Tag = document.getElementById("5");
    let tag5Hour = h2_5Tag.textContent.split(":");
    let tag5HourVal = tag5Hour[0];

    // Formats time into (h:mm), split at the colon to focus only on the hour
    const hour = moment().format("LT");
    let localTime = hour.split(":");
    let currentHour = localTime[0];
    // (below incase need to integer values)
    // currentHour = parseInt($("localTime[0]"));
    // tag9HourVal = parseInt($("h2_9Tag"), 9);
    //not sure why this didnt work
    // if (tag9HourVal <= currentHour) {
    //   $("timeBlock9am").toggleClass("past");
    // } else if (tag9HourVal == currentHour) {
    //   $("#timeBlock9am").addClass(".present");
    // } else if (tag9HourVal >= currentHour) {
    //   $("timeBlock9am").toggleClass("future");
    // }

    // Check whether the time is in the past, present, or future, append the appropriate class

    if ("#timeBlock9am" == currentHour) {
      $("#timeBlock9am").addClass("present", tag9HourVal == currentHour);
    } else if ("#timeBlock9am" > currentHour) {
      $("#timeBlock9am").addClass("past", tag9HourVal > currentHour);
    } else if ("#timeBlock9am" < currentHour) {
      $("#timeBlock9am").addClass("future", tag9HourVal < currentHour);
    }

    if ("#timeBlock10am" == currentHour) {
      $("#timeBlock10am").addClass("present", tag10HourVal == currentHour);
    } else if ("#timeBlock10am" > currentHour) {
      $("#timeBlock10am").addClass("past", tag10HourVal > currentHour);
    } else if ("#timeBlock10am" < currentHour) {
      $("#timeBlock10am").addClass("future", tag10HourVal < currentHour);
    }

    if ("#timeBlock11am" == currentHour) {
      $("#timeBlock11am").addClass("present", tag11HourVal == currentHour);
    } else if ("#timeBlock11am" > currentHour) {
      $("#timeBlock11am").addClass("past", tag11HourVal > currentHour);
    } else if ("#timeBlock11am" < currentHour) {
      $("#timeBlock11am").addClass("future", tag11HourVal < currentHour);
    }

    if ("#timeBlock12pm" == currentHour) {
      $("#timeBlock12pm").addClass("present", tag12HourVal == currentHour);
    } else if ("#timeBlock12pm" > currentHour) {
      $("#timeBlock12pm").addClass("past", tag12HourVal > currentHour);
    } else if ("#timeBlock12pm" < currentHour) {
      $("#timeBlock12pm").addClass("future", tag12HourVal < currentHour);
    }

    if ("#timeBlock1pm" == currentHour) {
      $("#timeBlock1pm").addClass("present", tag1HourVal == currentHour);
    } else if ("#timeBlock1pm" > currentHour) {
      $("#timeBlock1pm").addClass("past", tag1HourVal > currentHour);
    } else if ("#timeBlock1pm" < currentHour) {
      $("#timeBlock1pm").addClass("future", tag1HourVal < currentHour);
    }

    if ("#timeBlock2pm" == currentHour) {
      $("#timeBlock2pm").addClass("present", tag2HourVal == currentHour);
    } else if ("#timeBlock2pm" > currentHour) {
      $("#timeBlock2pm").addClass("past", tag2HourVal > currentHour);
    } else if ("#timeBlock2pm" < currentHour) {
      $("#timeBlock2pm").addClass("future", tag2HourVal < currentHour);
    }

    if ("#timeBlock3pm" == currentHour) {
      $("#timeBlock3pm").addClass("present", tag3HourVal == currentHour);
    } else if ("#timeBlock3pm" > currentHour) {
      $("#timeBlock3pm").addClass("past", tag3HourVal > currentHour);
    } else if ("#timeBlock3pm" < currentHour) {
      $("#timeBlock3pm").addClass("future", tag3HourVal < currentHour);
    }

    if ("#timeBlock4pm" == currentHour) {
      $("#timeBlock4pm").addClass("present", tag4HourVal == currentHour);
    } else if ("#timeBlock4pm" > currentHour) {
      $("#timeBlock4pm").addClass("past", tag4HourVal > currentHour);
    } else if ("#timeBlock4pm" < currentHour) {
      $("#timeBlock4pm").addClass("future", tag4HourVal < currentHour);
    }

    if ("#timeBlock5pm" == currentHour) {
      $("#timeBlock5pm").addClass("present", tag5HourVal == currentHour);
    } else if ("#timeBlock5pm" > currentHour) {
      $("#timeBlock5pm").addClass("past", tag5HourVal > currentHour);
    } else if ("#timeBlock5pm" < currentHour) {
      $("#timeBlock5pm").addClass("future", tag5HourVal < currentHour);
    }
  }

  // Load time immediately, check hour related to timeblock value and current time
  updateTime();
  checkHour();

  // Update DOM

  function updateDOM() {
    //   Specific handlers for each text input field
    let savedEvent9am = localStorage.getItem("9am");
    let display9am = $("#display9am");
    display9am.html(savedEvent9am);

    let savedEvent10am = localStorage.getItem("10am");
    let display10am = $("#display10am");
    display10am.html(savedEvent10am);

    let savedEvent11am = localStorage.getItem("11am");
    let display11am = $("#display11am");
    display11am.html(savedEvent11am);

    let savedEvent12pm = localStorage.getItem("12pm");
    let display12pm = $("#display12pm");
    display12pm.html(savedEvent12pm);

    let savedEvent1pm = localStorage.getItem("1pm");
    let display1pm = $("#display1pm");
    display1pm.html(savedEvent1pm);

    let savedEvent2pm = localStorage.getItem("2pm");
    let display2pm = $("#display2pm");
    display2pm.html(savedEvent2pm);

    let savedEvent3pm = localStorage.getItem("3pm");
    let display3pm = $("#display3pm");
    display3pm.html(savedEvent3pm);

    let savedEvent4pm = localStorage.getItem("4pm");
    let display4pm = $("#display4pm");
    display4pm.html(savedEvent4pm);

    let savedEvent5pm = localStorage.getItem("5pm");
    let display5pm = $("#display5pm");
    display5pm.html(savedEvent5pm);
  }
  //   Execute update function before listening for more user input
  updateDOM();
  const saveBtns = $(".saveBtn");

  for (let i = 0; i < saveBtns.length; i++) {
    saveBtns[i].addEventListener("click", function (e) {
      let id = e.target.id;
      let parentElement = $(`#timeBlock${id}`);
      let newValue = parentElement.children()[0].value;
      localStorage.setItem(id, newValue);
      let input = parentElement.children()[0];
      //   Clear textfield after user saves event
      input.value = "";
      //   Update DOM after user saves new event
      updateDOM();
    });
  }
});
