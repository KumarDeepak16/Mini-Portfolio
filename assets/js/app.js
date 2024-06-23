const skill = document.querySelector('.skill-hide');
const project = document.querySelector('.project-hide');

function showSkill(){
    skill.style.display = 'block';
    project.style.display = 'none';
}
function showProject(){
    skill.style.display = 'none';
    project.style.display = 'block';
}