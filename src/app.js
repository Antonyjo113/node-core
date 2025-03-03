const express = require("express")
const cors = require("cors")
const bodyParser = require('body-parser');
const { User } = require('../src/data-access/sequelize/models');



const app = express()

app.use(bodyParser.json());

app.use(cors());

// ROUTES
// const userRoutes = require("./routes/user/app")


// // API'S
// app.use("/api/users", userRoutes);

const userRoutes = require("./routes/user/app");
app.use("/api/users", userRoutes);




// app.post('/api/users', async (req, res) => {
//   const { name, email } = req.body;

//   try {
//     // Create a new user
//     const user = await User.create({
//       name,
//       email
//     });

//     return res.status(201).json({
//       message: 'User created successfully',
//       user
//     });
//   } catch (error) {
//     console.error('Error creating user:', error);
//     return res.status(500).json({
//       message: 'Error creating user',
//       error: error.message
//     });
//   }
// });



// Route to get all users (for testing)
app.get('/api/products', async (req, res) => {
  try {
    const users = await User.findAll();
    return res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    return res.status(500).json({
      message: 'Error fetching users',
      error: error.message
    });
  }
});




const PORT = process.env.PORT || 3001;

const server = app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}.`);
});

module.exports = app;

