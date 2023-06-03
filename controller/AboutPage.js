exports.AboutPage = (req, res) => {
  res.status(200).json({
    success: true,
    message: "About page",
  });
};
