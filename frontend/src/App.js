import data from './data';

function App() {
  return (
    <div>
      <header>
        <a href="/">eStore</a>
      </header>
      <main>
        <h1>Featured Products</h1>
        <div className="products">
          {data.products.map((product) => (
            <div className="product" key={product.slug}>
              {/* key is required for React to know which element to update and it is unique */}
              <a href={`/product/${product.slug}`}>
                <img src={product.image} alt={product.name} />
              </a>
              <div className="product-info">
                <a href={`/product/${product.slug}`}>
                  <p>{product.name}</p>
                </a>
                <p>
                  <strong>₹{product.price}</strong>
                </p>
                <button>Add to cart</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
