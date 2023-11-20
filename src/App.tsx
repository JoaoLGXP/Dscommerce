import computerImg from './assets/computer.png';
import cartImg from './assets/cart.svg';
import './App.css'

function App() {
  return (
    <>
      <header className="dsc-header-client">
        <nav className="dsc-container">
          <h1>DSCommerce</h1>
          <div className="dsc-user">
            <div className="dsc-cart-icon">
              <img src={cartImg} alt="Carrinho" />
            </div>
            <a href="#">Entrar</a>
          </div>
        </nav>
      </header>
      <main>
        <section id="product-details-section" className="dsc-container">
          <div className="dsc-card-details">
            <div className="dsc-product-image">
              <img src={computerImg} alt="Computador" />
            </div>
            <div className="dsc-product-description">
              <h3>R$ 5000,00</h3>
              <h4>Computador Gamer XT</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <div className="dsc-product-category">
                <div className="dsc-category">Eletrônicos</div>
                <div className="dsc-category">Computadores</div>
              </div>
            </div>
          </div>
          <div className="dsc-btns">
            <button className="dsc-btn dsc-btn-blue">Comprar</button>
            <button className="dsc-btn dsc-btn-white">Início</button>
          </div>
        </section>

      </main>
    </>
  );
}

export default App
