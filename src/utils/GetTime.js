const getTime = () => {
    const now = new Date();
    const hours = (now.getHours()+3).toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
};

export default getTime;