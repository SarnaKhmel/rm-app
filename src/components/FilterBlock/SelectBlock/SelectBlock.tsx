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

    const getUniqueValues = (key: string, data: any[]) => {
        const uniqueValues = new Set(data.map((item: any) => item[key]));
        return Array.from(uniqueValues);
    };

    const optionsWithLabels = [
        {
            label: "Location",
            value: "location",
            children: [
                {
                    label: "Add Name",
                    value: "Name",
                    children: getUniqueValues("name", locations).map((locationName) => ({
                        label: locationName,
                        value: locationName,
                        children: [],
                    })),
                },
                {
                    label: "Add Type",
                    value: "type",
                    children: getUniqueValues("type", locations).map((type) => ({
                        label: type,
                        value: type,
                        children: [],
                    })),
                },
                {
                    label: "Add Dimension",
                    value: "dimension",
                    children: getUniqueValues("dimension", locations).map((dimension) => ({
                        label: dimension,
                        value: dimension,
                        children: [],
                    })),
                },
            ],
        },
        {
            label: "Episode",
            value: "episode",
            children: [
                {
                    label: "Add Name",
                    value: "episodeName",
                    children: episodes.map((childEpisodesItem: any) => ({
                        label: childEpisodesItem.episodeName,
                        value: childEpisodesItem.episodeName,
                        children: [],
                    })),
                },
                {
                    label: "Add Episode Number",
                    value: "EpisodeNumber",
                    children: episodes.map((childEpisodesItem: any) => ({
                        label: childEpisodesItem.id,
                        value: childEpisodesItem.id,
                        children: [],
                    })),
                },
            ],
        },
        {
            label: "Character",
            value: "character",
            children: [],
        },
    ];


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
