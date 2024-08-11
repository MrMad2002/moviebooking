const db = require("../models");
const User = db.users; // Assuming you have a User model set up in your database

// Sign up a new user
exports.signup = (req, res) => {
  // Extract user data from request
  const { username, email, password } = req.body;

  // Create a new user
  const user = new User({
    username: username,
    email: email,
    password: password // Ensure to hash passwords before storing them
  });

  // Save user in the database
  user.save(user)
    .then(data => {
      res.send({ message: "User registered successfully!", data: data });
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the User."
      });
    });
};

// Log in an existing user
exports.login = (req, res) => {
  const { email, password } = req.body;

  // Find the user by email
  User.findOne({ email: email })
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: "User not found!" });
      }

      // Validate the password (this assumes passwords are stored in hashed format)
      if (user.password !== password) { // Implement proper password hashing and comparison
        return res.status(401).send({ message: "Invalid Password!" });
      }

      // Authentication successful
      res.send({ message: "User logged in successfully!", user: user });
    })
    .catch(err => {
      res.status(500).send({ message: err.message || "Error logging in user." });
    });
};

// Log out a user (depending on your session management, this might vary)
exports.logout = (req, res) => {
  // Destroy the session or remove the token, etc.
  res.send({ message: "User logged out successfully!" });
};

// Get a coupon code for a user
exports.getCouponCode = (req, res) => {
  // Implement logic to retrieve a coupon code for the logged-in user
  res.send({ couponCode: "DISCOUNT2024" }); // Example response
};

// Book a show for a user
exports.bookShow = (req, res) => {
  const { userId, showId, seats } = req.body;

  // Implement logic to book a show for the user
  res.send({ message: `Show ${showId} booked successfully for user ${userId} with ${seats} seats.` });
};
