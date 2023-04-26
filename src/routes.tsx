import React from 'react';
import { useRoutes } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';
import { AuthTabs, ForgotPassword, ResetPassword } from './pages/auth';

export const AppRouter: React.FC = () => {
	const elements: RouteObject[] = [
		{
			path: '/',
			element: <AuthTabs />,
		},
		{
			path: '/forgot-password',
			element: <ForgotPassword />,
		},
		{
			path: '/reset-password',
			element: <ResetPassword />,
		},
	];

	return useRoutes(elements);
};