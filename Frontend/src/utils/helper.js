export const validateEmail = (email) =>{
    const regex = /^[^\$@]+@[^\$@]+\.[^\$@]+$/;
    return regex.test(email);
};

export const getInitials = (title) =>{
    if(!title) return "";
    const words = title.split(" ");
    let initial = "";
    for(let i = 0; i<Math.min(words.length, 2); i++){
        initial += words[i][0];
    }

    return initial.toUpperCase();
}