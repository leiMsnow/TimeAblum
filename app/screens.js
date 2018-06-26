import { Navigation, ScreenVisibilityListener } from 'react-native-navigation';
// test
import Drawer from "./routes/drawer";
// tab
import Home from "./routes/home";

import { displayTime } from "./utils";

global.Components = new Map();

export function registerComponents(store, Provider) {
    const componentsMap = [
        { name: 'Drawer', path: Drawer },
        { name: 'Home', path: Home },
    ];

    componentsMap.forEach(component => {
        Navigation.registerComponent(component.name, () => component.path, store, Provider);
        global.Components.set(component.name, {
            startTime: 0,
            endTime: 0,
            commandType: '',
        });
    });
}

export function registerScreenVisibilityListener() {
    new ScreenVisibilityListener({
        willAppear: ({ screen }) => {
            global.Components.get(screen).startTime = new Date();
        },
        didAppear: ({ screen, commandType }) => {
            global.Components.get(screen).commandType = commandType;
        },
        willDisappear: ({ screen }) => {
            global.Components.get(screen).endTime = new Date();
        },
        didDisappear: ({ screen }) => {
            let component = global.Components.get(screen);
            LOGS.log('ScreenListener',
                `Screen [${screen} displayed] in [${
                displayTime(component.endTime, component.startTime).join(' ')
                }'s] [${component.commandType}]`)
        }
    }).register();
}
