import React, {useState, useRef, useEffect, Children} from 'react';


export default function Select({labelName, name, value, children, onClick, error}){ 
    const [toggle, setToggle] = useState(false);
    const selectWrapper = useRef(false);
    const items = Children.toArray(children)
    const selected = items.find((item) => item.props.value === value)

    function toggleSelect() {
        setToggle(() => toggle)
    }

    function clickOutSide(ev) {
        if(selectWrapper && !selectWrapper.current.contains(ev.target)){
            setToggle(false)
        }
    }

    useEffect(() => {
        window.addEventListener("mousedown", clickOutSide)
        return () => {
            window.removeEventListener("mousedown", clickOutSide)
        }
    }, [])

    return (
        <div className="flex flex-col mb-4">
            <label htmlFor="" className="text-lg mb-2 text-purple-600">
                {labelName}
            </label>
            <div className="relative" ref={selectWrapper} onClick={toggleSelect}>
                <div className={["flex justify-between cursor-not-allowed bg-gray-800 focus:outline-none transition-all duration-200 border px-6 py-4 w-full",
                toggle ? "border-teal-500" : "border-gray-800", error ? "border-red-500" : "border-gray-800"].join(" ")}>
                    <span className="text-gray-500">
                        {selected?.props.children} 
                    </span>
                    <div className="transition-all duration-200 border-gray-400 border-b-2 border-r-2 transform rotate-45 translate-y-1 w-2 h-2"></div>
                </div>
                <span className="text-red-500 text-sm pt-3">{error}</span>
                <div className={["absolute left-0 bg-gray-800 z-10 text-gray-500 border border-gray-800 py-6 w-full",
                toggle ? "" : "hidden"].join(" ")}
                >
                    {
                        items.map((item, index) => {
                            return (
                                <div key={index} className="cursor-pointer px-4 py-1 hover:bg-purple-900 transition-all duration-200"
                                onClick={() => onClick({
                                    target: {
                                        name: name,
                                        value: item.props.value
                                    }
                                })}>
                                    {item.props.children}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}



