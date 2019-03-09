import styled from 'styled-components';
import { device, resetList } from 'themes';

export const AsideStyled = styled.aside`
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  height: 100%;
  min-width: ${({ theme }) => theme.scafolding.asideWidth};
  overflow: hidden;
  padding: 25px 0 45px;
  position: fixed;
  left: 0;
  top: 0;
  transform: translate3d(-${({ theme }) => theme.scafolding.asideWidth}, 0, 0);

  ${device.desktop`
    position: static;
    transform: translate3d(0, 0, 0);
    height: 100vh;
  `}
`;

export const AsideTitle = styled.h2`
  padding: 0 24px;
  font-weight: ${({ theme }) => theme.font.regular};
  font-size: 2em;
  line-height: 24px;
  margin: 0 0 16px;
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
    margin: 0 4px;
    color: ${({ theme }) => theme.colors.pink};
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
      border-left-color: ${({ theme }) => theme.colors.orange};
      background: ${({ theme }) => theme.colors.lightGray};
    }
  }
`;
