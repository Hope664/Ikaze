import { Navigate, useLocation } from 'react-router-dom'

function ProtectedRoute({ children }) {
  const user = localStorage.getItem('ikaze_user')
  const location = useLocation()

  if (!user) return <Navigate to="/auth?step=login" state={{ from: location }} replace />
  return children
}

export default ProtectedRoute