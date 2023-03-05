import React from 'react';
import { Product } from './Product';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCalendar } from '@fortawesome/free-solid-svg-icons';

function formatDescription(description: string): string {
  return description.substring(0, 200) + '...';
}

interface ProductCardProps {
  product: Product;
  // onEdit: (post: Post) => void;
}

function ProductCard({product}: ProductCardProps) {
  return (
    <div className="card box-product">
      
      <Link to={'/post/' + product.tag_name} className="button rounded">
        <img className="card-img-top" width={360} height={360} src={product.images ? product.images : process.env.PUBLIC_URL + 'logo512.png'} alt={product.tag_name} />
      </Link>
      <div className="card-body" style={{height: 270}}>
        <div className="card-info">
          <small><FontAwesomeIcon icon={faCalendar} style={{fontSize: 11}} /> Ngày tạo: {product.created_at.toLocaleString('en-US', { timeZone: 'UTC' })}</small>
          <small className="card-author"><FontAwesomeIcon icon={faUser} /> {product.category_id}</small>
          <div className="clearfix" />
        </div>
        <p className="card-title">
          <Link to={'/post/' + product.tag_name} className="button rounded card-tag">
            {product.name}
          </Link>
        </p>
        <p className="card-summary">{formatDescription(product.description)}</p>
        {/* <p className="card-readmore">
          <Link to={'/post/' + post.title_tag} className="button rounded card-tag">
            Đọc tiếp <i className="fa-solid fa-angles-right" />
          </Link>
        </p> */}
      </div>
    </div>
  );
}

export default ProductCard;