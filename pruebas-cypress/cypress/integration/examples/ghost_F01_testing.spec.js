const faker = require('faker');

describe('Ghost under monkeys', function() {
    const ghost_url = Cypress.env('GHOST_URL')
    const email = Cypress.env('EMAIL')
    const password = Cypress.env('PASSWORD')
    const ghost_version = Cypress.env('GHOST_VERSION')
    const is_vrt = Cypress.env('VRT')

    for (i = 1; i <= 5; i++) {
        // 5 escenario aleatorio
        it(`Login fallido en Ghost para correo registrado - escenario 1 - ${i}`, function() {
            cy.visit(ghost_url + '/ghost/#/signin');
            
            if (is_vrt && ghost_version == 'reference'){
                cy.screenshot('/bitmaps_reference/F01_e1_p1')
            }
            else if (is_vrt && ghost_version == 'test') {
                cy.screenshot('/bitmaps_test/F01_e1_p1')
            }
            cy.wait(1000)
            cy.get('#ember8').type(email)
            
            if (is_vrt && ghost_version == 'reference'){
                cy.screenshot('/bitmaps_reference/F01_e1_p2')
            }
            else if (is_vrt && ghost_version == 'test') {
                cy.screenshot('/bitmaps_test/F01_e1_p2')
            }
            let randomPassword = faker.internet.password();
            cy.get('#ember10').type(randomPassword)
            
            if (is_vrt && ghost_version == 'reference'){
                cy.screenshot('/bitmaps_reference/F01_e1_p3')
            }
            else if (is_vrt && ghost_version == 'test') {
                cy.screenshot('/bitmaps_test/F01_e1_p3')
            }
            cy.get('#ember12 > span').click()
            cy.wait(1000)
            
            if (is_vrt && ghost_version == 'reference'){
                cy.screenshot('/bitmaps_reference/F01_e1_p4')
            }
            else if (is_vrt && ghost_version == 'test') {
                cy.screenshot('/bitmaps_test/F01_e1_p4')
            }
        })
    }

    for (i = 1; i <= 5; i++) {
        // 5 escenario aleatorio
        it(`Login fallido en Ghost para contraseña registrada - escenario 2 - ${i}`, function() {
            cy.visit(ghost_url + '/ghost/#/signin');
            
            cy.wait(1000)

            let randomEmail = faker.internet.email();
            cy.get('#ember8').type(randomEmail)
            cy.get('#ember10').type(password)
            cy.get('#ember12 > span').click()
        
        })
    }

    var i, 
    dataPool = [];
    for (i = 1; i <= 5; i++) {
        dataPool.push( {
            'email' : faker.internet.email(),
            'password' : faker.internet.password()  
        });
    };
    dataPool.forEach(function(data, i) {
        // 5 dataPool
        it(`Login fallido en Ghost para contraseña registrada - escenario 3 - ${i+1}`, function() {
            cy.visit(ghost_url + '/ghost/#/signin');
            
            cy.wait(1000)
            cy.get('#ember8').type(data.email)
            cy.get('#ember10').type(data.password)
            cy.get('#ember12 > span').click()
        
        })
    })

    it('Login exitoso es Ghost (Esenario 4 para F01)', function() {
        cy.visit(ghost_url + '/ghost/#/signin');
        cy.wait(1000);
        cy.get('#ember8').type(email)
        cy.get('#ember10').type(password)
        cy.get('#ember12 > span').click()
        cy.wait(10000)
    })

})