const titleTexts = ["Hello 😃", "Hello 😄"]; // Add your desired title texts
const catURIs = ["resources/polite_cat.png", "resources/thumbsUp_cat.png", "resources/cat-bop.gif"]; // Add your desired title texts
var flipcount = 0;
var maxflipcount = 25;
var profileimage = document.getElementById("profileimage");
const delay = ms => new Promise(res => setTimeout(res, ms));
let achievementSound = new Audio('resources/achivement/sounds/XboxOneRareAchievement.mp3')


const animateTitle = async () => {
    document.title = titleTexts[0];
    await delay(1400);
    document.title = titleTexts[1];
    await delay(250);
    animateTitle();
}

animateTitle();
const flipcat = () => {
    flipcount++;
    switch (flipcount) {
        case 10:
            profileimage.src = catURIs[0];
            break;
        case 25:
            profileimage.src = catURIs[1];
            break;
        case 45:
            profileimage.src = catURIs[2];
            flipcount = 0;
            achievement();

            break;
        default:
            break;
    }
}
profileimage.addEventListener("mouseover", flipcat, false);


const achievement = () => {
    let title = "You Booped the Cat!";
    let score = "69";
    document.querySelector('.achiev_name').innerText = title
    document.querySelector('.acheive_score').innerText = score
    document.querySelector('.unlocked').innerText = 'Achievement unlocked'
    achievementSound.play()


    document.querySelector('.circle').classList.add('circle_animate')
    document.querySelector('.banner').classList.add('banner-animate')
    document.querySelector('.achieve_disp').classList.add('achieve_disp_animate')
    setTimeout(() => {
        document.querySelector('.circle').classList.remove('circle_animate')
        document.querySelector('.banner').classList.remove('banner-animate')
        document.querySelector('.achieve_disp').classList.remove('achieve_disp_animate')

    }, 12000)
}

