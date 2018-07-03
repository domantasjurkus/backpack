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
import readme from 'react-native-bpk-component-carousel-indicator/readme.md';

import iosScreenshotDefault from 'react-native-bpk-component-carousel-indicator/screenshots/ios/default.png';
import androidScreenshotDefault from 'react-native-bpk-component-carousel-indicator/screenshots/android/default.png';

import iosScreenshotWithOverlay from 'react-native-bpk-component-carousel-indicator/screenshots/ios/with-overlay.png';
import androidScreenshotWithOverlay from 'react-native-bpk-component-carousel-indicator/screenshots/android/with-overlay.png';
import { spacingSm } from 'bpk-tokens/tokens/base.react.native';

import Paragraph from './../../components/Paragraph';
import DocsPageBuilder from './../../components/DocsPageBuilder';

const components = [
  {
    id: 'default',
    title: 'Default',
    blurb:
      'Pagination dots can display an unlimited number of pages, animating the transition when the selected page changes.',
    screenshots: [
      {
        title: 'iOS',
        width: spacingSm,
        height: spacingSm,
        src: `/${iosScreenshotDefault}`,
        altText: 'iOS Pagination Dots Component',
        subText: '(iPhone 8 simulator)',
      },
      {
        title: 'Android',
        width: spacingSm,
        height: spacingSm,
        src: `/${androidScreenshotDefault}`,
        altText: 'Android Pagination Dots Component',
        subText: '(Google Pixel emulator)',
      },
    ],
  },
  {
    id: 'with-overlay',
    title: 'As an Overlay',
    blurb:
      'Pagination dots are well-suited to be used as an overlay over changing content.',
    screenshots: [
      {
        title: 'iOS',
        width: spacingSm,
        height: spacingSm,
        src: `/${iosScreenshotWithOverlay}`,
        altText: 'iOS Pagination Dots Component',
        subText: '(iPhone 8 simulator)',
      },
      {
        title: 'Android',
        width: spacingSm,
        height: spacingSm,
        src: `/${androidScreenshotWithOverlay}`,
        altText: 'Android Pagination Dots Component',
        subText: '(Google Pixel emulator)',
      },
    ],
  },
];

const NativePaginationDotsPage = () => (
  <DocsPageBuilder
    title="Pagination Dots"
    blurb={[
      <Paragraph>
        Pagination dots are used to indicate when content can be swiped, for
        example in an image carousel.
      </Paragraph>,
    ]}
    components={components}
    readme={readme}
    showMenu
  />
);

export default NativePaginationDotsPage;
