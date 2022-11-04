const loginValidation = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  next();
};

const userValidation = (req, res, next) => {
  const { displayName, email, password } = req.body;
  if (displayName.length < 8) {
    return res.status(400).json({ 
      message: '"displayName" length must be at least 8 characters long', 
    });
  }
  const emailTest = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/g.test(email);
  if (!emailTest) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }
  if (password.length < 6) {
    return res.status(400).json({ 
      message: '"password" length must be at least 6 characters long', 
    });
  }
  next();
};

const categoryValidation = (req, res, next) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }
  next();
};

const postValidations = (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  if (!title || !content || !categoryIds) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  next();
};

module.exports = { loginValidation,
  userValidation,
  categoryValidation,
  postValidations,
};