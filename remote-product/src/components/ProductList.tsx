type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  instock: () => boolean;
};
type ProductListProps = {
  products: Array<Product>;
};
const mockProduct = {
  id: crypto.randomUUID(),
  name: 'Thingy',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel illo laborum aspernatur quisquam fuga! Accusamus necessitatibus consequuntur, incidunt odit possimus eligendi, sit commodi consectetur sunt quae nihil voluptates nesciunt aspernatur.',
  price: 10.99,
  stock: 2,
  instock: function () {
    return this.stock > 0;
  },
};

const ProductList = ({ products = [mockProduct] }: ProductListProps) => {
  return (
    <article>
      <header>Available Products</header>
      <section>
        {products.map((p) => {
          return (
            <section key={p.id}>
              <pre>{JSON.stringify(p, null, 2)}</pre>
            </section>
          );
        })}
      </section>
    </article>
  );
};
export default ProductList;
