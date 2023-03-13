import Cookies from 'js-cookie';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
	const user = Cookies.get('rol') || null
	if (!user) {
		return <Navigate replace to="/" />;
	}

	return children;
}

export default ProtectedRoute;