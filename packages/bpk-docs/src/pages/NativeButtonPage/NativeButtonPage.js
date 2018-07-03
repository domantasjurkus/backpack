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
import readme from 'react-native-bpk-component-button/readme.md';

import iosScreenshotPrimary from 'react-native-bpk-component-button/screenshots/ios/primary.png';
import iosScreenshotSecondary from 'react-native-bpk-component-button/screenshots/ios/secondary.png';
import iosScreenshotDestructive from 'react-native-bpk-component-button/screenshots/ios/destructive.png';
import iosScreenshotFeatured from 'react-native-bpk-component-button/screenshots/ios/featured.png';
import androidScreenshotPrimary from 'react-native-bpk-component-button/screenshots/android/primary.png';
import androidScreenshotSecondary from 'react-native-bpk-component-button/screenshots/android/secondary.png';
import androidScreenshotDestructive from 'react-native-bpk-component-button/screenshots/android/destructive.png';
import androidScreenshotFeatured from 'react-native-bpk-component-button/screenshots/android/featured.png';
import { spacingSm } from 'bpk-tokens/tokens/base.react.native';

import DocsPageBuilder from './../../components/DocsPageBuilder';

const components = [
  {
    id: 'primary',
    title: 'Primary',
    screenshots: [
      {
        title: 'iOS',
        width: spacingSm,
        height: spacingSm,
        src: `/${iosScreenshotPrimary}`,
        altText: 'iOS Primary Button Component',
        subText: '(iPhone 8 simulator)',
      },
      {
        title: 'Android',
        width: spacingSm,
        height: spacingSm,
        src: `/${androidScreenshotPrimary}`,
        altText: 'Android Primary Button Component',
        subText: '(Google Pixel emulator)',
      },
    ],
  },
  {
    id: 'secondary',
    title: 'Secondary',
    screenshots: [
      {
        title: 'iOS',
        width: spacingSm,
        height: spacingSm,
        src: `/${iosScreenshotSecondary}`,
        altText: 'iOS Secondary Button Component',
        subText: '(iPhone 8 simulator)',
      },
      {
        title: 'Android',
        width: spacingSm,
        height: spacingSm,
        src: `/${androidScreenshotSecondary}`,
        altText: 'Android Secondary Button Component',
        subText: '(Google Pixel emulator)',
      },
    ],
  },
  {
    id: 'destructive',
    title: 'Destructive',
    screenshots: [
      {
        title: 'iOS',
        width: spacingSm,
        height: spacingSm,
        src: `/${iosScreenshotDestructive}`,
        altText: 'iOS Destructive Button Component',
        subText: '(iPhone 8 simulator)',
      },
      {
        title: 'Android',
        width: spacingSm,
        height: spacingSm,
        src: `/${androidScreenshotDestructive}`,
        altText: 'Android Destructive Button Component',
        subText: '(Google Pixel emulator)',
      },
    ],
  },
  {
    id: 'featured',
    title: 'Featured',
    screenshots: [
      {
        title: 'iOS',
        width: spacingSm,
        height: spacingSm,
        src: `/${iosScreenshotFeatured}`,
        altText: 'iOS Featured Button Component',
        subText: '(iPhone 8 simulator)',
      },
      {
        title: 'Android',
        width: spacingSm,
        height: spacingSm,
        src: `/${androidScreenshotFeatured}`,
        altText: 'Android Featured Button Component',
        subText: '(Google Pixel emulator)',
      },
    ],
  },
];

const NativeTextPage = ({ ...rest }) => (
  <DocsPageBuilder
    title="Buttons"
    components={components}
    readme={readme}
    showMenu
    {...rest}
  />
);

export default NativeTextPage;
