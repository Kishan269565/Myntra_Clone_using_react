import { useDispatch, useSelector } from "react-redux";
import { bagAction } from "../store/bagslice";
import { IoIosAddCircleOutline } from "react-icons/io";
import { CiCircleRemove } from "react-icons/ci";



const Homeitem = ({ item }) => {
    const dispatch = useDispatch();
    const bagitems = useSelector(store => store.bag);
    const elementfound = bagitems.indexOf(item.id) >= 0;
    const handleAddbag = () => {
        dispatch(bagAction.addtobag(item.id));
    }
    const handleremocebag = () => {
        dispatch(bagAction.removefrombag(item.id));
    }
    return <>
        <div className="item-container">
            <img className="item-image" src={item.image} alt="item image" />
            <div className="rating">
                {item.rating.stars} ⭐ | {item.rating.count}
            </div>
            <div className="company-name">{item.company}</div>
            <div className="item-name">{item.item_name}</div>
            <div className="price">
                <span className="current-price">Rs {item.current_price}</span>
                <span className="original-price">Rs {item.original_price}</span>
                <span className="discount">({item.discount_percentage}% OFF)</span>
            </div>
            {!elementfound ? (
                <button className="btn-add-bag btn-success" onClick={handleAddbag}> <IoIosAddCircleOutline />Add to Bag</button>) :
                (<button className="btn-add-bag btn-danger" onClick={handleremocebag}> <CiCircleRemove /> Remove</button>)
            }

        </div>
    </>
}
export default Homeitem;