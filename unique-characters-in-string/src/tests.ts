/// <reference path='../typings/main.d.ts' />
let expect = require('chai').expect;

import { 
    hasUniqueCharacters,
    hasUniqueCharactersRev1
} from './index';

describe('main', () => {
    describe('hasUniqueCharacters', () => {
        it('should return true when passed a falsy value', () => {
            let result: boolean = hasUniqueCharacters("");
            expect(result).to.equal(true);
        });

        it('should return true when passed a string with all unique characters', () => {
            let result: boolean = hasUniqueCharacters('abcdef');
            expect(result).to.equal(true);
        });

        it('should return false when passed a string with duplicated characters', () => {
            let result: boolean = hasUniqueCharacters('abcdefa');
            expect(result).to.equal(false);
        });
    });

    describe('hasUniqueCharactersRev1', () => {
        it('should return true when passed a falsy value', () => {
            let result: boolean = hasUniqueCharactersRev1("");
            expect(result).to.equal(true);
        });

        it('should return true when passed a string with all unique characters', () => {
            let result: boolean = hasUniqueCharactersRev1('abcdef');
            expect(result).to.equal(true);
        });

        it('should return false when passed a string with duplicated characters', () => {
            let result: boolean = hasUniqueCharactersRev1('abcdefa');
            expect(result).to.equal(false);
        });
    });
});
