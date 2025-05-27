import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function RoleRedirect({ user }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) return;

    switch (user.role) {
      case 'client':
        navigate('/client/dashboard');
        break;
      case 'provider':
        navigate('/provider/dashboard');
        break;
      case 'admin':
        navigate('/admin/dashboard');
        break;
      default:
        navigate('/login');
    }
  }, [user, navigate]);

  return null;
}
