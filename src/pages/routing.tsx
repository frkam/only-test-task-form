import { Routes, Route, Navigate } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
import { AuthProvider } from '@/context/authenticationContext';
import { ProtectedRoutes } from '@/pages/protectedRoutes';

const Login = lazy(() => import('@/pages/login/login'));
const Profile = lazy(() => import('@/pages/profile/profile'));

export const Routing = () => {
  return (
    <Suspense>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<ProtectedRoutes />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<Navigate to="/profile" replace />} />
          </Route>
        </Routes>
      </AuthProvider>
    </Suspense>
  );
};
