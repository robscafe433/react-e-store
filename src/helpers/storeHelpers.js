export const getCategories = (storeData) => {
    if (Array.isArray(storeData)) {
        return storeData.map((category) => category.category);
    }
}

export const getCategoryProducts = (storeData, categoryInput) => {
    if (Array.isArray(storeData)) {
        return storeData.filter((category) => categoryInput === category.category)[0].products;
    }
}

export const getAllProducts = (storeData) => {
    if (Array.isArray(storeData)) {
        return storeData.reduce((all, category) => {
            return all.concat(category.products);
        }, []);
    }
}

