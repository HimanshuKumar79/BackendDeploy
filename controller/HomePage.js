exports.HomePage = (req, res) => {
  res.status(200).json({
    success: true,
    message: "Home page",
  });
};
