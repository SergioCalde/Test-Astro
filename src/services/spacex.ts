import  { type Doc, type APISpaceXResponse } from "../interfaces/launches.interface";

export const getLatestLaunches = async () => {

    const response = await fetch('https://api.spacexdata.com/v5/launches/query', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                query: {},
                options: {
                    sort: {
                        date_unix: 'asc'
                    },
                    limit: 12,
                }
            })
        });
    const { docs: launches } : APISpaceXResponse = await response.json();
    return launches;
}

export const getLaunchById = async ({ id } : { id : string }) => {

    const response = await fetch(`https://api.spacexdata.com/v5/launches/${ id }`)

    const launch  : Doc = await response.json();
    return launch;
}