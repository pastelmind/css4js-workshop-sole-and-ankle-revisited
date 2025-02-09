import React from 'react';
import styled from 'styled-components/macro';

import { GAPS, QUERIES } from '../../constants';
import Icon from '../Icon';
import Logo from '../Logo';
import NavLink from '../NavLink';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import UnstyledButton from '../UnstyledButton';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <OurNavLink href="/sale">A Vendre</OurNavLink>
          <OurNavLink href="/new">Nouvelles Versions</OurNavLink>
          <OurNavLink href="/men">Hommes</OurNavLink>
          <OurNavLink href="/women">Femmes</OurNavLink>
          <OurNavLink href="/kids">Les Enfants</OurNavLink>
          <OurNavLink href="/collections">Collections</OurNavLink>
        </Nav>
        <Side />
        <MobileNav>
          <UnstyledButton>
            <Icon id="shopping-bag" />
          </UnstyledButton>
          <UnstyledButton>
            <Icon id="search" />
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" />
          </UnstyledButton>
        </MobileNav>
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px ${GAPS.responsiveSmall};
  height: 72px;
  border-bottom: 1px solid var(--color-gray-300);
  overflow-x: scroll;
  overflow-y: hidden;
`;

const Nav = styled.nav`
  display: flex;
  gap: ${GAPS.responsiveLarge};
  margin: 0px 48px;

  @media ${QUERIES.tabletAndBelow} {
    display: none;
  }
`;

const OurNavLink = styled(NavLink)`
  min-width: max-content;
`;

const MobileNav = styled.nav`
  align-self: center;
  display: none;
  gap: ${GAPS.responsiveSmall};

  @media ${QUERIES.tabletAndBelow} {
    display: flex;
  }
`;

const Side = styled.div`
  flex: 1;
`;

export default Header;
