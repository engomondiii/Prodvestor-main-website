/**
 * PRODVESTOR WEBSITE - Navigation Context
 * FILE LOCATION: src/context/NavigationContext.js
 */

import React, { createContext, useContext, useState, useCallback } from 'react';

const NavigationContext = createContext();

export function NavigationProvider({ children }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [breadcrumbs, setBreadcrumbs] = useState([]);

  const openMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(true);
    // Prevent body scroll when mobile menu is open
    document.body.style.overflow = 'hidden';
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = '';
  }, []);

  const toggleMobileMenu = useCallback(() => {
    if (isMobileMenuOpen) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  }, [isMobileMenuOpen, openMobileMenu, closeMobileMenu]);

  const openDropdown = useCallback((dropdownId) => {
    setActiveDropdown(dropdownId);
  }, []);

  const closeDropdown = useCallback(() => {
    setActiveDropdown(null);
  }, []);

  const toggleDropdown = useCallback((dropdownId) => {
    setActiveDropdown(prev => prev === dropdownId ? null : dropdownId);
  }, []);

  const updateBreadcrumbs = useCallback((crumbs) => {
    setBreadcrumbs(crumbs);
  }, []);

  const value = {
    isMobileMenuOpen,
    activeDropdown,
    breadcrumbs,
    openMobileMenu,
    closeMobileMenu,
    toggleMobileMenu,
    openDropdown,
    closeDropdown,
    toggleDropdown,
    updateBreadcrumbs
  };

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
}

export default NavigationContext;