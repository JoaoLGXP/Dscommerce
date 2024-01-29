import ButtonInverse from '../../../components/ButtonInverse';
import ButtonPrimary from '../../../components/ButtonPrimary';
import './styles.css';

export default function ProductForm() {
    return (
        <main>
      <section id="product-form-section" className="dsc-container">
        <div className="dsc-card-product-form">
          <div className="dsc-product-form dsc-margin-bottom">
            DADOS DO PRODUTO
          </div>
          <div className="dsc-product-form-container">
            <div>
              <input className="dsc-product-form-input" type="text" placeholder="Nome" />
            </div>
            <div>
              <input className="dsc-product-form-input" type="text" placeholder="Preço" />
            </div>
            <div>
              <input className="dsc-product-form-input" type="text" placeholder="Imagem" />
            </div>
            <div>
              <select className="dsc-product-form-input dsc-select" required>
                <option value="" disabled selected>Categorias</option>
                <option value="1">Valor 1</option>
                <option value="2">Valor 2</option>
              </select>
            </div>
            <div>
              <textarea className="dsc-product-form-description-input" placeholder="Descrição"></textarea>
            </div>
          </div>
          <div className="dsc-btns-product-form">
            <ButtonInverse text='Cancelar' />
            <ButtonPrimary text='Salavar' />
          </div>
        </div>



      </section>
    </main>
    );
}