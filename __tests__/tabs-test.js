jest.dontMock('../src/components/tabs.jsx');

describe('TABS', function () {

  var React = require('react/addons');

  var TestUtils = React.addons.TestUtils;

  var Tabs = require('../src/components/tabs.jsx');

  var Tab = require('../src/components/tab.jsx');

  var tabs;

  var tabValues = [
    { name: 'Tab1', description: 'esto es tab1' },
    { name: 'Tab2', description: 'esto es tab2' },
    { name: 'Tab3', description: 'esto es tab3' },
  ];

  var func = function () {

  };

  beforeEach(function () {

    tabs = TestUtils.renderIntoDocument(<Tabs tabs={tabValues} handleClick={func}/>)

  });

  it('Should exists', function () {

    expect(TestUtils.isCompositeComponent(tabs)).toBeTruthy();

  });

  it('Should have three tabs', function () {
    var tabNodes = TestUtils.scryRenderedComponentsWithType(tabs, Tab);
    expect(tabNodes).toBeDefined();
    expect(tabNodes.length).toEqual(3);
  });


});