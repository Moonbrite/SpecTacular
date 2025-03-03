import {Player} from "./player";

describe('LevelUpComponent', () => {

    it('should gain 10 experience point each day', () =>{
        const player = new Player(0,0);
        player.newDay()
        const expectPlayer = new Player(0,10);
        expect(expectPlayer).toEqual(player);
    });

    it('should start with 0 in experience and level', () => {
        const player = new Player(-1,-1);
        player.newDay();
        const expectPlayer = new Player(0,10);
        expect(expectPlayer).toEqual(player);
    })

    it('should win a level when experience equal 100', () => {
        const player = new Player(0,0);

        for (let i = 0; i < 10 ; i++) {
            player.newDay()
        }
        const expectPlayer = new Player(1,0);
        expect(expectPlayer).toEqual(player);
    });

    it('should keep the same level', () => {
        const player = new Player(5,125);
        player.newDay()
        const expectPlayer = new Player(6,25);
        expect(expectPlayer).toEqual(player);
    });

    it('max level should be 10', () => {
        const player = new Player(10,100);
        player.newDay()
        const expectPlayer = new Player(10,110);
        expect(expectPlayer).toEqual(player);
    });

    it('should have a level strictly inferior to 11', () => {
        const player = new Player(10,100);
        player.newDay()
        const expectPlayer = new Player(10,110);
        expect(expectPlayer).toEqual(player);
    });

    it('should never have initial experience very high', ()  => {
        const player = new Player(0,120);
        player.newDay()
        const expectPlayer = new Player(1,20);
        expect(expectPlayer).toEqual(player);
    });

    it('should never have negative experience', () =>{
        const player = new Player(0,-20);
        player.newDay()
        const expectPlayer = new Player(0,10);
        expect(expectPlayer).toEqual(player);
    });

    it('should never have negative level', () =>{
        const player = new Player(-1,0);
        player.newDay()
        const expectPlayer = new Player(0,10);
        expect(expectPlayer).toEqual(player);
    });

    it('experience and level should be a valid number', () => {
        const player = new Player(0,-20);
        player.newDay()
        const expectPlayer = new Player(0,10);
        expect(expectPlayer).toEqual(player);
    });

    describe('experience excess', () => {

        it('should keep the experience excess after level up', () => {
            const player = new Player(0,350);
            player.newDay()
            const expectPlayer = new Player(3,50);
            expect(expectPlayer).toEqual(player);
        });
    });
})
