/*
 * Backpack - Skyscanner's Design System
 *
 * Copyright 2018 Skyscanner Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import readme from 'react-native-bpk-component-text/readme.md';
import iosScreenshot from 'react-native-bpk-component-text/screenshots/ios/default.png';
import androidScreenshot from 'react-native-bpk-component-text/screenshots/android/default.png';
import iosScreenshotBold from 'react-native-bpk-component-text/screenshots/ios/emphasize.png';
import androidScreenshotBold from 'react-native-bpk-component-text/screenshots/android/emphasize.png';
import { spacingSm } from 'bpk-tokens/tokens/base.react.native';

import DocsPageBuilder from './../../components/DocsPageBuilder';

const components = [
  {
    id: 'default',
    title: 'Default',
    screenshots: [
      {
        title: 'iOS',
        width: spacingSm,
        height: spacingSm,
        src: `/${iosScreenshot}`,
        altText: 'iOS Default Text Component',
        subText: '(iPhone 8 simulator)',
      },
      {
        title: 'Android',
        width: spacingSm,
        height: spacingSm,
        src: `/${androidScreenshot}`,
        altText: 'Android Default Text Component',
        subText: '(Google Pixel emulator)',
      },
    ],
  },
  {
    id: 'emphasize',
    title: 'Emphasize',
    screenshots: [
      {
        title: 'iOS',
        width: spacingSm,
        height: spacingSm,
        src: `/${iosScreenshotBold}`,
        altText: 'iOS Emphasized Text Component',
        subText: '(iPhone 8 simulator)',
      },
      {
        title: 'Android',
        width: spacingSm,
        height: spacingSm,
        src: `/${androidScreenshotBold}`,
        altText: 'Android Emphasized Text Component',
        subText: '(Google Pixel emulator)',
      },
    ],
  },
];

const NativeTextPage = ({ ...rest }) => (
  <DocsPageBuilder
    title="Text"
    components={components}
    readme={readme}
    {...rest}
  />
);

export default NativeTextPage;
