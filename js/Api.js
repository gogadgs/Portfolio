async function fetchProfileData() {
    const url = "/json/profile.json"; // arquivo json a ser inserido e construido // 
    const response = await fetch(url);

    const profileData = await response.json();
    return profileData;
};
/*  mesma função escrita sintaticamente diferente 
const fetchProfileData_two = async()=>{
    const url = '../json/profile.json';
    const response = await fetch(url);
    const profile =  await response.json();
    return  profileData;
}
*/