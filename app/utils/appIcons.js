import { Platform } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const normalSize = Platform.OS === 'ios' ? 32 : 16;

const replaceSuffixPattern = /--(active|big|small|very-big)/g;

const iconsMap = {
    ionIcons: {
        'md-home': [normalSize, '#222', Ionicons],
        'md-arrow-back': [normalSize, '#222', Ionicons],
        'md-close': [normalSize, '#222', Ionicons],
    },
    materialIcons: {
        'arrow-left': [normalSize, '#222', MaterialCommunityIcons],
    },
};

const defaultIconProvider = Ionicons;

let allIcons = {};
Object.keys(iconsMap).forEach(key => Object.assign(allIcons, iconsMap[key]));

const AppIcons = {};
const IconsLoaded = new Promise((resolve) => {
    Promise.all(
        Object.keys(allIcons).map(iconName => {
            const Provider = allIcons[iconName][2] || defaultIconProvider;
            return Provider.getImageSource(
                iconName.replace(replaceSuffixPattern, ''),
                allIcons[iconName][0],
                allIcons[iconName][1]
            )
        })
    ).then(sources => {
        Object.keys(allIcons)
            .forEach((iconName, idx) => (AppIcons[iconName] = sources[idx]));
        resolve(true);
    });
});

export {
    AppIcons,
    IconsLoaded,
};
