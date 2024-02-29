import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import AnimateWhenVisible from "../misc/AnimateWhenVisible";

const Games = () => {

    const [ games, setGames ] = useState<any|null>(null);

    useEffect(() => { 
        async function updateGames() {
            let games = await axios.get('/api/games').then((res) => res.data);
            console.log(games);
            if (games.error) {
                return;
            }
            setGames(games);
        }

        updateGames();
    } , []);

    return(
        <div className="">
            <p className="text-2xl font-bold mb-2">
                My Recent Games
            </p>
            <p className="mb-5">Real-time, in the Last 2 weeks</p>

            <div className="grid group">

            {games?.map((game:any, index:number) => {
                return(
                    <AnimateWhenVisible key={index}>
                        <Link 
                            href={"https://store.steampowered.com/app/"+game.appid} 
                            target="_blank"
                            rel="nofollow">
                            <div className="bg-white rounded-2xl shadow-md p-5 mb-3 md:group-hover:opacity-30 md:hover:!opacity-[1] md:transition-all md:lg:hover:translate-x-[0.7em] md:duration-[400ms]">
                                <div className="flex gap-3">
                                    <div className="max-w-[120px]">
                                        <Image 
                                            src={game.game.image_url} 
                                            className="w-full rounded-xl"
                                            width={460} 
                                            height={215} 
                                            alt={game.name}/>
                                    </div>
                                    <div>
                                        <p className="font-bold">{game.name}</p>
                                        <p>{Math.floor(game.playtime_2weeks / 60)} Hrs {(game.playtime_2weeks % 60)} mins</p>
                                    </div>
                                </div>
                                
                            </div>
                        </Link>
                    </AnimateWhenVisible>
                )
            })}
            </div>
        </div>
    )
}

export default Games;