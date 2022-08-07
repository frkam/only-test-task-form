import { Routes, Route } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
import { AuthProvider } from '@/context/authenticationContext';
import { ProtectedRoutes } from '@/pages/protectedRoutes';

const Login = lazy(() => import('@/pages/login/login'));
const Profile = lazy(() => import('@/pages/profile/profile'));

export const Routing = () => {
  return (
    <Suspense fallback={<div>loading..</div>}>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<ProtectedRoutes />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </AuthProvider>
    </Suspense>
  );
};
