jest.dontMock('../src/components/tab_system2.js');

describe('TAB SYSTEM 2', function () {

  var React = require('react/addons');

  var TestUtils = React.addons.TestUtils;

  var TabSystem2 = require('../src/components/tab_system2.js');

  var Tabs = require('../src/components/tabs.js');

  var tabSystem;

  var tabs = [
    { name: 'Tab1', description: 'esto es tab1' },
    { name: 'Tab2', description: 'esto es tab2' },
    { name: 'Tab3', description: 'esto es tab3' },
  ];
  
  beforeEach(function () {

    tabSystem = TestUtils.renderIntoDocument(<TabSystem2 tabs={tabs} />);

  });

  it('Should exist', function () {

    expect(TestUtils.isCompositeComponent(tabSystem)).toBeTruthy();

  });

  it('Should initial state currentTab', function () {
    
    expect(tabSystem.state.currentTab).toBeDefined();
    expect(tabSystem.state.currentTab).toEqual(0);
  
  });

  it('Should have tabs props', function () {

    expect(tabSystem.props.tabs).toBeDefined();
    expect(tabSystem.props.tabs.length).toEqual(3);

  });

  it('Should have one Tabs tag', function () {

    expect(TestUtils.findRenderedComponentWithType(tabSystem, Tabs)).toBeDefined();

  });


});