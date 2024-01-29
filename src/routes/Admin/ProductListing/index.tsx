import './styles.css';
import ButtonInverse from '../../../components/ButtonInverse';
import LoadMoreButton from '../../../components/LoadMoreButton';
import SearchBar from '../../../components/SearchBar';
import editIcon from '../../../assets/edit.svg';
import deleteIcon from '../../../assets/delete.svg';


export default function ProductListing() {
    return (
        <main>
            <section id="confirmation-section" className="dsc-container">
                <div className="dsc-product-registration">
                    <h3>Cadastro de produtos</h3>
                </div>
                <div className="dsc-btns dsc-margin-bottom">
                    <ButtonInverse text='Novo' />
                </div>
                <div className='dsc-margin-bottom'>
                    <SearchBar />
                </div>
                <table className="dsc-table">
                    <thead>
                        <th className="dsc-tb576">ID</th>
                        <th></th>
                        <th className="dsc-tb768">Preço</th>
                        <th className="dsc-txt-left">Nome</th>
                        <th></th>
                        <th></th>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="dsc-tb576">341</td>
                            <td>
                                <img
                                    className="dsc-product-listing-image"
                                    src="images/computer.png"
                                    alt="Computador"
                                />
                            </td>
                            <td className="dsc-tb768">R$ 5000,00</td>
                            <td className="dsc-txt-left">Computador Gamer XT Plus Ultra</td>
                            <td>
                                <img
                                    className="dsc-product-listing-btn"
                                    src={editIcon}
                                    alt="Editar"
                                />
                            </td>
                            <td>
                                <img
                                    className="dsc-product-listing-btn"
                                    src={deleteIcon}
                                    alt="Deletar"
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <LoadMoreButton />
            </section>
        </main>
    );
}