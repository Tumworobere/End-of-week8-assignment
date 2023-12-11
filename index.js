function isEmailValid(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      return true;
    } else {
      return false;
    }
  }

  // Example usage:
  const userEmail = 'annaht.annah@gmail.com';
  const isValid = isEmailValid(userEmail);

  console.log(`Is the email address '${userEmail}' valid? ${isValid}`);
