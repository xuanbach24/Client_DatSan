import { useEffect, useState } from 'react'


const CateAdmin = ({ setFormCate, dataCate, cateSelect }) => {
    const [selectName, setSelectName] = useState([])

    useEffect(() => {
        setSelectName(cateSelect)
    }, [cateSelect])
    const handleClick = (data) => {
        setSelectName((prev) => {
            if (selectName.filter((item) => item.name == data.name).length > 0) {
                return prev.filter((s) => s.name !== data.name)
            }
            else {
                return [...prev, data]
            }
        })
    }


    const handleSubmit = () => {
        setFormCate((prevFormData) => ({
            ...prevFormData,
            category: selectName
        }))

    }
    return (
        <ul className='flex flex-wrap'>
            {dataCate && dataCate.map((data, index) => (
                <li
                    key={index}
                    className={`border-[0.5px] rounded-lg text-center text-[14px] py-[2px] cursor-pointer px-3 mt-4 mb-5 mr-5 
                ${selectName.filter((item) => item.name == data.name).length > 0 && "bg-gray-500 text-white  "}`}
                    onClick={() => handleClick(data)}>
                    {data.name}
                </li>
            ))}
            <button className='px-5 py-2 text-white rounded-[3px] bg-hoverChapter ' onClick={() => { handleSubmit() }}>Submit</button>
        </ul>
    )
}

export default CateAdmin