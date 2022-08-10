import React, { useState } from 'react';

// Here we import a helper function that will check if the email is valid
import { checkPassword, validateEmail } from '../utils/helpers.js';

function Contact() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'firstName') {
      setFirstName(inputValue);
    } else if (inputType === 'lastName') {
      setLastName(inputValue);
    } else if (inputType === 'email') {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(firstName) || !lastName || !email || !message) {
      setErrorMessage('Please fill out all form fields');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }
    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setFirstName('');
    setLastName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div class="flex justify-center">
      <form className="form" class="flex flex-col w-2/3 mt-20 ml-6">
        <div class="mb-10">
          <h1 class="text-5xl">Get in Touch</h1>
        </div>
        <div class="mt-4 mb-4 flex flex-row">
          <div class="mr-10 w-1/2">
            <h1 class="text-2xl mb-2">First Name:</h1>
            <input
              class="w-full h-10"
              value={firstName}
              name="firstName"
              onChange={handleInputChange}
              type="text"
              placeholder="   John"
            />
          </div>
          <div class="mr-10 w-1/2">
            <h1 class="text-2xl mb-2">Last Name:</h1>
            <input
              class="w-full h-10"
              value={lastName}
              name="lastName"
              onChange={handleInputChange}
              type="text"
              placeholder="   Doe"
            />
          </div>
        </div>
        <div class="mt-4 mb-4">
          <div class="mr-10"></div>
          <h1 class="text-2xl mb-2">Email Address:</h1>
          <input
            class="w-full h-10"
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="   john_doe@gmail.com"
          />
        </div>
        <div class="mt-4 mb-4">
          <div class="mr-10"></div>
          <h1 class="text-2xl mb-2">Message:</h1>
          <input
            class="w-full h-60"
            value={message}
            name="message"
            onChange={handleInputChange}
            type="message"
            placeholder="   Message"
          />
        </div>
        <div class="flex justify-center">
          <button type="button" class="w-1/5 h-100 border-4 border-black rounded-lg bg-black text-white text-xl font-bold" onClick={handleFormSubmit}>Submit</button>
        </div>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Contact;
