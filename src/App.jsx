import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Navbar from './components/shared/Navbar';
import DashboardLayout from '../src/layouts/DashbaordLayout';
import ManageAllRecipes from './pages/dashboard/ManageAllRecipe';
import AddRecipe from './pages/dashboard/AddRecipe';
import EditRecepi from './pages/dashboard/EditRecipe';  // Import the UpdateRecipe component



function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* Route to DashboardLayout with nested routes */}
          <Route path="/dashboard" element={<DashboardLayout />}>
       
            <Route path="add-recipe" element={<AddRecipe />} />
            <Route path="/dashboard/manage-recipes" element={<ManageAllRecipes />} />
        <Route path="/dashboard/edit-recipe/:id" element={<EditRecepi />} /> {/* Add route for updating a recipe */}
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
