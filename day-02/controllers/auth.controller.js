import { Auth } from "../model/auth.schema.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const authController = {
  register: async (req, res) => {
    try {
      const { name, email, password } = req.body;

      const checkUser = await Auth.findOne({ email });
      if (checkUser) {
        res.status(400).json({
          message: "User already registered",
        });
      } else {
        const hashedPassword = await bcrypt.hash(password, 15);
        const createUser = await Auth.create({
          name,
          email,
          password: hashedPassword,
        });

        res.status(201).json({
          message: "User registered successfully",
          data: createUser,
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "Internal server error",
        error: error,
      });
    }
  },
  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      const existingUser = await Auth.findOne({ email });

      if (existingUser) {
        const checkPassword = await bcrypt.compare(
          password,
          existingUser.password,
        );
        if (checkPassword) {
          const payload = {
            email: existingUser.email,
          };
          const token = await jwt.sign(payload, process.env.jwtSecretKey, {
            expiresIn: "1d",
          });

          res.cookie("authToken", token);
          
          res.status(200).json({
            message: "user logged In",
          });
        } else {
          res.status(400).json({
            message: "Incorrect Password",
          });
        }
      } else {
        res.status(400).json({
          message: "User not found | please register first",
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "Internal server error",
        error: error.message,
      });
    }
  },
};
