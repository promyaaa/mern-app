// server/routes/userRoutes.js
import express from "express";
import {
  registerOrUpdateUser,
  getAllUsers,
  getRoles,
  createRole,
  deleteRole,
  assignRoleToUser,
  detachRoleFromUser,
  editUser,
  deleteUser,
  getUserByFirebaseUid
} from "../app/controllers/userController.js";
import verifyToken from "../app/middlewares/verifyToken.js";
import admin from "../app/config/firebaseConfig.js";

const userRoutes = express.Router();

// Route to register or update user after Firebase authentication
userRoutes.post("/register", verifyToken, registerOrUpdateUser);
// userRoutes.post("/register", registerOrUpdateUser);
// userRoutes.post("/register", async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const userResponse = await admin.auth().createUser({
//       email: email,
//       password: password,
//     });
//     res.json(userResponse);
//     // res.json(req.body);
//   } catch (error) {
//     res.json(error.errorInfo);
//   }
//   // res.json(req.body);
// });

// Route to get all users (admin-only route)
// userRoutes.get("/all", verifyToken, getAllUsers);

userRoutes.get("/all", getAllUsers);
userRoutes.get("/roles", getRoles);
userRoutes.post("/roles", createRole);
userRoutes.delete("/roles/:id", deleteRole);
userRoutes.put('/:userId/roles', assignRoleToUser);
userRoutes.put('/:userId/roles/detach', detachRoleFromUser);
userRoutes.put('/:userId/edit', editUser);
userRoutes.delete('/:userId', deleteUser);
userRoutes.get('/:firebaseUid', getUserByFirebaseUid);

export default userRoutes;
