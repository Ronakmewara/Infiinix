import React from 'react'
import { Herosection } from '../HomepageComponents/Herosection'
import { VideoPlayer } from '../HomepageComponents/VideoPlayer'
import { Componylogos } from './Componylogos'
import { Desctription } from '../HomepageComponents/Desctription'
import { Services } from '../HomepageComponents/Services'
import { Successtories } from '../HomepageComponents/Successtories'
 
export const Homepage = () => {
    return (
        <div>
           
            <Herosection />
            <VideoPlayer />
            <Componylogos />
            <Desctription />
            <Services />
            <Successtories/>

        </div>
    )
}
