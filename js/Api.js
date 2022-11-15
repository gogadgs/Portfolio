async function fetchProfileData  (){
    const url = "json/profile.json"; // arquivo json a ser inserido e construido // 
     const fetching =  await fetch(url);
    return await  fetching.json();
};
/*  mesma função escrita sintaticamente diferente 
const fetchProfileData_two = async()=>{
    const url = '../json/profile.json';
    const fetching = await fetch(url);
    return await fetching.json();
}
*/
