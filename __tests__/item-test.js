jest.dontMock('../src/components/item.js');

describe('Item', function () {
  var React = require('react');
  var TestUtils = require('react-addons-test-utils');
  var Item;
  var item;
  var value = "value";
  
  describe('Item with value', function () {

    beforeEach(function () {
      Item = require('../src/components/item.js');
      item = TestUtils.renderIntoDocument(<Item val={value} />)
    });

    it('Should exists', function () {
      expect(TestUtils.isCompositeComponent(item)).toBeTruthy();
    });

    it('Should have val prop', function () {
      expect(item.props.val).toBeDefined();
      expect(item.props.val).toEqual('value');
    });

  });

  describe('Item without value', function (){
    
    beforeEach(function() {
      Item = require('../src/components/item.js');
      item = TestUtils.renderIntoDocument(<Item />)
    });

    it('Should exists', function () {
      expect(TestUtils.isCompositeComponent(item)).toBeTruthy();
    });

    it('Should have val prop by default value', function () {
      expect(item.props.val).toBeDefined();
      expect(item.props.val).toEqual('default');
    });

  });



});