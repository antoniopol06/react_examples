jest.dontMock('../src/components/tab_system.js');

describe('TAB SYSTEM 1', function () {

  var React = require('react');

  var ReactDOM = require('react-dom');
  
  var TestUtils = require('react-addons-test-utils');

  var TabSystem = require('../src/components/tab_system.js');

  var tabSystem;

  var tabs = [
    { name: 'Tab1', description: 'esto es tab1' },
    { name: 'Tab2', description: 'esto es tab2' },
    { name: 'Tab3', description: 'esto es tab3' },
  ];
  
  beforeEach(function () {

    tabSystem = TestUtils.renderIntoDocument(<TabSystem tabs={tabs} />);

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

  it('Should have when is loaded the description of tab 0', function() {
    var description = TestUtils.findRenderedDOMComponentWithClass(tabSystem, 'description');
    expect(ReactDOM.findDOMNode(description).textContent).toEqual('esto es tab1');
  });

  it('Should change currentTab when clicking other tab', function() {
    var tabNodes= TestUtils.scryRenderedDOMComponentsWithClass(tabSystem, 'tab');
    var description = TestUtils.findRenderedDOMComponentWithClass(tabSystem, 'description');
    TestUtils.Simulate.click(ReactDOM.findDOMNode(tabNodes[1]));
    expect(ReactDOM.findDOMNode(description).textContent).toEqual('esto es tab2');
    expect(tabSystem.state.currentTab).toEqual(1);
  });



});