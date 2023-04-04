import Box from '@mui/material/Box';
import styled from "styled-components";

export const MyBox = styled(Box)`
  display: none;
  @media (max-width: 768px) {
    display: flex ;
  }
`
export const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #1784B3;
`;

export const Logo = styled.img`
  font-size: 1.5rem;
  width: 10%;
  @media (max-width: 768px) {
    display: none;

  ;
  }
`;
export const MidLogo = styled.img`
  display: none;
  @media (max-width: 768px) {
    display: block;
    width: 10%;
    margin-left: auto;
    margin-right: auto;
  ;
  }
`;

export const Toggle = styled.div`
  display: none;
  cursor: pointer;
  span {
    margin-right: auto;
    margin-left: auto;
    display: block;
    height: 2px;
    width: 25px;
    margin-bottom: 5px;
    background: white;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 20px;
  }
`;

export const Menu = styled.div<{ isOpen: boolean }>`
  display: flex;
  width: 100%;
  margin-left: 30px;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 70px;
    margin-left: auto;
    left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
    background: white;
    width: 100%;
    transition: all 0.3s ease-in-out;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    overflow: hidden;
  }
`;
export const MenuItems = styled.ul`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`

export const MenuItem = styled.a`
  text-decoration: none;
  color: white;
  margin-right: 20px;
  font-size: 25px;
  cursor: pointer;
  @media (max-width: 768px) {
    margin: 0.5rem 0;
    
    color: black;
  }
`;
export const Login = styled.button`
  background-color: #FFBE5C;
  color: white;
  font-size: 20px;
  border: none;
  margin-right:auto  ;
  width: 100px;
  height: 45px;
  border-radius: 10px;
  @media (max-width: 768px) {
    margin-left:  30px ;
  }
`