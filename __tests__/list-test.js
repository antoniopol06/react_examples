jest.dontMock('../src/components/list.jsx');
jest.dontMock('../src/components/item.jsx');

describe('List', function() {
  var React = require('react/addons');
  var TestUtils = React.addons.TestUtils;
  var List;
  var list;
  var items = ['cuatro', 'tres', 'dos'];
  var Item;
  beforeEach(function() {
    List = require('../src/components/list.jsx');
    Item = require('../src/components/item.jsx');
    list = TestUtils.renderIntoDocument( <List items={items}/> );
  });

  it('should exists', function() {
    // Render into document
    expect(TestUtils.isCompositeComponent(list)).toBeTruthy();
  });

  it('should have items props', function(){
    expect(list.props.items).toBeDefined();
    expect(list.props.items.length).toEqual(3);
  });

  it('should exist three item elements', function() {
    var items = TestUtils.scryRenderedComponentsWithType(list, Item);
    expect(items.length).toEqual(3);
  });


});