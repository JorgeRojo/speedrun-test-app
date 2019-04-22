describe('end to end test: ', () => {

    const mockReduxStore = (cb) => {
        cy.fixture('mock-state.json').then((mockState) => {

            cy.visit('/');

            cy.window()
                .its('reduxStore')
                .invoke('replaceReducer', (state = {}, action) => {
                    switch (action.type) {
                        case 'MOCK': return action.payload
                        default: return state;
                    }
                });

            cy.window()
                .its('reduxStore')
                .invoke('dispatch', {
                    type: 'MOCK',
                    payload: mockState
                });

            cy.window()
                .its('reduxStore')
                .invoke('getState')
                .should('deep.equal', mockState);

            cb(mockState);
        });
    };

    it('open home', () => {

        cy.visit('/');

        cy.get('h1')
            .should('have.length', 1)
            .contains('Speedrun games list');
    });

    it('display games list', () => {
        mockReduxStore(({ entities }) => {

            const { name, logoUri } = entities.games.data[0];

            cy.get('h2')
                .should('have.length', 1)
                .contains(name);

            cy.get('img')
                .should('have.length', 1)
                .invoke('attr', 'src')
                .should('eq', logoUri);
        });
    });

    it('open run screen and go back', () => {
        mockReduxStore(({ entities }) => {
            const { gameId } = entities.runs.data[0];
            const { name } = entities.players.data[0];

            cy.get(`a[href*="${gameId}"]`)
                .should('have.length', 1)
                .click();

            cy.get('h1')
                .should('have.length', 1)
                .contains(name);

            cy.get('a[href="/"]')
                .should('have.length', 1)
                .click();

            cy.get('h1')
                .should('have.length', 1)
                .contains('Speedrun games list');
        });
    });

    it('open run screen an display data', () => {
        mockReduxStore(({ entities }) => {
            const { name, logoUri } = entities.games.data[0];
            const { gameId, videoLink, time } = entities.runs.data[0];
            const date = new Date(time * 1000);
            const hours = date.getUTCHours();
            const minutes = date.getUTCMinutes();
            const seconds = date.getUTCSeconds();

            cy.get(`a[href*="${gameId}"]`)
                .should('have.length', 1)
                .click();

            cy.url().should('includes', `/${gameId}`);

            cy.get(`a[href*="${videoLink}"]`)
                .should('have.length', 1)
                .should('have.attr', 'target', '_blank');

            cy.get(`p`)
                .should('have.length', 1)
                .contains(`Time: ${hours}h ${minutes}m ${seconds}s`);

            cy.get('h2')
                .should('have.length', 1)
                .contains(name);

            cy.get('img')
                .should('have.length', 1)
                .invoke('attr', 'src')
                .should('eq', logoUri);

        });
    });

});
