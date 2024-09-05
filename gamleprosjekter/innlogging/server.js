const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
require("dotenv").config();

let secretKey = process.env.secretKey;

const app = express();
const port = 3000;
const secret = 'your_jwt_secret';

// const url = 'mongodb+srv://askjo:tennis0810@innlogingsoppgave.v9wtnjb.mongodb.net/innlogingsoppgave';
const url = 'mongodb://localhost:27017/innlogingsoppgave';

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(port, () => console.log(`Server listening on port ${port}`)))
  .catch(err => console.log(err));

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));
app.use(cookieParser());

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  role: { type: String, default: 'kunde' }
});

const User = mongoose.model('User', userSchema);

app.get('/', (req, res) => {
  res.redirect('/loginn');
});

app.get('/registrer', (req, res) => {
  const token = req.cookies.token;
  if (token) {
    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) return res.redirect('/loginn');
      if (decoded.role === 'admin') return res.redirect('/admin');
      return res.redirect('/welcome');
    });
  } else {
    res.render('register', { title: 'Registrer' });
  }
});

app.get('/loginn', (req, res) => {
  const token = req.cookies.token;
  if (token) {
    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) return res.redirect('/loginn');
      if (decoded.role === 'admin') return res.redirect('/admin');
      return res.redirect('/welcome');
    });
  } else {
    res.render('login', { title: 'Logg Inn' });
  }
});

app.get('/welcome', (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.redirect('/loginn');
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.redirect('/loginn');
    }
    if (decoded.role === 'admin') {
      return res.redirect('/admin');
    }
    res.render('welcome', { title: 'Velkommen' });
  });
});

app.get('/admin', (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.redirect('/loginn');
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.redirect('/loginn');
    }
    if (decoded.role !== 'admin') {
      return res.redirect('/welcome');
    }
    res.send('<h1>Admin Page</h1><a href="/logout">Logg Ut</a>');
  });
});

app.post('/registrer', async (req, res) => {
  const { username, email, password, confirmPassword } = req.body;
  if (password !== confirmPassword) {
    return res.render('register', { title: 'Registrer', error: 'Passordene stemmer ikke overens' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });

  try {
    await newUser.save();
    res.redirect('/loginn');
  } catch (err) {
    res.render('register', { title: 'Registrer', error: 'En feil oppstod under registrering' });
  }
});

app.post('/loginn', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.render('login', { title: 'Logg Inn', error: 'Ugyldig e-post eller passord' });
  }

  const token = jwt.sign({ email: user.email, role: user.role }, secret, { expiresIn: '24h' });
  res.cookie('token', token, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 });

  if (user.role === 'admin') {
    res.redirect('/admin');
  } else {
    res.redirect('/welcome');
  }
});

app.get('/logout', (req, res) => {
  res.cookie('token', '', { maxAge: 1 });
  res.redirect('/loginn');
});
