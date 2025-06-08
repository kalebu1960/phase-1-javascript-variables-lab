// test/indexTest.js

const expect = require('chai').expect;
const fs = require('fs');
const path = require('path');

// Read and evaluate the index.js file
const indexPath = path.resolve(__dirname, '..', 'index.js');
const code = fs.readFileSync(indexPath, 'utf-8');
eval(code);

describe('index.js', function () {
  describe('companyName', function () {
    it('is set as Scuber', function () {
      expect(companyName).to.equal('Scuber');
    });

    it('is defined as a const', function () {
      expect(code).to.match(/const\s+companyName\s*=\s*['"]Scuber['"]/);
    });
  });

  describe('mostProfitableNeighborhood', function () {
    it('is declared as equal to Chelsea', function () {
      expect(mostProfitableNeighborhood).to.equal('Chelsea');
    });

    it('is defined using let', function () {
      expect(code).to.match(/let\s+mostProfitableNeighborhood\s*=\s*['"]Chelsea['"]/);
    });
  });

  describe('companyCeo', function () {
    it('is declared as equal to Susan Smith', function () {
      expect(companyCeo).to.equal('Susan Smith');
    });

    it('is defined using let', function () {
      expect(code).to.match(/let\s+companyCeo\s*=\s*['"]Susan Smith['"]/);
    });
  });
});
