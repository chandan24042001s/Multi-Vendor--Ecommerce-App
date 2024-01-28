// create token and saving that in cookies
const sendToken = (user, statusCode, res) => {
  const token = user.getJwtToken();
  console.log(token)
  // Options for cookies
  const options = {
    expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
    httpOnly: true,
    sameSite: "none",
    secure: true,
  };

  res.cookie("token",token,options);
  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    token,
  });
};

module.exports = sendToken;
