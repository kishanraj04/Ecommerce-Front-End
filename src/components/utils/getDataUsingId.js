

export function getDataUsingId(id,array)
{
   const filterProduct = array.find((data)=>data.id==id)
   return filterProduct  
}