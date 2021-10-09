export const getCategories = (storeData) => {
    if (storeData && Array.isArray(storeData)) {
        return storeData.map((category) => category.category);
    }
}

export const getCategoriesImages = (storeData) => {
    if (storeData && Array.isArray(storeData)) {
        return storeData.map((category) => [category.category, category.categoryImage]);
    }
}

export const getCategoryProducts = (storeData, categoryInput) => {
    if (storeData && Array.isArray(storeData) && categoryInput) {
        return storeData.filter((category) => categoryInput === category.category)[0].products;
    }
}

export const getAllProducts = (storeData) => {
    if (storeData && Array.isArray(storeData)) {
        return storeData.reduce((all, category) => {
            return all.concat(category.products);
        }, []);
    }
}

export const getBanners = (storeResourceData) => {
    if (storeResourceData && Array.isArray(storeResourceData.banners)) {
        return storeResourceData.banners;
    }
}