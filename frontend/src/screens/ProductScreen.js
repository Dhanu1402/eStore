import { useParams } from 'react-router-dom';

function ProductScreen() {
  // to display slug on product screen
  const params = useParams();
  const { slug } = params;
  return (
    <div>
      <h1>{slug}</h1>
    </div>
  );
}

export default ProductScreen;
