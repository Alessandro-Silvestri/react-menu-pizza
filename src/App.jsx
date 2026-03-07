import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

////////////////////////// COMPONENTS //////////////////////////
function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  ); // the style has to be a JavaScript object
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <ul className="pizzas">
        {/* in react, using map, is mandatory using the internal property: "key" and indicate a property, in the object that is unique */}
        {pizzaData.map((pizza) => {
          return !pizza.soldOut ? (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ) : null;
        })}
      </ul>
    </main>
  );
}

// best practice: passing an object as a props and using the property I need
function Pizza(props) {
  return (
    <li className="pizza">
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.photoName} />
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredient}</p>
        <span>{props.pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour < closeHour && hour >= openHour;
  return (
    <footer className="footer">
      {isOpen ? (
        <div>
          <p>We are open until {closeHour}:00. Come or visit us online</p>
        </div>
      ) : (
        <p>
          We are closed. You can find us open between: {openHour}:00 and{" "}
          {closeHour}:00 pm
        </p>
      )}
      <button className="btn">Order</button>
    </footer>
  );
}
//////////////////////////////////////////////////////////////////

function App() {
  return (
    <>
      <Header />
      <Menu />
      <Footer className="footer" />
    </>
  );
}

export default App;
