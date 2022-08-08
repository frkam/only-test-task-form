import { Routes, Route, Navigate } from 'react-router-dom';
import React, { lazy } from 'react';
import { ProtectedRoutes } from '@/pages/protectedRoutes';

const Login = lazy(() => import('@/pages/login/login'));
const Profile = lazy(() => import('@/pages/profile/profile'));

export const Routing = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<ProtectedRoutes />}>
        <Route path="/profile" element={<Profile />} />
        <Route index element={<Navigate to="/profile" replace />} />
      </Route>
      <Route path="*" element={<Navigate to="/profile" replace />} />
    </Routes>
  );
};
