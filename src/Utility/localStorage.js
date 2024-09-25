const getPreviousDonations = () => {
    const storageData = localStorage.getItem('donated-branches');
    if (storageData) {
        return JSON.parse(storageData); // array of strings
    }
    return [];
}

const saveNewDonation = (id) => {
    const prevData = getPreviousDonations();
    const exist = prevData.find(branchId => branchId === id); //both strings
    if (!exist) {
        prevData.push(id);
        localStorage.setItem('donated-branches', JSON.stringify(prevData));
    }
}

export { getPreviousDonations, saveNewDonation };