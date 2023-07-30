import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';
import {Routes,Route,Link,Navigate} from 'react-router-dom'

const App = () => {
	return (
		<div>
			<Routes>
				<Route path="/login"  element={<Login />} />
				<Route path="/register" element={<Register />} />
        <Route path="/dashboard"  element={<Dashboard />} />
			</Routes>
		</div>
	)
}

export default App