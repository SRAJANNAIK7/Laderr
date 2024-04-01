import jwt from "jsonwebtoken";
import createError from "../utils/createError.js";

// const user2 =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MzZkYTBmM2JlOTM1YmJkNDBjODUwNSIsImlzU2VsbGVyIjpmYWxzZSwiaWF0IjoxNjgzMDk4Mjc4fQ.IvtB0C7MKh86VAt4BQS-jGIavhI_UpUr5qFRG1VMt0M";

// const user1 =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MzI2M2QwMThlY2Q1M2U3MGU4OGI2OCIsImlzU2VsbGVyIjpmYWxzZSwiaWF0IjoxNjgzMDk4NzI4fQ.gL8rQj6qP__aslD0tVG3YcWm0tSxT9sp0J7mdVf5x0k";

// const user3 =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NTBjMjYyMTE4NjlmY2RmZmY4ZTdmYiIsImlzU2VsbGVyIjp0cnVlLCJpYXQiOjE2ODMwOTg3NzF9.sUZojfeUoWGJnITYb53wTGy9OYSUZ3ZZ_pz4n5DX370";
// const user4 =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NTIwZGU5ZWI1NDYxNDAwOGViMzVjNiIsImlzU2VsbGVyIjpmYWxzZSwiaWF0IjoxNjgzMDk5MTQ1fQ.NcwdF0ruKQL3S6PrBjCS4EiIgIFRWEvOJZ1m1xYxb-4";
export const verifyToken = (req, res, next) => {
  const token = req.cookies.accessToken;

  // const token = user3;

  if (!token) return next(createError(401, "You are not authenticated!"));

  jwt.verify(token, process.env.JWT_KEY, async (err, payload) => {
    if (err) return next(createError(403, "Token is not valid!"));
    req.userId = payload.id;
    req.isSeller = payload.isSeller;
    next();
  });
};
