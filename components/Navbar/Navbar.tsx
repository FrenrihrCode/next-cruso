import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Menu, Container, Form } from "semantic-ui-react";
import ShoppingCartIcon from "./ShoppingCartIcon";
import { useCart } from "store/Cart";
import { Avocado } from "components/SVGIcons";

const Navbar = () => {
  const router = useRouter();
  const { count: cartCount } = useCart();
  const [searchName, setSearchName] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchName(e.target.value);
  const searchAvocado = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push({
      pathname: "/search",
      query: { name: searchName },
    });
  };

  return (
    <Menu size="huge" borderless pointing as="header">
      <Container text>
        <Link href="/" passHref>
          <Menu.Item
            active={router.pathname === "/"}
            title="Inicio | Todos los productos"
          >
            <Avocado />
            Avo Store
          </Menu.Item>
        </Link>
        <Menu.Menu position="right">
          <Form className="search-form" onSubmit={searchAvocado}>
            <Form.Input
              placeholder="Buscar..."
              name="name"
              value={searchName}
              icon="search"
              onChange={handleChange}
            />
          </Form>
          <Link href="/cart" passHref>
            <Menu.Item active={router.pathname === "/cart"}>
              <ShoppingCartIcon cartCount={cartCount} name="Canasta" />
            </Menu.Item>
          </Link>
        </Menu.Menu>
      </Container>
      <style jsx global>{`
        .ui.menu.huge {
          font-size: 1.5rem;
        }
        .search-form {
          align-self: center;
        }
      `}</style>
    </Menu>
  );
};

export default Navbar;
