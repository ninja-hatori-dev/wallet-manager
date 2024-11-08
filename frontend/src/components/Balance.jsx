export function Balance ({label}){
    return (
        <div className=" flex bg-slate-200   hover:bg-sky-500">

            <div className="font-semibold text-lg ml-4">
             Available Balance
            </div>

            <div className=" ml-3 font-bold  mr-2">   Rs:
            </div>
         <div className="font-bold">
         {label.toFixed()}
         </div>

          
        </div>

    )
}