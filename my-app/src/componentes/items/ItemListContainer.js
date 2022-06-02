import Item from './Item';

const ItemListContainer = ({ title, productos }) => {
  return (
    <div className="product-list-container">
      <h4> {title} </h4>
      {productos.map(({ title, price, image, description, stock }) => {
        return (
          <Item
            title={title}
            price={price}
            image={image}
            stock={stock}
            description={description}
          />
        );
      })}
      <Item />
    </div>
  );
};

export default ItemListContainer;
