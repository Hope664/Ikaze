import { Navigate } from 'react-router-dom'

function ProtectedRoute({ children }) {
  const user = localStorage.getItem('ikaze_user')
  if (!user) return <Navigate to="/auth?step=login" replace />
  return children
}

export default ProtectedRoute