// This function takes an array of date components and returns the corresponding UTC timestamp.
function getUTCTimestamp(parts) {
  return +new Date(Date.UTC(...parts));
}

// Example usage:
const parts = [2024, 5, 23, 12, 0, 0]; // June 23, 2024 at 12:00:00 UTC
const timestamp = getUTCTimestamp(parts);
console.log(timestamp); // Outputs the UTC timestamp in milliseconds since the Unix epoch
