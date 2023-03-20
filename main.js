document.addEventListener("DOMContentLoaded", () => {
  // Unix timestamp (in seconds) to count down to
  let now = new Date().getTime();
  
  var cmDeadline = new Date("2023-03-21").getTime() / 1000 - 47720;
  
  var iplDeadline = new Date("2023-03-27").getTime() / 1000 + 14390;
  // Set up FlipDown
  new FlipDown(cmDeadline, "flipdown")

    // Start the countdown
    .start()

    // Do something when the countdown ends
    .ifEnded(() => {
      console.log("The countdown has ended!");
    });

  new FlipDown(iplDeadline, "flipdown2")

    // Start the countdown
    .start()

    // Do something when the countdown ends
    .ifEnded(() => {
      console.log("The countdown has ended!");
    });
});
