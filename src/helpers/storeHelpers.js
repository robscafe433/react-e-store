export const getCategories = (storeData) => {
    if (Array.isArray(storeData)) {
        return storeData.map((category) => category.category);
    }
}

export const getCategoriesImages = (storeData) => {
    if (Array.isArray(storeData)) {
        return storeData.map((category) => [category.category, category.categoryImage]);
    }
}

export const getCategoryProducts = (storeData, categoryInput) => {
    if (Array.isArray(storeData) && categoryInput) {
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

export const getBanners = (storeResourceData) => {
    if (Array.isArray(storeResourceData.banners)) {
        return storeResourceData.banners;
    }
}