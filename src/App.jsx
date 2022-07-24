import { CharacterList } from "./componentes"

export const App = () => {
  return (
    <div className="bg-slate-700 text-white flex flex-col items-center min-h-screen">
      <h1 className="text-3xl text-center mb-8">Rick and Morty API</h1>
      <CharacterList />
    </div>
  )
}