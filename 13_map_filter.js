const skills_holder = document.getElementById('skills');

const yourSkills = ['Networking','Backend developer','Sysadmin'];

// map
const printSkills = yourSkills.map(skill => {
    console.log(skill);
    return skill;
})

skills_holder.innerHTML = printSkills;

// filter data
const myPrimarySkill = yourSkills.filter(skill => {
    return skill === "Backend developer";
})

console.log(myPrimarySkill);

skills_holder.innerHTML = myPrimarySkill;