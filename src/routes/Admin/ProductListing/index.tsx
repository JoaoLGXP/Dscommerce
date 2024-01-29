/* eslint-disable react-hooks/exhaustive-deps */
import "./styles.css";
import * as productService from "../../../services/product-service";
import ButtonInverse from "../../../components/ButtonInverse";
import LoadMoreButton from "../../../components/LoadMoreButton";
import SearchBar from "../../../components/SearchBar";
import editIcon from "../../../assets/edit.svg";
import deleteIcon from "../../../assets/delete.svg";
import { useEffect, useState } from "react";
import { ProductDTO } from "../../../models/product";
import DialogInfo from "../../../components/DialogInfo";

type QueryParams = {
    page: number;
    name: string;
}


export default function ProductListing() {

    const [dialogInfoData, setDialogInfoData] = useState({
        visible: false,
        message: "Operação com sucesso!"
    });

    const [isLastPage, setIsLastPage] = useState(false);

    const [products, setProducts] = useState<ProductDTO[]>([]);

    const [queryParams, setQueryParams] = useState<QueryParams>({
        page: 0,
        name: ""
    });

    useEffect(() => {
        productService.findPageRequest(queryParams.page, queryParams.name)
            .then(response => {
                const nextPage = response.data.content;
                setProducts(products.concat(nextPage));
                setIsLastPage(response.data.last);
            });
    }, [queryParams]);

    function handleSearch(searchText: string) {
        setProducts([]);
        setQueryParams({ ...queryParams, page: 0, name: searchText });
    }

    function handleNextPageClick() {
        setQueryParams({ ...queryParams, page: queryParams.page + 1 });
    }

    function handleDialogInfoClose() {
        setDialogInfoData({...dialogInfoData, visible: false});
    }

    function handleDeleteClick() {
        setDialogInfoData({...dialogInfoData, visible: true});
    }

    return (
        <main>
            <section id="product-listing-section" className="dsc-container">
                <div className="dsc-product-registration">
                    <h3>Cadastro de produtos</h3>
                </div>
                <div className="dsc-btns dsc-margin-bottom">
                    <ButtonInverse text="Novo" />
                </div>
                <div className="dsc-margin-bottom">
                    <SearchBar onSearch={handleSearch} />
                </div>
                <table className="dsc-table">
                    <thead>
                        <tr>
                            <th className="dsc-tb576">ID</th>
                            <th></th>
                            <th className="dsc-tb768">Preço</th>
                            <th className="dsc-txt-left">Nome</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(product => (
                                <tr key={product.id}>
                                    <td className="dsc-tb576">{product.id}</td>
                                    <td>
                                        <img
                                            className="dsc-product-listing-image"
                                            src={product.imgUrl}
                                            alt={product.name}
                                        />
                                    </td>
                                    <td className="dsc-tb768">R$ {product.price.toFixed(2)}</td>
                                    <td className="dsc-txt-left">{product.name}</td>
                                    <td>
                                        <img
                                            className="dsc-product-listing-btn"
                                            src={editIcon}
                                            alt="Editar"
                                        />
                                    </td>
                                    <td>
                                        <img
                                            onClick={handleDeleteClick}
                                            className="dsc-product-listing-btn"
                                            src={deleteIcon}
                                            alt="Deletar"
                                        />
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                {
                    !isLastPage &&
                    <div onClick={handleNextPageClick}>
                        <LoadMoreButton />
                    </div>
                }
            </section>
            {
                dialogInfoData.visible &&
                <DialogInfo
                    message={dialogInfoData.message}
                    onDialogClose={handleDialogInfoClose}
                />
            }
        </main>
    );
}