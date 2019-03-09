import styled, { css } from 'styled-components';
import { device, resetList } from 'themes';
import { resetButton } from 'themes';

export const AsideStyled = styled.aside`
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  height: 100%;
  min-width: ${({ theme }) => theme.scafolding.asideWidth};
  overflow: hidden;
  padding-bottom: 45px;
  position: fixed;
  left: 0;
  top: 0;
  transform: ${({ menu, theme }) =>
    menu ? 'translate3d(0, 0, 0)' : `translate3d(-${theme.scafolding.asideWidth}, 0, 0)`};
  transition: transform 0.2s ${({ theme }) => theme.easing.ease};
  z-index: 1;

  ${device.desktop`
    position: static;
    transform: translate3d(0, 0, 0);
    height: 100vh;
    transition: none;
  `};
`;

export const AsideTitle = styled.h2`
  font-size: 2em;
  font-weight: ${({ theme }) => theme.font.regular};
  line-height: 24px;
  margin: 0 0 16px;
  padding: 0 24px;
`;

export const AsideFooter = styled.footer`
  align-items: center;
  bottom: 24px;
  display: flex;
  font-size: 1.2em;
  font-weight: ${({ theme }) => theme.font.semibold};
  justify-content: center;
  left: 24px;
  position: absolute;
  right: 24px;

  span {
    color: ${({ theme }) => theme.colors.pink};
    margin: 0 4px;
  }
`;

export const AsideList = styled.ul`
  ${resetList};
  max-height: 300px;
  overflow-y: auto;

  a {
    align-items: center;
    border-left: 4px solid ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.dark};
    display: flex;
    font-size: 1.6em;
    padding: 8px 24px;
    text-decoration: none;
    transition: border 0.5s ${({ theme }) => theme.easing.ease}, background 0.2s ${({ theme }) => theme.easing.ease};

    &:hover,
    &:focus {
      background: ${({ theme }) => theme.colors.lightGray};
      border-left-color: ${({ theme }) => theme.colors.orange};
    }
  }
`;

export const CloseButton = styled.button`
  ${resetButton}
  position: absolute;
  right: 21px;
  top: 23px;

  &:hover,
  &:focus {
    fill: ${({ theme }) => theme.colors.orange};
  }

  ${device.desktop`
    display: none;
  `}
`;

export const AsideOverlay = styled.div`
  background-color: ${({ theme }) => theme.colors.dark};
  bottom: 0;
  left: 0;
  opacity: 0;
  pointer-events: none;
  position: absolute;
  right: 0;
  top: 0;
  transition: opacity 0.2s ${({ theme }) => theme.easing.ease};
  visibility: hidden;

  ${({ menu }) =>
    menu &&
    css`
      opacity: 0.8;
      pointer-events: auto;
      visibility: visible;
    `}

  ${device.desktop`
    display: none;
  `}
`;
