const getStoredDonationData =() => {
    const storedDonationData = localStorage.getItem('donation-data');
    if (storedDonationData){
        return JSON.parse(storedDonationData);
    }
    return [];
}






const saveDonationData = id =>{
    const storedDonationData = getStoredDonationData();
    const exists = storedDonationData.find(cardId => cardId === id);
    if(!exists){
        storedDonationData.push(id);
    localStorage.setItem('donation-data',JSON.stringify(storedDonationData))

    }
    


}

export {getStoredDonationData,saveDonationData}