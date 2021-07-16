import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Card, CardTitle, CardImg, CardBody, CardText } from 'reactstrap';

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className='col-4 mt-5'>
      <Card style={{ height: `500px` }} key={id}>
        <Link to={`/products/${id}`} className="link">
          <div >
            <div >
              <div className='cardImg'>
                <CardImg
                  top
                  width='100px'
                  style={{ height: `300px` }}
                  src={image}
                  alt={title}
                />
              </div>
              <div >
                <CardTitle>
                  <div className='row justify-content-center mt-2'>
                    <h6>{title}</h6>
                  </div>
                </CardTitle>
                <CardBody>
                  <div className='row'>$ {price}</div>
                  <div className='row'>
                  <CardText>{category}</CardText>
                  </div>
                </CardBody>
              </div>
            </div>
          </div>
        </Link>
      </Card>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;