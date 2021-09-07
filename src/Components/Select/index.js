import React, {useState, useRef, useEffect, Children} from 'react';


export default function Select({labelName, name, value, className, children, onClick, placeholder}){ 
    const [toggle, setToggle] = useState(false);
    const selectWrapper = useRef(false);
    const items = Children.toArray(children)
    const selected = items.find((item) => item.props.value === value)

    function toggleSelect() {
        setToggle(() => !toggle)
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
            <label htmlFor="" className="text-lg mb-2 text-gray-900">
                {labelName}
            </label>
            <div className="relative" ref={selectWrapper} onClick={toggleSelect}>
                <div className={["flex justify-between cursor-pointer bg-white focus:outline-none transition-all duration-200 border px-4 py-3 w-full",
                toggle ? "border-teal-500" : "border-gray-600"].join(" ")}>
                    <span className={["text-black", placeholder ? "text-gray-400" : ""].join(" ")}>
                        {!selected?.props.children ? placeholder : selected?.props.children}
                    </span>
                    <div className="transition-all duration-200 border-gray-400 border-b-2 border-r-2 transform rotate-45 translate-y-1 w-2 h-2"></div>
                </div>
                <div className={["absolute left-0 bg-white border border-gray-600 py-6 w-full",
                toggle ? "" : "hidden"].join(" ")}>
                    {
                        items.map((item, index) => {
                            return (
                                <div key={index} className="cursor-pointer px-4 py-1 bg-white hover:bg-gray-400 transition-all duration-200"
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



