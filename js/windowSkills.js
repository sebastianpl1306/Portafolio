const windowCompetencies = document.getElementById("competencies");
const windowSkill = document.getElementById("windowSkill");
let sizeSkills = 0;
let startElement = 0;
let endElment = 4;

const changeSkill = () =>{
    if(startElement >= 0 && endElment < sizeSkills){
        startElement++;
        endElment++;
        createSkills();
    }else{
        startElement = 0;
        endElment = 4;
        createSkills();
    }
}

const previusChangeSkill = () =>{
    if(startElement <= 0 && endElment > sizeSkills){
        startElement = 0;
        endElment = 4;
        createSkills();
    }else{
        startElement--;
        endElment--;
        createSkills();
    }
}

const createSkills = () =>{
    $(document).ready(function(){
        $.ajax({
            url: "./js/data/Skills.json"
        }).done(function ({skills}) {
            sizeSkills = skills.length;
            windowCompetencies.innerHTML = '';
            skills.forEach(({id, title, image}, i) => {
                if(startElement <= i & endElment > i){
                    windowCompetencies.innerHTML += `
                    <div class="skill" onclick="openWindow(${id})" id="${id}">
                        <h2 class="titleSkill">${title}</h2>
                        <img src="${image}" alt="">
                    </div>`;
                }
            });
        })
    });
}

const openWindow = (element) =>{
    // const item = document.getElementById(element);
    efectOpenSkill(element).then(()=>{
        $(document).ready(function(){
            $.ajax({
                url: "./js/data/Skills.json"
            }).done(function ({skills}) {
                const {title, image, description} = skills.find(({id})=>{
                    return id === element.id
                });
                document.getElementById("windowSkill").className = "windowSkill";
                 windowSkill.innerHTML =
                    `<div class="windowCont">
                        <button class="btnClose" onclick="closeWindow()">X</button>
                        <h2>${title}</h2>
                        <div class="container">
                            <div class="contRight">
                                <p>${description}</p>
                            </div>

                            <div class="contLeft">
                                <img src="${image}" alt="">
                            </div>
                        </div>
                    </div>`;
            })
        });
    });
}

const efectOpenSkill = (idAnimation) =>{
    const addAnimation = new Promise((resolve, reject) => {
        idAnimation.classList.add('click-animation');
        setTimeout(() => {
            idAnimation.classList.remove('click-animation');
            resolve();
        }, 500)
    });

    return addAnimation;
}

const closeWindow = () => {
    document.getElementById("windowSkill").className = "windowSkillClose";
}

createSkills();