import styled, { css } from 'styled-components';
import { resetButton } from 'themes';

export const Modal = styled.div`
  width: 100%;
  max-width: 700px;
  background: white;
  position: fixed;
  top: 300px;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  z-index: 2;
  border-radius: 8px;
`;

export const ModalOverlay = styled.div`
  background-color: ${({ theme }) => theme.colors.dark};
  bottom: 0;
  left: 0;
  opacity: 0;
  pointer-events: none;
  position: fixed;
  right: 0;
  top: 0;
  transition: opacity 0.2s ${({ theme }) => theme.easing.ease};
  visibility: hidden;
  z-index: 1;

  ${({ open }) =>
    open &&
    css`
      opacity: 0.8;
      pointer-events: auto;
      visibility: visible;
    `}
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderGray};

  h3 {
    font-size: 1.6em;
    line-height: 24px;
    font-weight: ${({ theme }) => theme.font.regular};
    margin: 0;
  }
`;

export const Body = styled.div`
  padding: 24px;

  form {
    display: flex;
    flex-direction: column;

    label {
      textarea {
        height: 100px;
      }
    }
  }
`;

export const CloseButton = styled.button`
  ${resetButton}

  &:hover, &:focus {
    fill: ${({ theme }) => theme.colors.orange};
  }
`;
