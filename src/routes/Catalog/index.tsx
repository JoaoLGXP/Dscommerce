import './styles.css';
import HeaderClient from '../../components/HeaderClient';
import SearchBar from '../../components/SearchBar';
import LoadMoreButton from '../../components/LoadMoreButton';
import CatalogCard from '../../components/CatalogCard';

export default function Catalog() {

    return (
        <>
            <HeaderClient />
            <main>
                <section id="catalog-section" className="dsc-container">
                    <SearchBar />
                    <div className="dsc-catalog-cards dsc-margin-top">
                        <CatalogCard />
                        <CatalogCard />
                        <CatalogCard />
                        <CatalogCard />
                        <CatalogCard />
                        <CatalogCard />
                        <CatalogCard />
                        <CatalogCard />
                        <CatalogCard />
                        <CatalogCard />
                        <CatalogCard />
                        <CatalogCard />
                    </div>
                    <LoadMoreButton />
                </section>
            </main>
        </>
    );
}