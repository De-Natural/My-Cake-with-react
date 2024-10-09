import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './App.css';
import '/src/css/comments.css'
// import { Dashboard } from './components/Dashboard';
import Juice from './components/Juice';
import Comments from './components/Comments';

function AnimatedRoutes() {
  const location = useLocation(); // Get current location for transitions

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        classNames="fade" // Match this with your CSS
        timeout={2000}
      >
        <Routes location={location}>
          <Route path="/" element={<Comments />} />
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          <Route path="/juice" element={<Juice />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
