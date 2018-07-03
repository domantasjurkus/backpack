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
import readme from 'react-native-bpk-component-panel/readme.md';

import iosScreenshotDefault from 'react-native-bpk-component-panel/screenshots/ios/default.png';
import androidScreenshotDefault from 'react-native-bpk-component-panel/screenshots/android/default.png';
import iosScreenshotWithoutPadding from 'react-native-bpk-component-panel/screenshots/ios/without-padding.png';
import androidScreenshotWithoutPadding from 'react-native-bpk-component-panel/screenshots/android/without-padding.png';
import iosScreenshotWithDivider from 'react-native-bpk-component-panel/screenshots/ios/with-divider.png';
import androidScreenshotWithDivider from 'react-native-bpk-component-panel/screenshots/android/with-divider.png';
import iosScreenshotWithDividerArrangedVertically from 'react-native-bpk-component-panel/screenshots/ios/with-divider-arranged-vertically.png';
import androidScreenshotWithDividerArrangedVertically from 'react-native-bpk-component-panel/screenshots/android/with-divider-arranged-vertically.png';
import { spacingSm } from 'bpk-tokens/tokens/base.react.native';

import DocsPageBuilder from './../../components/DocsPageBuilder';

const components = [
  {
    id: 'default',
    title: 'Default',
    blurb:
      'The default panel comes with padding already applied to get you up and running quickly.',
    screenshots: [
      {
        title: 'iOS',
        width: spacingSm,
        height: spacingSm,
        src: `/${iosScreenshotDefault}`,
        altText: 'iOS Default Panel Component',
        subText: '(iPhone 8 simulator)',
      },
      {
        title: 'Android',
        width: spacingSm,
        height: spacingSm,
        src: `/${androidScreenshotDefault}`,
        altText: 'Android Default Panel Component',
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
        altText: 'iOS Panel Without Padding Component',
        subText: '(iPhone 8 simulator)',
      },
      {
        title: 'Android',
        width: spacingSm,
        height: spacingSm,
        src: `/${androidScreenshotWithoutPadding}`,
        altText: 'Android Panel Without Padding Component',
        subText: '(Google Pixel emulator)',
      },
    ],
  },
  {
    id: 'with-divider',
    title: 'With divider',
    blurb:
      'Panels can have an added dividing line to divide their content into two distinct areas.',
    screenshots: [
      {
        title: 'iOS',
        width: spacingSm,
        height: spacingSm,
        src: `/${iosScreenshotWithDivider}`,
        altText: 'iOS Panel With Divider Component',
        subText: '(iPhone 8 simulator)',
      },
      {
        title: 'Android',
        width: spacingSm,
        height: spacingSm,
        src: `/${androidScreenshotWithDivider}`,
        altText: 'Android Panel With Divider Component',
        subText: '(Google Pixel emulator)',
      },
    ],
  },
  {
    id: 'with-divider-arranged-vertically',
    title: 'With divider arranged vertically',
    blurb:
      'Panels can be configured to display both horizontally and vertically.',
    screenshots: [
      {
        title: 'iOS',
        width: spacingSm,
        height: spacingSm,
        src: `/${iosScreenshotWithDividerArrangedVertically}`,
        altText: 'iOS Panel With Divider Arranged Vertically Component',
        subText: '(iPhone 8 simulator)',
      },
      {
        title: 'Android',
        width: spacingSm,
        height: spacingSm,
        src: `/${androidScreenshotWithDividerArrangedVertically}`,
        altText: 'Android Panel With Divider Arranged Vertically Component',
        subText: '(Google Pixel emulator)',
      },
    ],
  },
];

const NativePanelsPage = ({ ...rest }) => (
  <DocsPageBuilder
    title="Panels"
    components={components}
    readme={readme}
    showMenu
    {...rest}
  />
);

export default NativePanelsPage;
