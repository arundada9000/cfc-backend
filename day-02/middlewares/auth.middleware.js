import express from "express";
import jwt from "jsonwebtoken";

export const authMiddlware = async (req, res, next) => {
  try {
    const cookiesToken = req.cookies.authToken
    if (!cookiesToken) {
      res.status(400).json({
        message: "User not loggedIn",
      });
    } else {
      const checkToken = await jwt.verify(
        cookiesToken,
        process.env.jwtSecretKey,
      );
      if (!checkToken) {
        res.status(400).json({
          message: "Invalid token | please login again",
        });
      } else {
        console.log("auth middleware passed");
        next();
      }
    }
  } catch (error) {
    res.status(500).json({
      message: "Error occured",
      error: error.message,
    });
  }
};
