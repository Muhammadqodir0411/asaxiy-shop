import { createContext, useState } from "react";


const FavoritesContent = createContext({})

export const FavoritesContentProvider = ({children}) =>{
    const [favorites, setFavorites] = useState(0);
    return(
        <FavoritesContent.Provider>
            value={{
                favorites,
                setFavorites,
            }}
        </FavoritesContent.Provider>
    )
}

export default FavoritesContent;