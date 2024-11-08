export function Appbar({label}){
     
    return (
        <div className=" bg-slate-200 flex justify-between p-4">
            <div className=" font-semibold">
            Wallet Manager
            </div>
           

            <div> Hello {label}</div>
            
        </div>
    ) 
}