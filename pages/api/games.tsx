/**
 * Handles the API request and returns a JSON response.
 * @param req The Next.js API request object.
 * @param res The Next.js API response object.
 * @returns A JSON response containing the name property.
 */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export type Data = {
    appid: number
    name: string,
    playtime_2weeks: number,
    playtime_forever: number,
    img_icon_url: string,
    playtime_windows_forever: number,
    playtime_mac_forever: number,
    playtime_linux_forever: number,
    game:Game
}

export type Game = {
    appid: number,
    name: string,
    playtime_2weeks: number,
    img_icon_url: string,
    image_url: string,
    has_community_visible_stats: true,
    playtime_windows_forever: number,
    playtime_mac_forever: number,
    playtime_linux_forever: number,
    rtime_last_played: number,
    playtime_disconnected: number
}

interface EndpointProps {
    req: NextApiRequest,
    res: NextApiResponse<Data>
}

const getRecentGames = async (): Promise<any> => {
    if (!process.env.STEAM_APIKEY) {
      throw new Error('Missing Steam API key');
    }

    const response = await fetch(
      `http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=${process.env.STEAM_APIKEY}&steamid=${process.env.STEAM_ID}&format=json`
    );
  
    const data = (await response.json()) as any;
  
    return data.response.games.filter(
      ({ playtime_forever }) => playtime_forever > 1
    );
}

const getOwnedGames = async (): Promise<any> => {
    try {
        if (!process.env.STEAM_APIKEY) {
        throw new Error('Missing Steam API key');
        }

        const response = await fetch(
            `http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${process.env.STEAM_APIKEY}&steamid=${process.env.STEAM_ID}&format=json&include_appinfo=1`
        );
    
        const data = (await response.json()) as any;
    
        return data.response.games;
    } catch (err:any) {
        return null;
    }
}

export default async function handler(  
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    let result = getRecentGames().then(async(data:any) => {

        const ownedGames = await getOwnedGames();

        if (ownedGames == null) {
            return {
                error: "Could not reach the steam api."
            }
        }

        data.map((game:Data, index:number) => {
            game.game = ownedGames.filter((owned:Game) => game.appid == owned.appid)[0];
            game.game.image_url = "https://cdn.akamai.steamstatic.com/steam/apps/"+game.appid+"/header.jpg?t="+Date.now();
            return game;
        });

        return data;
    }).catch((reason:any) => {
        return {
            error: reason
        }
    });

    return res.status(200).json(await result)
    
}
