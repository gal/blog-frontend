import React from "react";
import styled from "styled-components"
// import "./Nav.css";

const ListItem = styled.li`
  height: 100%;
  width: height;

  display: flex;
  align-items: center;
  justify-content: center;
`

const Anchor = styled.a`
  width: 4rem;
  height: 4rem;

  background-color: #787878;

  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.6rem;
  margin: 0.2rem;
`

class NavItem extends React.Component {
  render() {
    return (
      <ListItem>
        <Anchor href="/" className="nav-item">
          {this.props.icon}
        </Anchor>
      </ListItem>
    );
  }
}



class Nav extends React.Component {
  render() {
    return (
      <nav>
        <ul>{this.props.children}</ul>
      </nav>
    );
  }
}

export { Nav, NavItem };
