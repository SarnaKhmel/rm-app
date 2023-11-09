import { Cascader, Input } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchEpisodes } from '../../../redux/Episodes/episodeSlice';
import { fetchLocation } from '../../../redux/Location/locationSlice';

import { Result } from '../../../redux/Episodes/Episode'

const SelectInput: React.FC = () => {
    const dispatch = useDispatch();
    const episodes = useSelector((state: any) => state.episodes);
    const location = useSelector((state: any) => state.location);

    useEffect(() => {
        dispatch(fetchEpisodes() as any);
        dispatch(fetchLocation() as any);
    }, []);

    console.log("location", location);
    console.log("episodes", episodes);


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
                    children: getUniqueValues("name", location.locations).map((locationName) => ({
                        label: locationName,
                        value: locationName,
                        children: [],
                    })),
                },
                {
                    label: "Add Type",
                    value: "type",
                    children: getUniqueValues("type", location.locations).map((type) => ({
                        label: type,
                        value: type,
                        children: [],
                    })),
                },
                {
                    label: "Add Dimension",
                    value: "dimension",
                    children: getUniqueValues("dimension", location.locations).map((dimension) => ({
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
                    value: "Name",
                    children: episodes.episodes.map((childEpisodesItem: any) => ({
                        label: childEpisodesItem.episodeName,
                        value: childEpisodesItem.id,
                        children: [],
                    })),
                },
                {
                    label: "Add Episode Number",
                    value: "EpisodeNumber",
                    children: episodes.episodes.map((childEpisodesItem: any) => ({
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
