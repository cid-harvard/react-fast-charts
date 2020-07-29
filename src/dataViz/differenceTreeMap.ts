import * as d3 from 'd3';
import {RootDatum} from './treeMap';
import {lighten} from 'polished';
import {transformData} from './utils/differenceTreeMapUtils';

interface Dimensions {
  width: number;
  height: number;
}

interface Input {
  svg: d3.Selection<any, unknown, null, undefined>;
  tooltip: d3.Selection<any, unknown, null, undefined>;
  size: Dimensions;
  data: [RootDatum, RootDatum];
  labelFont?: string;
  animateOn?: boolean;
  formatValue?: (value: number) => string;
}

export default (input: Input) => {
  const { svg, size, tooltip, labelFont, animateOn, formatValue} = input;
  // const primaryData = input.data[0];
  // const secondaryData = input.data[1];

  const mergedData = transformData(input.data[0], input.data[1]);

  // let flattenedSecondaryData: LeafDatum[] = [];
  // secondaryData.children.forEach(datum => {
  //   if ((datum as RootDatum).children) {
  //     flattenedSecondaryData = [...flattenedSecondaryData, ...(datum as RootDatum).children as LeafDatum[]];
  //   }
  // })

  const margin = {top: 0, right: 0, bottom: 0, left: 0};
  const width = size.width - margin.left - margin.right;
  const height = size.height - margin.bottom - margin.top;

  const treemap = d3.treemap()
      .tile(d3.treemapResquarify)
      .size([width, height])
      .round(true)
      .paddingInner(1);

  const root = d3.hierarchy(mergedData)
      .eachBefore((d: any) => d.data.id = (d.parent ? d.parent.data.id + '.' : '') + d.data.id)
      .sum((d: any) => d.size)
      .sort((a, b) => {
        if (b.height - a.height) {
          return b.height - a.height;
        } else if (b.value && a.value) {
          return b.value - a.value;
        } else {
          return 0;
        }
       });

  treemap(root);
  // console.log({primaryData, flattenedSecondaryData, root})

  const cell = svg.selectAll('g')
    .data(root.leaves())
    .enter().append('g')
      .each((d: any) => {
        // const secondaryDatum = flattenedSecondaryData.find(datum => datum.label === d.data.label);
        // const secondaryValue = secondaryDatum && secondaryDatum.size ? secondaryDatum.size : 0;
        // const primaryValue = d.data.size;
        const larger = d.data.primaryValue > d.data.secondaryValue ? d.data.primaryValue : d.data.secondaryValue;
        const smaller = d.data.primaryValue === larger ? d.data.secondaryValue : d.data.primaryValue;
        const diff = Math.sqrt(smaller/larger);
        d.secondaryWidth = diff * (d.x1 - d.x0);
        d.secondaryHeight = diff * (d.y1 - d.y0);
        d.secondaryLeft = ((d.x1 - d.x0) - d.secondaryWidth) / 2;
        d.secondaryTop = ((d.y1 - d.y0) - d.secondaryHeight) / 2;
      })
      .attr('transform', (d: any) => 'translate(' + d.x0 + ',' + d.y0 + ')')
      .on('mousemove', (d: any) => {
          tooltip
            .style('position', 'fixed')
            .style('left', d3.event.clientX + 'px')
            .style('top', d3.event.clientY + 'px')
            .style('display', 'flex')
            .style('align-items', 'center')
            .html(() => {
              let primaryValue: string | number;
              let secondaryValue: string | number;
              if (d.data.primaryValue === undefined) {
                primaryValue = 'No data available';
              } else {
                primaryValue = formatValue ? formatValue(d.data.primaryValue) : d.data.primaryValue;
              }
              if (d.data.secondaryValue === undefined) {
                secondaryValue = 'No data available';
              } else {
                secondaryValue = formatValue ? formatValue(d.data.secondaryValue) : d.data.secondaryValue;
              }
              return `
              <div>
                <div style="
                  margin-bottom: 12px;
                  text-align: center;
                  text-transform: uppercase;
                ">
                  <small>${d.data.label}</small>
                </div>
                <div>
                  <div style="
                    display: inline-block;
                    background-color: ${d.parent.data.fill};
                    width: 12px;
                    height: 12px;
                    margin-right: 12px;
                    flex-shrink: 0;
                  "></div>
                  <strong>${input.data[0].label}:</strong> ${primaryValue}
                </div>
                <div>
                  <div style="
                    display: inline-block;
                    background-color: ${lighten(0.125, d.parent.data.fill)};
                    width: 12px;
                    height: 12px;
                    margin-right: 12px;
                    flex-shrink: 0;
                  "></div>
                  <strong>${input.data[1].label}:</strong> ${secondaryValue}
                </div>
              </div>
            `
            });
        })
      .on('mouseout', () => tooltip.style('display', 'none'));

  cell.append('rect')
      .attr('id', (d: any) => d.data.id)
      .attr('finalwidth', (d: any) => d.x1 - d.x0)
      .attr('finalheight', (d: any) => d.y1 - d.y0)
      .attr('width', (d: any) => d.x1 - d.x0)
      .attr('height', (d: any) => d.y1 - d.y0)
      .attr('fill', (d: any) => {
        const primaryValue = d.data.primaryValue ? d.data.primaryValue : 0;
        const secondaryValue = d.data.secondaryValue ? d.data.secondaryValue : 0;
        if (primaryValue > secondaryValue) {
          return d.parent.data.fill;
        }
        return lighten(0.125, d.parent.data.fill);
      });

  cell.append('rect')
      .attr('id', (d: any) => d.data.id + '-secondary')
      .attr('finalwidth', (d: any) => d.secondaryWidth)
      .attr('finalheight', (d: any) => d.secondaryHeight)
      .attr('width', (d: any) => d.secondaryWidth)
      .attr('height', (d: any) => d.secondaryHeight)
      .attr('transform', (d:any) => `translate(${d.secondaryLeft}, ${d.secondaryTop})`)
      .attr('fill', (d: any) => {
        const primaryValue = d.data.primaryValue ? d.data.primaryValue : 0;
        const secondaryValue = d.data.secondaryValue ? d.data.secondaryValue : 0;
        if (primaryValue > secondaryValue) {
          return lighten(0.125, d.parent.data.fill);
        }
        return d.parent.data.fill;
      });

  cell.append('clipPath')
      .attr('id', (d: any) => 'clip-' + d.data.id)
    .append('use')
      .attr('xlink:href', (d: any) => '#' + d.data.id);

  cell.append('text')
      .attr('clip-path', (d: any) => 'url(#clip-' + d.data.id + ')')
      .style('font-family', labelFont ? labelFont : "'Source Sans Pro',sans-serif")
      .attr('font-size', '0.7rem')
      .attr('x', 8)
      .attr('y', 16)
      .text((_d: any) => {
        return _d.data.label;
        // return '';
      })
      .call(wrap);

  if (animateOn) {
    cell
        .style('transform', (d: any) => `translate(${d.x0}px, ${d.y0}px) scale(0)`)
        .transition()
        .duration(500)
        .style('transform', (d: any) => `translate(${d.x0}px, ${d.y0}px) scale(1)`);
  }

  function wrap(text: any) {
    text.each(function() {
      // @ts-ignore
      const t = d3.select(this as any);
      // @ts-ignore
      const rect = this.parentElement.querySelector('rect');
      const rectWidth = rect.getAttribute('finalwidth');
      const rectHeight = rect.getAttribute('finalheight');
      const words = t.text().split(/\s+/).reverse();
      let word = words.pop();
      let line: string[] = [];
      let lineNumber = 0; //<-- 0!
      const lineHeight = 1.2; // ems
      const x = t.attr('x'); //<-- include the x!
      const y = t.attr('y');
      const dy = t.attr('dy') ? t.attr('dy') : 0; //<-- null check
      let tspan = t.text(null).append('tspan').attr('x', x).attr('y', y).attr('dy', dy + 'em');
      while (word !== undefined) {
        line.push(word);
        tspan.text(line.join(' '));
        const node = tspan.node();
        if (node && node.getComputedTextLength() > (rectWidth * 0.8)) {
          line.pop();
          tspan.text(line.join(' '));
          line = [word];
          // @ts-ignore
          tspan = t.append('tspan').attr('x', x).attr('y', y).attr('dy', ++lineNumber * lineHeight + dy + 'em').text(word);
        }
        word = words.pop();
      }
      if (t.node().getBBox().width > rectWidth || t.node().getBBox().height > rectHeight * 0.8) {
        t.attr('opacity', '0');
      }
    });
  }
};
