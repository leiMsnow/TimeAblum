import {
    Dimensions,
    PixelRatio,
} from 'react-native';

import * as Logs from "./logs";

global.phone = {
    mWidth: Dimensions.get('window').width,
    mHeight: Dimensions.get('window').height,
    mPixel: 1 / PixelRatio.get(),
};

global.LOGS = Logs;

