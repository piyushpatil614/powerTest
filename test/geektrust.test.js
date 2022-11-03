const { getResult } = require('../geektrust')
const assert = require('assert')
const { describe } = require('mocha')

describe("Checlk", function () {
   it('Test 1', function () {
      let output = getResult(__dirname + '//input1.txt')
      assert.equal(output, 'POWER 155')
   })

   it('Test 2', function () {
      let output = getResult(__dirname + '//input2.txt')
      assert.equal(output, 'POWER 90')
   })

   it('Test 3', function () {
      let output = getResult(__dirname + '//input3.txt')
      assert.equal(output, 'POWER 110')
   })
   it('Test 4', function () {
      let output = getResult(__dirname + '//input4.txt')
      assert.equal(output, 'POWER 185')
   })
   it('Test 5', function () {
      let output = getResult(__dirname + '//input5.txt')
      assert.equal(output, 'POWER 190')
   })
   it('Test 6', function () {
      let output = getResult(__dirname + '//input6.txt')
      assert.equal(output, 'POWER 135')
   })
   it('Test 7', function () {
      let output = getResult(__dirname + '//input7.txt')
      assert.equal(output, 'POWER 130')
   })
   it('Test 8', function () {
      let output = getResult(__dirname + '//input8.txt')
      assert.equal(output, 'POWER 160')
   })
   it('Test 9', function () {
      let output = getResult(__dirname + '//input9.txt')
      assert.equal(output, 'POWER 140')
   })
   it('Test 10', function () {
      let output = getResult(__dirname + '//input10.txt')
      assert.equal(output, 'POWER 200')
   })
})