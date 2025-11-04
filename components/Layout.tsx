import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const StyledNav = styled.nav`
  background-color: #1f2937; /* Corresponds to Tailwind's bg-gray-800 */
  padding: 1rem; /* p-4 */
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem; /* A modern way to handle space-x-4 */
  max-width: 1280px; /* Standard container max-width */
  margin: 0 auto;
  padding: 0 1rem;
`;

const StyledA = styled.a`
  color: white;
  text-decoration: none;
  font-size: 0.875rem; /* text-sm */
  font-weight: 500; /* font-medium */
  padding: 0.5rem 0.75rem; /* py-2 px-3 */
  border-radius: 0.375rem; /* rounded-md */
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #374151; /* Corresponds to Tailwind's hover:bg-gray-700 */
  }
`;

const TopMenu = () => {
  return (
    <StyledNav>
      <NavContainer>
        <Link href="/" passHref legacyBehavior><StyledA>Homepage</StyledA></Link>
        <Link href="https://summerprojects.vercel.app/" passHref legacyBehavior><StyledA>Project</StyledA></Link>
        <Link href="/about" passHref legacyBehavior><StyledA>About Page</StyledA></Link>
        <Link href="/cool-stuff" passHref legacyBehavior><StyledA>Drawing</StyledA></Link>
        <Link href="/reworking" passHref legacyBehavior><StyledA>In Progress</StyledA></Link>
        <Link href="/timeline" passHref legacyBehavior><StyledA>Timeline</StyledA></Link>
      </NavContainer>
    </StyledNav>
  );
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <TopMenu />
      {children}
    </div>
  );
};

export default Layout;
