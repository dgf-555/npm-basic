import {transfrom} from "../src/romanizer";
describe('transfrom', () => {
    it('should return X input 10', () => {
        const transfromed = transfrom(10);
        expect(transfromed).toEqual('X');
    });

});