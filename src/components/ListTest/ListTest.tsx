
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { fetchCharacters } from "../../../../incode-test/src/store/Character/СharactersSlice";
import { RootState } from "../../redux/RootReducer";

const ListTest: React.FC = () => {
    const dispatch = useDispatch();
    // const characters = useSelector((state: RootState) => state.characters);
    // const loading = useSelector((state: RootState) => state.characters.loading);

    // useEffect(() => {
    //     dispatch(fetchCharacters(1) as any);
    // }, [dispatch]);

    // if (loading === "pending") {
    //     return <div>Loading...</div>;
    // }

    // if (loading === "rejected") {
    //     return <div>Error: Unable to fetch data.</div>;
    // }
    // console.log(characters);
    return (
        <div>
            <h2>Characters List</h2>
            <ul>

            </ul>
        </div>
    );
};

export default ListTest;
