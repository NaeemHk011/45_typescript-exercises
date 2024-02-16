function make_shirt(size: string = "large", message: string = "I love TypeScript") {
    console.log(`The shirt is size ${size} and has the message "${message}" printed on it.`);
  }
  
  make_shirt(); // The shirt is size large and has the message "I love TypeScript" printed on it.
  make_shirt("medium"); // The shirt is size medium and has the message "I love TypeScript" printed on it.
  make_shirt("small", "Programming rocks!"); // The shirt is size small and has the message "Programming rocks!" printed on it.
  