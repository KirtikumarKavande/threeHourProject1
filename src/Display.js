import React from "react";

const Display = ({ allInformation, setAllInformation }) => {
//   const handleDelete = (id) => {
//     const updatedItem=allInformation.filter((item) => {
//       if (Number(id) !== Number(allInformation.ID)) {
//         return item
//       }
//     });
//     console.log(updatedItem)
//   };

if(allInformation.length===0){
    return
}


const handleDelete = (id) => {
    setAllInformation((prevValues) => {
      const updatedValues = prevValues.filter((item) => item.ID !== id);
      console.log(updatedValues);
      return updatedValues
    });
  };

  return (
    <div>
      {allInformation?.map((item) => {
        return (
          <>
            <div>
              {item.SellingPrice},{item.ProductName}
              <button
                onClick={() => {
                  handleDelete(item.ID);
                }}
              >
                Delete
              </button>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Display;
