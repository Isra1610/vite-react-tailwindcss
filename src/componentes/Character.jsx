export const Character = ({character, loading}) => {
    return (
        <div key={character.id} className="w-[200px] mb-4">
              <h2 className="font-bold text-center text-2xl">{character.name}</h2>
              <img className="hover:scale-110 duration-150 rounded-full mt-3 mb-3 cursor-pointer" src={character.image} alt={character.name} />
            <p className="text-center text-lg">{character.location.name}</p>
        </div>
    )
}