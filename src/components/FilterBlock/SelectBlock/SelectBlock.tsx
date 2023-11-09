import { Cascader, Input } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchEpisodes } from '../../../redux/Episodes/episodeSlice';
import { fetchLocation } from '../../../redux/Location/locationSlice';
import { selectEpisodes, selectLocation } from '../../../redux/selectors';

const SelectInput: React.FC = () => {
    const dispatch = useDispatch();
    const episodes = useSelector(selectEpisodes);
    const locations = useSelector(selectLocation);

    useEffect(() => {
        dispatch(fetchEpisodes() as any,);
        dispatch(fetchLocation() as any);
    }, [dispatch]);


    return (
        <div>

            {episodes.map(episode => (
                <li key={episode.id}>
                    {episode.episodeName}
                </li>
            ))}


            --------------------------------
            {locations.map(location => (
                <li key={location.id}>
                    {location.locationName}
                </li>
            ))}
        </div>
    );
};

export default SelectInput;
