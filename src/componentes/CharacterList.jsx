import { useEffect, useState } from "react"
import { Character } from "./Character"
import { NavPage } from "./NavPage"

export const CharacterList = () => {

    const [characters, setCharacters] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)

    const fetchData = async () => {
        setLoading(true)
        const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
        const data = await response.json()
        setCharacters(data.results)
        setLoading(false)
    }

  useEffect(()=>{
    fetchData()
  },[page])

  console.log(page)

    return (
        <div className="container">
            <NavPage page={page} setPage={setPage}/>
            {loading ? (
                <div className="w-[50px] h-[50px] mx-auto my-[40vh]">
                <div className="w-[50px] h-[50px] animate-spin rounded-[50px] border-r-4 ease-in-out"/>
            </div>
              ) : (
            <div className="container grid justify-items-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {characters.map(character => <Character key={character.id} character={character} loading={loading}/>)}
            </div>
            )}
            <NavPage page={page} setPage={setPage}/>
        </div>
    )
}