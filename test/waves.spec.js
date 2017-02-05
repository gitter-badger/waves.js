import chai from 'chai';
import Waves from '../src/index.js';

chai.expect();
const expect = chai.expect;

let lib;

describe('Given an instance of my library', function () {
    before(function () {
        lib = new Waves();
    });
    describe('when I need the name', function () {
        it('should return the name', () => {
            expect(lib.name).to.be.equal('Lib');
        });
    });

    it('should return testnet and mainnet parameters', () => {
       expect(Waves.MainNetParameters).to.not.be.null;
       expect(Waves.TestNetParameters).to.not.be.null;
    });
});