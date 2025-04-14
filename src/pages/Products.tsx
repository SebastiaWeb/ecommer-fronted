import { useEffect, useState } from "react";
import Body from "../common/Body";
import Footer from "../common/Footer";
import Navbar from "../common/Navbar";
import Button from "../components/Button/Button";
import { useLocation } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import apiService from "../api";
// import { apiService } from "../services/apiService";

interface Product {
  id: string;
  name: string;
  price: number;
  description?: string;
  category?: string;
  longplot?: string; // URL de la imagen principal
  language?: string; // URL alternativa de la imagen
  statistics?: boolean;
  cyzstddef?: string;
  spherelet?: string;
  tools?: string;
  listeners?: boolean;
  reactable?: string;
  updateable?: string;
}

function Products() {
  const location = useLocation();
  const { id } = location.state || {};
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // Inicializar token si es necesario
        await apiService.initializeAuthToken();
        
        // Obtener producto de la API
        const productData = await apiService.getProductById(id);
        if (typeof productData.price === 'string') {
          productData.price = parseFloat(productData.price);
        }
        setProduct(productData);

        // Preparar imágenes para el ImageGallery
        const productImages = [];
        if (productData.longplot) {
          productImages.push({
            original: productData.longplot,
            thumbnail: productData.longplot
          });
        }
        if (productData.language) {
          productImages.push({
            original: productData.language,
            thumbnail: productData.language
          });
        }
        // Si no hay imágenes, usar placeholder
        if (productImages.length === 0) {
          productImages.push({
            original: "https://via.placeholder.com/600x400?text=No+Image",
            thumbnail: "https://via.placeholder.com/150x100?text=No+Image"
          });
        }
        setImages(productImages);
      } catch (err) {
        console.error("Error fetching product:", err);
        setError("Failed to load product. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    } else {
      setError("No product ID provided");
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return (
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <Body>
          <div className="container text-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </Body>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <Body>
          <div className="container">
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          </div>
        </Body>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <Body>
          <div className="container">
            <div className="alert alert-warning" role="alert">
              Product not found
            </div>
          </div>
        </Body>
        <Footer />
      </div>
    );
  }

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <Body>
        <div className="container row m-0 mb-5 pb-5 mb-lg-0 pb-lg-0">
          <div className="d-flex col-12 col-md-12 col-lg-6 justify-content-center align-items-center">
            <ImageGallery 
              items={images} 
              thumbnailPosition="left" 
              showPlayButton={false} 
              showBullets={false} 
              useBrowserFullscreen={false} 
              useTranslate3D={false} 
            />
          </div>
          <div className="row col-md-12 col-lg-6">
            <div className="row justify-content-between">
              <div className="info-products-title mt-3 mt-lg-0 col-12 col-md-8">
                <h3>{product.name}</h3>
              </div>
              <div className="my-3 my-lg-0 col-12 col-md-4 d-flex justify-content-md-end align-items-center">
                <Button />
              </div>
            </div>
            <div className="info-products-price col-12 col-md-3">
              <h5>$ {product.price.toFixed(2)}</h5>
            </div>
            <div className="p-3 mb-3 info-products-description">
              <span className="">Description</span>
              <div className="title-info-products-description">
                <p>{product.description || "No description available"}</p>
              </div>
            </div>
            <div className="p-3 mb-3 info-products-description">
              <span className="">Shipping Information</span>
              <div className="title-info-products-description">
                <ul>
                  <li>Standard shipping: <span className="info-color-black">3-5 business days</span></li>
                  <li>Express shipping options available at checkout</li>
                </ul>
              </div>
            </div>
            <div className="p-3 mb-3 info-products-description">
              <span className="">Features</span>
              <div className="title-info-products-description">
                <ul>
                  <li>Category: {product.category || "Not specified"}</li>
                  {product.statistics && <li>Includes statistics</li>}
                  {product.listeners && <li>Has listeners feature</li>}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Body>
      <div className="pb-5 pb-lg-0"></div>
      <Footer />
    </div>
  );
}

export default Products;