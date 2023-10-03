import { useDispatch, useSelector } from "react-redux";
import { addToWishlist, removeFromWishlist } from "../../store/slices/wishlist";

const WishlistPage = () => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);

  const handleAddToWishlist = (item) => {
    dispatch(addToWishlist(item));
  };

  const handleRemoveFromWishlist = (itemId) => {
    dispatch(removeFromWishlist(itemId));
  };

  return (
    <div>
      <h1>Wishlist Page</h1>
      <ul>
        {wishlistItems.map((item) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => handleRemoveFromWishlist(item.id)}>
              Remove from Wishlist
            </button>
          </li>
        ))}
      </ul>
      <button
        onClick={() => handleAddToWishlist({ id: 1, name: "Example Item" })}
      >
        Add to Wishlist
      </button>
    </div>
  );
};

export default WishlistPage;
