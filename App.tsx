
import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { ContentProvider } from './context/ContentContext';
import { AuthProvider, useAuth } from './context/AuthContext';

import Layout from './components/layout/Layout';
import AdminLayout from './components/layout/AdminLayout';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import DestinationsPage from './pages/DestinationsPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/admin/Dashboard';
import PageEditor from './pages/admin/PageEditor';
import PostManager from './pages/admin/PostManager';
import ThemeManager from './pages/admin/ThemeManager';
import MediaManager from './pages/admin/MediaManager';

const PrivateRoute: React.FC<{ children: React.ReactElement }> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <ThemeProvider>
      <ContentProvider>
        <AuthProvider>
          <HashRouter>
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              
              <Route path="/admin" element={<PrivateRoute><AdminLayout><Dashboard /></AdminLayout></PrivateRoute>} />
              <Route path="/admin/page-editor" element={<PrivateRoute><AdminLayout><PageEditor /></AdminLayout></PrivateRoute>} />
              <Route path="/admin/post-manager" element={<PrivateRoute><AdminLayout><PostManager /></AdminLayout></PrivateRoute>} />
              <Route path="/admin/theme-manager" element={<PrivateRoute><AdminLayout><ThemeManager /></AdminLayout></PrivateRoute>} />
              <Route path="/admin/media-manager" element={<PrivateRoute><AdminLayout><MediaManager /></AdminLayout></PrivateRoute>} />

              <Route path="/" element={<Layout><HomePage /></Layout>} />
              <Route path="/about" element={<Layout><AboutPage /></Layout>} />
              <Route path="/services" element={<Layout><ServicesPage /></Layout>} />
              <Route path="/destinations" element={<Layout><DestinationsPage /></Layout>} />
              <Route path="/blog" element={<Layout><BlogPage /></Layout>} />
              <Route path="/blog/:postId" element={<Layout><BlogPostPage /></Layout>} />
              <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
            </Routes>
          </HashRouter>
        </AuthProvider>
      </ContentProvider>
    </ThemeProvider>
  );
}

export default App;
