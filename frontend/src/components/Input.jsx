export function Input({label,placeholder,onchange}){
    return (
        <div>
                  <div className="font-semibold text-left py-2">
                    {label}
                  </div>
                  <input onChange={onchange} className="border-2 border-gray-500 p-1 rounded-md  focus:border-teal-500"
                 type="text"  placeholder={placeholder }/>
        </div>
    )
}