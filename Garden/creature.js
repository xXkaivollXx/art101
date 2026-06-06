let allCreatures = [];

function getCreatureFromForm() {
    const freshCreature = {
        name: $("#crName").val(),
        color: $("#crColor").val(),
        eyesNum: $("crEyesNum").val(),
    };

    return freshCreature;

};

async function getRandomName() {
    const response = await fetch(
        "https://api.gofakeit.com/funcs/petname",
        { method: "GET", });

    const nameRandom = await response.text();

    console.log("Got name:", nameRandom);
    return nameRandom;
}

async function getRandomColor() {
    const response = await fetch(
        "https://api.gofakeit.com/funcs/hexcolor",
        { method: "GET", });

    const colorRandom = await response.text();

    console.log("Got color:", colorRandom);
    return colorRandom;
}

async function randomizeCreature() {

    const eyesRandom = Math.floor(Math.random() * 5) + 1;
    const nameRandom = await getRandomName();
    const colorRandom = await getRandomColor();

    console.log();
    const randomCreature = {
        name: nameRandom,
        color: colorRandom,
        eyesNum: eyesRandom,
    };

    return randomCreature;
}

function isCreatureValid(creature) {
    if (creature.name === " ") return false;
    if (creature.name.length > 12) return false;
    if (isNaN(creature.eyesNum) || creature.eyesNum > 5) return false;
    return true;
}

function renderCreature(creature) {
    let crEyesHTML = " ";

    for (let i = 0; i < creature.eyesNum; i++) {
        crEyesHTML = crEyesHTML + "<div class='eye'>.</div>";
    }

    const html = `
        <div class="creature">
            <div class="creature-body" style="background: ${creature.color}">${crEyesHTML}

            </div>
            <div class="creature-info">${creature.name}</div>
        </div>
    `;

    return html;
}

function loadCreaturesFromDB() {
    creatureRef.once("value").then(snapshot => {
        const data = snapshot.val() || {};
        allCreatures = Object.keys(data).map(id => data[id]);
        renderAllCreatures();
    });
}

function renderAllCreatures() {
    $("#creature-list").empty();

    allCreatures.forEach((cr, index) => {
        addCreatureToDOM(cr);
    });
}

function addCreatureToDOM(creature) {
    const html = renderCreature(creature);
    $("#creature-list").append(html);
}

$("#add-creature").click(function () {
    const newCreature = getCreatureFromForm();
    console.log(newCreature);

    if (isCreatureValid(newCreature) == false) {
        return;
    }

    allCreatures.push(newCreature);
    addCreatureToDOM(newCreature);
    clearForm();
});

$("#crAdd").click(async function () {

    let newCreature;
    if ($("#crRandom").is(':checked')) {
        newCreature = await randomizeCreature();
    }
    else {
        newCreature = getCreatureFromForm();
    }

    console.log(newCreature);

    console.log(isCreatureValid(newCreature));
    if (isCreatureValid(newCreature) == false) {
        return;
    }

    allCreatures.push(newCreature);
    addCreatureToDOM(newCreature);
    creatureRef.push(newCreature);

});

$("#btn-load").click(function () {
    loadCreaturesFromDB();
});