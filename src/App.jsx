import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import SignUPForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';
import Profile from './components/Profile'

const App = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/signup" element={<SignUPForm />} />
      <Route path="/signin" element={<SignInForm />} />
      <Route path="/profile" element={<Profile/>}/>
    </Routes>
  </Router>
  );
}
export default App;