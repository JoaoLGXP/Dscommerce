import './styles.css';
import SearchBar from '../../../components/SearchBar';
import LoadMoreButton from '../../../components/LoadMoreButton';
import CatalogCard from '../../../components/CatalogCard';
import * as productService from '../../../services/product-service';

export default function Catalog() {

  return (
    <main>
      <section id="catalog-section" className="dsc-container">
        <SearchBar />
        <div className="dsc-catalog-cards dsc-margin-top">
          {
            productService.findAll().map(
              product => <CatalogCard key={product.id} product={product} />
            )
          }
        </div>
        <LoadMoreButton />
      </section>
    </main>
  );
}