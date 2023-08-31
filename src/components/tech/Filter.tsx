import React from 'react'

interface FilterProps {
    category: string; 
    setCategory: React.Dispatch<React.SetStateAction<string>>; 
    filterdata: { id: string; title: string }[]; // Define the correct type
}

const Filter = ({category, setCategory, filterdata}: FilterProps) => {

    function filterHandler(title: string) {
        setCategory(title);
    }

  return (
    <div>
        <div className="w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center">
            {
                filterdata.map( (data) => (
                    <button
                        className={`text-lg px-4 py-3 rounded-md font-medium text-white transition-all duration-300
                        ${category === data.title && "bg-[#5f9ed6] shadow-md "}
                        `}
                        key={data.id}
                        onClick ={() => filterHandler(data.title)}
                    >
                        {data.title}
                    </button>
                ))
            }
        </div>
    </div>
  )
}

export default Filter; 