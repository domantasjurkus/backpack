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
import readme from 'react-native-bpk-component-icon/readme.md';

import iosScreenshotDefault from 'react-native-bpk-component-icon/screenshots/ios/icons.png';
import androidScreenshotDefault from 'react-native-bpk-component-icon/screenshots/android/icons.png';
import { spacingSm } from 'bpk-tokens/tokens/base.react.native';

import DocsPageBuilder from './../../components/DocsPageBuilder';

const components = [
  {
    id: 'default',
    title: 'Default',
    blurb: '',
    screenshots: [
      {
        title: 'iOS',
        width: spacingSm,
        height: spacingSm,
        src: `/${iosScreenshotDefault}`,
        altText: 'iOS Default icon Component',
        subText: '(iPhone 8 simulator)',
      },
      {
        title: 'Android',
        width: spacingSm,
        height: spacingSm,
        src: `/${androidScreenshotDefault}`,
        altText: 'Android Default icon Component',
        subText: '(Google Pixel emulator)',
      },
    ],
  },
];

const NativeIconsPage = ({ ...rest }) => (
  <DocsPageBuilder
    title="Icons"
    components={components}
    readme={readme}
    {...rest}
  />
);

export default NativeIconsPage;
