import { useEffect, useState } from "react";
import Body from "../common/Body";
import Footer from "../common/Footer";
import Navbar from "../common/Navbar";
import CardProduct from "../components/CardProduct/CardProduct";
import apiService from "../api";
// import { apiService } from "../apiService";

interface Product {
  id: string;
  name: string;
  price: number;
  description?: string;
  category?: string;
  longplot?: string; // URL de la imagen
  language?: string; // URL alternativa de la imagen
}

function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Opcional: Inicializar token si es necesario
        await apiService.initializeAuthToken();
        
        // Obtener productos de la API
        const productsData = await apiService.getAllProducts();
        setProducts(productsData);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Failed to load products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Función para obtener la URL de la imagen (usa longplot o language)
  const getImageUrl = (product: Product) => {
    return product.longplot || product.language || "https://via.placeholder.com/300";
  };

  if (loading) {
    return (
      <div className="">
        <Navbar />
        <Body>
          <div className="container container-products p-5">
            <div className="text-center py-5">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
        </Body>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="">
        <Navbar />
        <Body>
          <div className="container container-products p-5">
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          </div>
        </Body>
        <Footer />
      </div>
    );
  }

  return (
    <div className="">
      <Navbar />
      <Body>
        <div className="container container-products p-5">
          <div>
            <h1 className="text-left">PRODUCTS</h1>
          </div>
          <div className="row justify-content-center pt-4 pb-5 mb-5">
            {products.map((product) => (
              <CardProduct
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                url={getImageUrl(product)}
                // description={product.description}
              />
            ))}
          </div>
        </div>
      </Body>
      <Footer />
    </div>
  );
}

export default Home;