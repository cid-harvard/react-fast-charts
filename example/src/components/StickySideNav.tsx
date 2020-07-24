import React from 'react';
import {
  NavContainer,
  gridSmallMediaWidth,
} from '../styling/Grid';
import styled from 'styled-components/macro';
import {
  baseColor,
  secondaryFont,
} from '../styling/styleUtils';

export const mobileHeight = 50; // in px

const Ul = styled.ul`
  top: 0;
  background-color: #fff;
  margin: 1rem 0 0;
  padding: 0 0 0 1.3rem;
  list-style: none;
  text-align: right;
  border-top: solid 1px transparent;

  @media (max-width: ${gridSmallMediaWidth}px) {
    display: none;
  }
`;

const Link = styled.a`
  padding: 0.4rem;
  height: 1.9rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: var(--background-color);
  text-decoration: none;
  color: ${baseColor};
  font-family: ${secondaryFont};
  font-size: 0.8rem;
  letter-spacing: 1px;

  &:after {
    content: '';
    display: block;
    height: 100%;
    width: 0.35rem;
    margin-left: 0.35rem;
    background-color: var(--border-color);
  }

  &:hover {
    background-color: var(--hover-color);
    &:after {
      background-color: var(--border-hover-color);
    }
  }


  @media (max-width: ${gridSmallMediaWidth}px) {
    flex-direction: row-reverse;
    &:after {
      margin-right: 0.35rem;
    }
  }
`;

// Allow CSS custom properties
declare module 'csstype' {
  interface Properties {
    '--background-color'?: string;
    '--hover-color'?: string;
    '--border-color'?: string;
    '--border-hover-color'?: string;
  }
}

export interface NavItem {
  label: string;
  target: string;
}

interface Props {
  links: NavItem[];
  backgroundColor: string;
  hoverColor: string;
  borderColor: string;
}


const StickySideNav = (props: Props) => {
  const {
    links, backgroundColor, hoverColor, borderColor,
   } = props;


  const colorTheme: React.CSSProperties = {
    '--background-color': backgroundColor,
    '--hover-color': hoverColor,
    '--border-color': hoverColor,
    '--border-hover-color': borderColor,
  };

  const navLinks = links.map(({label, target}) => {
    return (
      <li key={label + target}>
        <Link
          href={target}
          style={colorTheme}
        >
          {label}
        </Link>
      </li>
    );
  });

  return (
    <NavContainer>
      <Ul>
        {navLinks}
      </Ul>
    </NavContainer>
  );
};

export default StickySideNav;