import { Badge } from "@material-ui/core";
import { FavoriteBorderOutlined, Search, ShoppingCartOutlined } from "@material-ui/icons";
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

// const Language = styled.span`
//   font-size: 14px;
//   cursor: pointer;
//   ${mobile({ display: "none" })}
// `;

const SearchContainer = styled.div`
  border: 1px solid #f4f0f0;
  display: flex;
  align-items: center;
  margin-left: 25px;
  width: 100%;
`;

const Input = styled.input`
  border: none;
  padding: 9px;
  width: 100%;
  ${mobile({ width: "50px" })}
`;


const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  console.log(quantity);

  return (
    <Container>
      <Wrapper>
        <Left>
        <StyledLink to ="http://localhost:3000">
          <Logo>UNITON INDIA.</Logo>
        </StyledLink>
        </Left>
        <Center>
        {/* <Language>EN</Language> */}
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 18}} />
          </SearchContainer>
        </Center>
        <Right>
          <StyledLink to="/register">
            <MenuItem>REGISTER</MenuItem>
          </StyledLink>
          <StyledLink to="/login">
            <MenuItem>LOGIN</MenuItem>
          </StyledLink>
          <StyledLink to="/setting">
            <MenuItem>
            <Person2OutlinedIcon/> 
            {/* provide a drop down menu for logout / your orders / support  */}
            </MenuItem>
          </StyledLink>
          <StyledLink to="/favourites">
            <MenuItem>
            <FavoriteBorderOutlined/> 
         
            </MenuItem>
          </StyledLink>

          <StyledLink to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </StyledLink>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
