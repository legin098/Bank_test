import * as ReactNative from 'react-native';
jest.doMock('react-native', () => {
    const actualRN = jest.requireActual('react-native');
    return Object.setPrototypeOf(
        {
            Platform: {
                OS: 'android',
                select: objs => objs["android"]
            },
            StyleSheet: {
                ...actualRN.StyleSheet,
                //create: () => ({}),
                //flatten: () => ({}),
                //compose: () => ({}),
            },
            PermissionsAndroid: {
                ...actualRN.PermissionsAndroid,
                check: jest.fn(() => new Promise(resolve => resolve(true))),
                request: jest.fn(() => new Promise(resolve => resolve('granted'))),
            },
            Share: {
                share: jest.fn().mockImplementation((content, options) => {
                    return new Promise((resolve, reject) => {
                        const verifyShareAction = content?.message.includes('-share');
                        const verifyDismissAction = content?.message.includes('-dismiss');
                        if (verifyShareAction)
                            resolve({
                                action: 'sharedAction',
                                activityType: ''
                            });
                        if (verifyDismissAction)
                            resolve({
                                action: 'dismissedAction',
                                activityType: ''
                            });
                        reject({ error: 'link no admitido' })
                    });
                }),
                sharedAction: 'sharedAction',
                dismissedAction: 'dismissedAction'
            },
            Dimensions: {
                get: jest.fn().mockImplementation((dim) => ({
                    width: 393,
                    height: 773
                }))
            },
            UIManager: {
                setLayoutAnimationEnabledExperimental: jest.fn(),
                getViewManagerConfig: jest.fn()
            },
            LayoutAnimation: {
                ...actualRN.LayoutAnimation,
                configureNext: jest.fn(),
            },
            NativeModules: {
                ...ReactNative.NativeModules,
                RNBackgroundTimer: {
                    start: jest.fn(),
                    stop: jest.fn(),
                    setTimeout: jest.fn()
                },
                PdfViewManager: {
                    supportPDFKit: jest.fn(() => true),
                },
                RNCClipboard: {
                    getString: jest.fn().mockImplementation((code) => {
                        return new Promise((resolve, reject) => {
                            resolve(code);
                        });
                    })
                },
                UIManager: {
                    RCTVideo: {
                        Constants: {
                            ScaleToFill: 'stretch',
                            ScaleAspectFit: 'contain',
                            ScaleAspectFill: 'cover',
                            ScaleNone: ''
                        }
                    },
                    getViewManagerConfig: jest.fn().mockImplementation((name) => ({
                        Constants: {
                            ScaleToFill: 'stretch',
                            ScaleAspectFit: 'contain',
                            ScaleAspectFill: 'cover',
                            ScaleNone: ''
                        }
                    }))
                },
                RNFBAnalyticsModule: {
                    logEvent: jest.fn(),
                },
                RNFBAppModule: {
                    NATIVE_FIREBASE_APPS: [
                        {
                            appConfig: {
                                name: '[DEFAULT]',
                            },
                            options: {},
                        },
                        {
                            appConfig: {
                                name: 'secondaryFromNative',
                            },
                            options: {},
                        },
                    ],
                    addListener: jest.fn(),
                    eventsAddListener: jest.fn(),
                    eventsNotifyReady: jest.fn(),
                    removeListeners: jest.fn(),
                },
                RNFBAuthModule: {
                    APP_LANGUAGE: {
                        '[DEFAULT]': 'en-US',
                    },
                    APP_USER: {
                        '[DEFAULT]': 'jestUser',
                    },
                    addAuthStateListener: jest.fn(),
                    addIdTokenListener: jest.fn(),
                    useEmulator: jest.fn(),
                },
                RNFBCrashlyticsModule: {},
                RNFBDatabaseModule: {
                    on: jest.fn(),
                    useEmulator: jest.fn(),
                },
                RNFBFirestoreModule: {
                    settings: jest.fn(),
                    documentSet: jest.fn(),
                },
                RNFBMessagingModule: {
                    onMessage: jest.fn(),
                },
                RNFBPerfModule: {},
                RNFBStorageModule: {
                    useEmulator: jest.fn(),
                }
            },
        },
        ReactNative,
    );
});
jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');