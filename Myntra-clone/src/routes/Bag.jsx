import { useSelector } from "react-redux";
import ".././index.css"
import BagItem from "../comonents/BagItem";
import Bagsummary from "../comonents/Bagsummary";

const Bag = () => {
    const bagitemIds = useSelector(state => state.bag);
    const items = useSelector(state => state.items)
    const fialitems = items.filter(item => {
        const itemIndex = bagitemIds.indexOf(item.id);
        return itemIndex >= 0;
    })

    return <>
        <main>
            <div className="bag-page">
                <div className="bag-items-container">
                    {fialitems.map((item) => (<BagItem key={item.id} item={item} />))}
                </div>
                <Bagsummary />
            </div>
        </main>
    </>
}
export default Bag;