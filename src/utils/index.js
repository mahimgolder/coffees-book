import toast from "react-hot-toast"

// get all coffee to local storage 
const getAllFavorites = () => {
    const all = localStorage.getItem('favorites')
    if(all){
        const favorites = JSON.parse(all)
        return favorites
    }
    else{
        console.log([])
        return []
    }
}


// add to coffee to local storage 
const addFavorite = coffee => {
    // get all previously saved coffee data
    const favorites = getAllFavorites()
    const isExist = favorites.find(item => item.id == coffee.id)
    if(isExist){
        return toast.error('Coffee Already exists!');
    }

    favorites.push(coffee)
    localStorage.setItem('favorites', JSON.stringify(favorites));
    toast.success('Successfully Added!');
}




// remove a coffee from local storage 
const removeFavorite = (id) => {
    // get all previously saved coffee data
    const favorites = getAllFavorites()
    const remaining = favorites.filter(coffee => coffee.id != id)
    localStorage.setItem('favorites', JSON.stringify(remaining));
    toast.success('Successfully Removed!');
}


export {addFavorite, getAllFavorites, removeFavorite}