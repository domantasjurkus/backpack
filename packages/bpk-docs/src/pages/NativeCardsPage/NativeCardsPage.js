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
import readme from 'react-native-bpk-component-card/readme.md';

import iosScreenshotDefault from 'react-native-bpk-component-card/screenshots/ios/default.png';
import androidScreenshotDefault from 'react-native-bpk-component-card/screenshots/android/default.png';
import iosScreenshotFocused from 'react-native-bpk-component-card/screenshots/ios/focused.png';
import androidScreenshotFocused from 'react-native-bpk-component-card/screenshots/android/focused.png';
import iosScreenshotWithoutPadding from 'react-native-bpk-component-card/screenshots/ios/without-padding.png';
import androidScreenshotWithoutPadding from 'react-native-bpk-component-card/screenshots/android/without-padding.png';
import iosScreenshotWithDivider from 'react-native-bpk-component-card/screenshots/ios/with-divider.png';
import androidScreenshotWithDivider from 'react-native-bpk-component-card/screenshots/android/with-divider.png';
import iosScreenshotWithDividerArrangedVertically from 'react-native-bpk-component-card/screenshots/ios/with-divider-arranged-vertically.png';
import androidScreenshotWithDividerArrangedVertically from 'react-native-bpk-component-card/screenshots/android/with-divider-arranged-vertically.png';
import { spacingSm } from 'bpk-tokens/tokens/base.react.native';

import DocsPageBuilder from './../../components/DocsPageBuilder';

const components = [
  {
    id: 'default',
    title: 'Default',
    blurb:
      'The default card comes with padding already applied to get you up and running quickly.',
    screenshots: [
      {
        title: 'iOS',
        width: spacingSm,
        height: spacingSm,
        src: `/${iosScreenshotDefault}`,
        altText: 'iOS Default Card Component',
        subText: '(iPhone 8 simulator)',
      },
      {
        title: 'Android',
        width: spacingSm,
        height: spacingSm,
        src: `/${androidScreenshotDefault}`,
        altText: 'Android Default Card Component',
        subText: '(Google Pixel emulator)',
      },
    ],
  },
  {
    id: 'without-padding',
    title: 'Without padding',
    blurb:
      'For full flexibility, you can opt to remove the default padding e.g. to display full-bleed images.',
    screenshots: [
      {
        title: 'iOS',
        width: spacingSm,
        height: spacingSm,
        src: `/${iosScreenshotWithoutPadding}`,
        altText: 'iOS Card Without Padding Component',
        subText: '(iPhone 8 simulator)',
      },
      {
        title: 'Android',
        width: spacingSm,
        height: spacingSm,
        src: `/${androidScreenshotWithoutPadding}`,
        altText: 'Android Card Without Padding Component',
        subText: '(Google Pixel emulator)',
      },
    ],
  },
  {
    id: 'focused',
    title: 'Focused',
    blurb: 'Cards can be focused to make them appear more prominently.',
    screenshots: [
      {
        title: 'iOS',
        width: spacingSm,
        height: spacingSm,
        src: `/${iosScreenshotFocused}`,
        altText: 'iOS Card Focused Component',
        subText: '(iPhone 8 simulator)',
      },
      {
        title: 'Android',
        width: spacingSm,
        height: spacingSm,
        src: `/${androidScreenshotFocused}`,
        altText: 'Android Card Focused Component',
        subText: '(Google Pixel emulator)',
      },
    ],
  },
  {
    id: 'with-divider',
    title: 'With divider',
    blurb:
      'Cards can have an added dividing line to divide their content into two distinct areas.',
    screenshots: [
      {
        title: 'iOS',
        width: spacingSm,
        height: spacingSm,
        src: `/${iosScreenshotWithDivider}`,
        altText: 'iOS Card With Divider Component',
        subText: '(iPhone 8 simulator)',
      },
      {
        title: 'Android',
        width: spacingSm,
        height: spacingSm,
        src: `/${androidScreenshotWithDivider}`,
        altText: 'Android Card With Divider Component',
        subText: '(Google Pixel emulator)',
      },
    ],
  },
  {
    id: 'with-divider-arranged-vertically',
    title: 'With divider arranged vertically',
    blurb:
      'Cards can be configured to display both horizontally and vertically.',
    screenshots: [
      {
        title: 'iOS',
        width: spacingSm,
        height: spacingSm,
        src: `/${iosScreenshotWithDividerArrangedVertically}`,
        altText: 'iOS Card With Divider Arranged Vertically Component',
        subText: '(iPhone 8 simulator)',
      },
      {
        title: 'Android',
        width: spacingSm,
        height: spacingSm,
        src: `/${androidScreenshotWithDividerArrangedVertically}`,
        altText: 'Android Card With Divider Arranged Vertically Component',
        subText: '(Google Pixel emulator)',
      },
    ],
  },
];

const NativeCardsPage = ({ ...rest }) => (
  <DocsPageBuilder
    title="Cards"
    components={components}
    readme={readme}
    showMenu
    {...rest}
  />
);

export default NativeCardsPage;
