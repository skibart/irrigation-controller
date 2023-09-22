function getYesterdayDate() {
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() - 1); // Subtract 1 day

  const year = currentDate.getFullYear();
  let month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
  let day = currentDate.getDate().toString().padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function getCurrentDate() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  let month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
  let day = currentDate.getDate().toString().padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function calculateTimeUntil(hour, minute) {
  const now = new Date();
  const desiredTime = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    hour,
    minute,
    0
  );
  let timeUntil = desiredTime - now;
  if (timeUntil < 0) {
    // If it's past hour today, then calculate the time until hour tomorrow
    desiredTime.setDate(desiredTime.getDate() + 1);
    timeUntil = desiredTime - now;
  }
  return timeUntil;
}

module.exports = {
  getYesterdayDate,
  getCurrentDate,
  calculateTimeUntil,
};
