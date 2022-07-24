export const NavPage = ({page, setPage}) => {
    return (
        <header className="flex justify-between pr-10 pl-10 mb-4">
                <div className="flex gap-2 font-bold">Page: <p className="animate-bounce">{page}</p></div>
                <div className="flex gap-3">
                    <button className={`${page===1?'bg-gray-500':'bg-orange-500'} rounded-lg w-20 p-1`} onClick={() => setPage(page - 1)} disabled={page===1?true:false}> Prev</button>
                    <button className="bg-lime-500 rounded-lg w-20 p-1" onClick={() => setPage(page + 1)}>Next</button>
                </div>
            </header>
    )
}