jest.mock('@react-navigation/native', () => {
    return {
        createNavigatorFactory: jest.fn(),
        useNavigation: jest.fn(),
        useIsFocused: jest.fn(),
        useLinkTo: jest.fn()
    };
});
jest.mock('@react-navigation/stack', () => ({
    createStackNavigator: jest.fn(),
}));
export const MOCK_OBJECT_NAVIGATION = {
    "addListener": jest.fn(),
    "canGoBack": jest.fn(),
    //"closeDrawer": jest.fn(),
    "dangerouslyGetParent": jest.fn(),
    "dangerouslyGetState": jest.fn(),
    "dispatch": jest.fn(),
    "getParent": jest.fn(),
    "getState": jest.fn(),
    "goBack": jest.fn(),
    "isFocused": jest.fn(),
    //"jumpTo": jest.fn(),
    "navigate": jest.fn(),
    //"openDrawer": jest.fn(),
    //"pop": jest.fn(),
    //"popToTop": jest.fn(),
    //"push": jest.fn(),
    "removeListener": jest.fn(),
    //"replace": jest.fn(),
    "reset": jest.fn(),
    "setOptions": jest.fn(),
    "setParams": jest.fn(),
    //"toggleDrawer": jest.fn()
}