describe('Los estudiantes under monkeys', function() {
    it('visits los estudiantes and survives monkeys', function() {
        cy.visit('https://losestudiantes.co');
        cy.wait(1000);
        randomEvent(10);
    })
})

function randomEvent() {

    function getRandomInt(min, max) {
        min=0;
        max=3;
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };
    if (getRandomInt(0)) {
        randomClick(10);
    }
    else if (getRandomInt(1)){
        randomText(10)
    }
    else if (getRandomInt(2)){
        randomCombo (10);
    }
    else {
        randomClickButton(10);
    }
}

function randomClick(monkeysLeft) {

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };

    var monkeysLeft = monkeysLeft;
    if(monkeysLeft > 0) {
        cy.get('a').then($links => {
            var randomLink = $links.get(getRandomInt(0, $links.length));
            if(!Cypress.dom.isHidden(randomLink)) {
                cy.wrap(randomLink).click({force: true});
                monkeysLeft = monkeysLeft - 1;
            }
            cy.wait(1000);
            randomClick(monkeysLeft);
        });
    }   
}

function randomText(monkeysLeft1) {

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };

    var monkeysLeft1 = monkeysLeft1;
    if(monkeysLeft1 > 0) {
        cy.get('input').then($text => {
            var randomTexts = $text.get(getRandomInt(0, $text.length));
            if(!Cypress.dom.isHidden(randomTexts)) {
                cy.wrap(randomTexts).type('texto de prueba',{force: true});
                monkeysLeft1 = monkeysLeft1 - 1;
            }
            cy.wait(0.00001);
            randomText(monkeysLeft1);
        });
    }   
}

function randomCombo(monkeysLeft2) {

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };

    var monkeysLeft2 = monkeysLeft2;
    if(monkeysLeft2 > 0) {
        cy.get('select').then($slct => {
            var randomCombos = $slct.get(getRandomInt(0, $slct.length));
            if(!Cypress.dom.isHidden(randomCombos)) {
                cy.wrap(randomCombos).click({force: true});
                monkeysLeft2 = monkeysLeft2 - 1;
            }
            cy.wait(0.00001);
            randomCombo(monkeysLeft2);
        });
    }   
}

function randomClickButton(monkeysLeft3) {

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };

    var monkeysLeft3 = monkeysLeft3;
    if(monkeysLeft3 > 0) {
        cy.get('button').then($btn => {
            var randomClickButtons = $btn.get(getRandomInt(0, $btn.length));
            if(!Cypress.dom.isHidden(randomClickButtons)) {
                cy.wrap(randomClickButtons).click({force: true});
                monkeysLeft3 = monkeysLeft3 - 1;
            }
            cy.wait(100);
            randomClickButton(monkeysLeft3);
        });
    }   
}

