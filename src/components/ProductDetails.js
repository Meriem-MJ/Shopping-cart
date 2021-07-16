import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct, removeSelectedProduct } from "../redux/actions/productsActions";
import { Card, CardTitle, CardImg, CardBody, CardText } from 'reactstrap';
import { Button } from 'reactstrap';

const ProductDetails = () => {
  const { productId } = useParams();
  let product = useSelector((state) => state.product);
  const { image, title, price, category, description } = product;
  const dispatch = useDispatch();
  const fetchProductDetail = async (id) => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail(productId);
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);
  return (
    <div>
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className='cardDetail'>
          <div>
            <div>
              <Card style={{ height:'500px' }}>
                <div className='innerCard' >
                  <div className='cardImg'>
                    <CardImg
                      top
                      width='100%'
                      src={image} 
                      alt='product'
                      style={{ height: `300px` }}
                    />
                  </div>
                  <div>
                    <div>
                    <CardTitle>
                    <h1>{title}</h1>
                    </CardTitle>
                    </div>
                    <CardBody>
                      <h2>
                        <a >${price}</a>
                      </h2>
                      <h3>{category}</h3>
                      <CardText>
                      <p>{description}</p>
                      </CardText>
                      <div tabIndex="0">
                        <Button color="danger">Add to Cart</Button>
                      </div>
                    </CardBody>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;