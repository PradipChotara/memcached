async function sendRequests(url, params, times) {
  const timeTakenArray = []; // Array to store timeTaken values

  // Send requests in a loop
  for (let i = 0; i < times; i++) {
    const startTime = Date.now(); // Start time

    // Send GET request using fetch API
    const response = await fetch(url + "?" + params);

    if (!response.ok) {
      console.error(`HTTP error! Status: ${response.status}`);
      continue; // Move to the next iteration if there's an error
    }

    const responseData = await response.json(); // Parse response as JSON

    // Calculate time taken
    const endTime = Date.now();
    const timeTaken = endTime - startTime;

    // Extract timeTaken from responseData
    const { timeTaken: responseTime } = responseData;

    // Log the response and timeTaken
    console.log("Time taken:", responseTime);

    // Add timeTaken to the array
    timeTakenArray.push(responseTime);
  }

  return timeTakenArray; // Return the array of timeTaken values
}

// Example usage
const url = "http://localhost:3000/cache/newKEY";
const params = "key=AK";
const times = 500; // specify the number of times to send the request

// Call the function to send requests
sendRequests(url, params, times)
  .then((timeTakenArray) => {
    const sum = timeTakenArray.reduce((acc, curr) => acc + curr, 0);
    const average = sum / timeTakenArray.length;
    console.log("Avg Time Taken : ", average ,"ms");
  })
  .catch((error) => {
    console.error("Error:", error);
  });
