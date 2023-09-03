const updateProfileInfo = (profileData) => {
    const photo = document.getElementById('profile.photo');
    photo.src = profileData.photo;
    photo.alt = profileData.name;


    const name = document.getElementById('profile.name');
    name.innerText = profileData.name;
    const job = document.getElementById('profile.job');
    job.innerText = profileData.job;
    const location = document.getElementById('profile.location');
    location.innerText = profileData.location;
    const phone = document.getElementById('profile.phone');
    phone.innerText = profileData.phone;
    phone.href = `tel :${profileData.phone}`;
    const email = document.getElementById('profile.email');
    email.innerText = profileData.email;
    email.href = `mailto :${profileData.email}`;


};
const updateSoftSkills = (profileData) => {
    const softSills = document.getElementById("profile.skills.softSkills");
    softSills.innerHTML = profileData.skills.softSkills.map(skill => `
    
            <li>${skill}</li>
    
    `).join('')

};

const updateHardSkills = (profileData) => {
    const hardSkills = document.getElementById("profile.skills.hardSkills");
    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `         
        <li><img src='${skill.logo}' alt='${skill.name}' title='${skill.name}'></li>


    `).join("");

};
const updateLanguages = (profileData) => {
    const languages = document.getElementById("profile.languages");
    languages.innerHTML = profileData.languages.map(language => `
        <li>${language}</li>
    
    `)
        .join('');
};

const updatePortfolio = (profileData) => {
    const portfolio = document.getElementById('profile.portfolio');

    portfolio.innerHTML = profileData.portfolio.map(portfolio =>
        `
    <li>
    
            <h3 ${portfolio.relogio? 'class="favicon relogio"' : 
            portfolio.calculadora?'class="favicon calculadora"':
            portfolio.Curriculo?'class="favicon Curriculo"':
            portfolio.calculadoraReact?'class="favicon calculadoraReact"':
            portfolio.pokedex?'class="favicon pokedex"':
            portfolio.qzz?'class="favicon qzz"':
            portfolio.APIRepositorios?'class="favicon APIRepositorios"':
            portfolio.cloneHBOMAX?'class="favicon cloneHBOMAX"':
            portfolio.cloneD?'class="favicon cloneD"':''}>${portfolio.name}</h3>
            <a ${portfolio.github?'class="github"':""} href="${portfolio.url}" target="_blank">${portfolio.url}</a>
            <a ${portfolio.vercel?'class="vercel"':""} href="${portfolio.url2}" target="_blank">${portfolio.url2}</a>
            <a ${portfolio.netlify?'class="netlify"':""} href="${portfolio.url3}" target="_blank">${portfolio.url3}</a>

    </li>
    
    
    `).join("");


};

const updateExperience = (profileData) => {
    const experience = document.getElementById("profile.professionalExperience");
    experience.innerHTML = profileData.professionalExperience.map(experience =>

        `

    <li>
    
            <h3 ${experience.logo.Centerlux ? 'class="logo centerlux"':experience.logo.RS?'class="logo RS"':experience.logo.DIMACI?'class="logo DIMACI"': experience.logo.FORTPEL?'class="logo FORTPEL"':experience.logo.SMT?'class="logo SMT"':""}>${experience.name}
            
            </h3>
            <span class="period" >${experience.period}</span>
            <p>${experience.description}
            </p>

    </li>
    
    
    `).join("");

};

const forwardProfessional = (profileData) => {
    const forwardProfessional = document.getElementById('profile.formação');
    forwardProfessional.innerHTML = profileData.formation.map(forwardProfessional =>
        `
        <li>
        
                <h3 ${forwardProfessional.fadergs ?'class="logo Fadergs"':forwardProfessional.Protasio?'class="logo Protasio"':forwardProfessional.Farroupilha ?'class="logo Farroupilha"':""}>${forwardProfessional.course}
                
                </h3>
                <span class="period" >${forwardProfessional.period}</span>
                <p>${forwardProfessional.description}
                </p>
    
        </li>
        
        `
    ).join("");





}


(async () => {
    const profileData = await fetchProfileData();
    updateProfileInfo(profileData);
    updateSoftSkills(profileData);
    updateHardSkills(profileData);
    updateLanguages(profileData);
    updatePortfolio(profileData);
    updateExperience(profileData);
    forwardProfessional(profileData);


})()