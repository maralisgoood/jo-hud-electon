import { productsData } from '../util/data';

export function getData() {
    const dataList = productsData;
    return dataList;
}

export function filterData(dataType) {
    let filteredData = getData().filter(
        (type) => type.category === dataType
    );
    return filteredData;
}