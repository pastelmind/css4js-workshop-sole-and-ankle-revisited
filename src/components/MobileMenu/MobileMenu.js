/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { COLORS } from '../../constants';

import NavLink from '../NavLink';
import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content aria-label="navigation menu">
        <DismissButton onClick={onDismiss}>
          <Icon id="close" />
        </DismissButton>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Footer>
          <FooterLink href="/terms">Terms and Conditions</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/contact">Contact Us</FooterLink>
        </Footer>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: hsl(220deg 3% 20% / 0.8);
`;

const Content = styled(DialogContent)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 300px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${COLORS.white};
`;

const DismissButton = styled(UnstyledButton)`
  position: absolute;
  top: 32px;
  right: 24px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Footer = styled.footer`
  position: absolute;
  bottom: 32px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const FooterLink = styled.a`
  font-size: 0.875rem;
  text-decoration: none;
  color: ${COLORS.gray['700']}
`;

export default MobileMenu;
