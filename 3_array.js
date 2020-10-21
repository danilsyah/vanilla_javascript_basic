const nama = ['danil', 'haykal', 'fika', 'udin', 'manusia biasa'];
// console.log(nama[1]);

// nama.forEach(function(item, index, array) {
//     console.log(item, index);
// });

// array method reduce
console.log(nama.reduce(function(acc, nama, ke) {
    acc[nama] = `nama ke ${ke + 1}`;
    return acc;
}, {}));


// ------------------------------------------------------------
const skills_holder = document.getElementById('skills');

// array
const yourSkills = ['Web Developer','Networking','Mobile Developer'];

let parent = '<ul>';
// tambahkan item array
yourSkills.push('devops')

yourSkills.forEach((skill) => {
    parent += '<li>' + skill + '</li>';
    console.log(skill);
});

parent += '</ul>';
skills_holder.innerHTML = parent;