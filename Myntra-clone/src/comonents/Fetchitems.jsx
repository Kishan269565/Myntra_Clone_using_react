import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchstatusAction } from "../store/fetchstatusSlice";
import { itemsAction } from "../store/itemSlice";

const Fetchitems = () => {
    const fetchStatus = useSelector((store) => store.fetchstatus);

    const dispatch = useDispatch();

    useEffect(() => {
        if (fetchStatus.fetchDone) return;

        const controller = new AbortController();
        const signal = controller.signal;

        dispatch(fetchstatusAction.markfetchingDone());
        fetch("http://localhost:8080/items",)
            .then((res) => res.json())
            .then(({ items }) => {
                dispatch(fetchstatusAction.markfetchingDone());
                dispatch(fetchstatusAction.markfetchingFinished());
                dispatch(itemsAction.addInitialItems(items[0]));
            });

        return () => {
            controller.abort();
        };
    }, [fetchStatus]);
    return <>


    </>
}
export default Fetchitems;