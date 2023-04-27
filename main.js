// Set the target date for the countdown
const targetDate = new Date('2023-05-04T23:59:59');

// Set up the custom property variables
const daysElem = document.querySelector('.countdown:nth-child(1) span');
const hoursElem = document.querySelector('.countdown:nth-child(2) span');
const minutesElem = document.querySelector('.countdown:nth-child(3) span');
const secondsElem = document.querySelector('.countdown:nth-child(4) span');

// Update the countdown every second
setInterval(updateCountdown, 1000);

function updateCountdown() {
  // Get the current date and time
  const currentDate = new Date();

   // Calculate the remaining time between the current time and the target time
  let remainingTime = targetDate - currentDate;

  // Convert the remaining time to days, hours, minutes, and seconds
  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  remainingTime -= days * (1000 * 60 * 60 * 24);
  const hours = Math.floor(remainingTime / (1000 * 60 * 60));
  remainingTime -= hours * (1000 * 60 * 60);
  const minutes = Math.floor(remainingTime / (1000 * 60));
  remainingTime -= minutes * (1000 * 60);
  const seconds = Math.floor(remainingTime / 1000);

  // Update the custom property variables with the calculated values
  daysElem.style.setProperty('--value', days);
  hoursElem.style.setProperty('--value', hours);
  minutesElem.style.setProperty('--value', minutes);
  secondsElem.style.setProperty('--value', seconds);
}
