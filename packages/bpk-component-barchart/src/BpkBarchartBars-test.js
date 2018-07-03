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
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { scaleLinear, scaleBand } from 'd3-scale';
import { spacingSm } from 'bpk-tokens/tokens/base.es6';
import BpkBarchartBars from './BpkBarchartBars';
import BpkBarchartBar from './BpkBarchartBar';
import data from '../data.json';

const margin = {
  top: spacingSm,
  right: spacingSm,
  bottom: spacingSm,
  left: spacingSm,
};
const { prices } = data;
const size = 200;
const yScale = scaleLinear()
  .domain([0, 500])
  .range([0, size]);
const xScale = scaleBand()
  .domain(prices.map(d => d.month))
  .range([0, size]);

describe('BpkBarchartBars', () => {
  it('should render correctly', () => {
    const tree = shallow(
      <BpkBarchartBars
        margin={margin}
        xScale={xScale}
        yScale={yScale}
        xScaleDataKey="month"
        yScaleDataKey="price"
        maxYValue={50}
        width={size}
        height={size}
        data={prices}
        getBarLabel={(point, xScaleDataKey, yScaleDataKey) =>
          `${point[xScaleDataKey]} - ${point[yScaleDataKey]}`
        }
        BarComponent={BpkBarchartBar}
      />,
    );
    expect(toJson(tree)).toMatchSnapshot();
  });

  it('should render with "rounded" prop set to "false"', () => {
    const tree = shallow(
      <BpkBarchartBars
        margin={margin}
        xScale={xScale}
        yScale={yScale}
        xScaleDataKey="month"
        yScaleDataKey="price"
        maxYValue={50}
        width={size}
        height={size}
        data={prices}
        getBarLabel={(point, xScaleDataKey, yScaleDataKey) =>
          `${point[xScaleDataKey]} - ${point[yScaleDataKey]}`
        }
        BarComponent={BpkBarchartBar}
        rounded={false}
      />,
    );
    expect(toJson(tree)).toMatchSnapshot();
  });

  it('should render correctly with "padding" prop', () => {
    const tree = shallow(
      <BpkBarchartBars
        margin={margin}
        xScale={xScale}
        yScale={yScale}
        xScaleDataKey="month"
        yScaleDataKey="price"
        maxYValue={50}
        width={size}
        height={size}
        data={prices}
        getBarLabel={(point, xScaleDataKey, yScaleDataKey) =>
          `${point[xScaleDataKey]} - ${point[yScaleDataKey]}`
        }
        BarComponent={BpkBarchartBar}
        padding={0}
      />,
    );
    expect(toJson(tree)).toMatchSnapshot();
  });

  it('should render correctly with "onBarClick" prop', () => {
    const tree = shallow(
      <BpkBarchartBars
        margin={margin}
        xScale={xScale}
        yScale={yScale}
        xScaleDataKey="month"
        yScaleDataKey="price"
        maxYValue={50}
        width={size}
        height={size}
        data={prices}
        getBarLabel={(point, xScaleDataKey, yScaleDataKey) =>
          `${point[xScaleDataKey]} - ${point[yScaleDataKey]}`
        }
        BarComponent={BpkBarchartBar}
        padding={0}
        onBarClick={() => null}
      />,
    );
    expect(toJson(tree)).toMatchSnapshot();
  });

  it('should render correctly with "onBarHover" prop', () => {
    const tree = shallow(
      <BpkBarchartBars
        margin={margin}
        xScale={xScale}
        yScale={yScale}
        xScaleDataKey="month"
        yScaleDataKey="price"
        maxYValue={50}
        width={size}
        height={size}
        data={prices}
        getBarLabel={(point, xScaleDataKey, yScaleDataKey) =>
          `${point[xScaleDataKey]} - ${point[yScaleDataKey]}`
        }
        BarComponent={BpkBarchartBar}
        padding={0}
        onBarHover={() => null}
      />,
    );
    expect(toJson(tree)).toMatchSnapshot();
  });

  it('should render correctly with "onBarFocus" prop', () => {
    const tree = shallow(
      <BpkBarchartBars
        margin={margin}
        xScale={xScale}
        yScale={yScale}
        xScaleDataKey="month"
        yScaleDataKey="price"
        maxYValue={50}
        width={size}
        height={size}
        data={prices}
        getBarLabel={(point, xScaleDataKey, yScaleDataKey) =>
          `${point[xScaleDataKey]} - ${point[yScaleDataKey]}`
        }
        BarComponent={BpkBarchartBar}
        padding={0}
        onBarFocus={() => null}
      />,
    );
    expect(toJson(tree)).toMatchSnapshot();
  });

  it('should render correctly with "onBarTouch" prop', () => {
    const tree = shallow(
      <BpkBarchartBars
        margin={margin}
        xScale={xScale}
        yScale={yScale}
        xScaleDataKey="month"
        yScaleDataKey="price"
        maxYValue={50}
        width={size}
        height={size}
        data={prices}
        getBarLabel={(point, xScaleDataKey, yScaleDataKey) =>
          `${point[xScaleDataKey]} - ${point[yScaleDataKey]}`
        }
        BarComponent={BpkBarchartBar}
        padding={0}
        onBarTouch={() => null}
      />,
    );
    expect(toJson(tree)).toMatchSnapshot();
  });

  it('should render correctly with "getBarSelection" prop', () => {
    const tree = shallow(
      <BpkBarchartBars
        margin={margin}
        xScale={xScale}
        yScale={yScale}
        xScaleDataKey="month"
        yScaleDataKey="price"
        maxYValue={50}
        width={size}
        height={size}
        data={prices}
        getBarLabel={(point, xScaleDataKey, yScaleDataKey) =>
          `${point[xScaleDataKey]} - ${point[yScaleDataKey]}`
        }
        BarComponent={BpkBarchartBar}
        padding={0}
        getBarSelection={point => point.month === 'Mar'}
      />,
    );
    expect(toJson(tree)).toMatchSnapshot();
  });
});
