import { Cascader } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchEpisodes } from '../../../redux/Episodes/episodeSlice';
interface SelectedFilters {
    location: number[];
    episode: number[];
    character: number[];
}

const SelectInput: React.FC = () => {
    const dispatch = useDispatch();
    const episodes = useSelector((state: any) => state.episodes);

    useEffect(() => {
        dispatch(fetchEpisodes() as any);
    }, []);

    if (episodes.episodes.length > 0) console.log(episodes.episodes);



    const optionsWithLabels = [
        {
            label: "Location",
            value: "location",
            children: [],
        },
        {
            label: "Episode",
            value: "episode",
            children: [],
        },
        {
            label: "Character",
            value: "character",
            children: [],
        },
    ];

    // const onChange = (value: string[][]) => {
    //     console.log(value);
    //   };

    return (
        <div>
            <Cascader
                style={{ width: "100%" }}
                options={optionsWithLabels}
                multiple
                maxTagCount="responsive"
            />
        </div>
    );
};

export default SelectInput;
