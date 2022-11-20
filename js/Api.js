async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/gogadgs/Portfolio/main/json/profile.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
/*  mesma função escrita sintaticamente diferente 
const fetchProfileData_two = async()=>{
    const url = '../json/profile.json';
    const fetching = await fetch(url);
    return await fetching.json();
}
*/