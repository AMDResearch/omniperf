// ################################################################################
// # Copyright (c) 2020 ACE IoT Solutions LLC
// #
// # Permission is hereby granted, free of charge, to any person obtaining a copy
// # of this software and associated documentation files (the "Software"), to deal
// # in the Software without restriction, including without limitation the rights
// # to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// # copies of the Software, and to permit persons to whom the Software is
// # furnished to do so, subject to the following conditions:

// # The above copyright notice and this permission notice shall be included in all
// # copies or substantial portions of the Software.
// #
// # THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// # IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// # FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// # AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// # LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// # OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// # SOFTWARE.
// ################################################################################

import { SVGDefaults } from './types';

export const props_defaults: SVGDefaults = {
  svgNode: `<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  version="1.1"
  width="377px"
  viewBox="-0.5 -0.5 377 377"
  style="max-width:100%;max-height:377px;"
>
  <defs />
  <g>
    <ellipse
      cx="188"
      cy="188"
      rx="185"
      ry="185"
      fill="#6666ff"
      stroke="#ff6666"
      stroke-width="7"
      pointer-events="all"
    />
  </g>
</svg>;
`,
  initSource: '',
  eventSource: '',
  svgMappings: [
    {
      mappedName: 'barTwo',
      svgId: 'rect4526',
    },
    {
      mappedName: 'barThree',
      svgId: 'rect4528',
    },
  ],
};
