import { ExtendedFeature, scaleOrdinal, select } from 'd3';
import React, {useState, useEffect, useRef} from 'react';
import styled from 'styled-components';
import createScatterPlot, {Datum as ScatterPlotDatum} from './dataViz/scatterPlot';
import createBarChart, {
  Datum as BarChartDatum,
  LabelPlacement,
} from './dataViz/barChart';
import createClusterBarChart, {Datum as ClusterBarChartDatum} from './dataViz/clusterBarChart';
import createRadarChart, {
  Datum as RadarChartDatum,
  RadarChartOptions,
  RadarChartConfig,
} from './dataViz/radarChart';
import createGeoMap, {GeoJsonCustomProperties} from './dataViz/geoMap';
import creatLineChart, {
  Datum as LineChartDatum,
  Coords,
  LabelAnchor,
  LabelPosition,
  AnimationDirection,
} from './dataViz/lineChart';
import createTreeMap, {RootDatum, LeafDatum} from './dataViz/treeMap';
import createDifferenceTreeMap from './dataViz/differenceTreeMap';
import createStackChart, {Datum as StackChartDatum, StackChartConfig} from './dataViz/stackChart';
import createClusterChart, {Datum as ClusterChartDatum} from './dataViz/clusterChart';
import createBoxAndWhiskersChart, {Datum as BoxAndWhiskersChartDatum} from './dataViz/boxAndWhiskers';
import {darken} from 'polished';
import downloadImage, { FileFormat } from './dataViz/downloadImage';
import { CSVLink } from 'react-csv';
import DownloadSVGURL from './dataViz/assets/download.svg';
import DataSVGURL from './dataViz/assets/data.svg';
import debounce from 'lodash/debounce';
import {
  baseColor,
  secondaryFont,
  tertiaryColor,
  defaultPaletteColors,
  defaultDivergentColors,
  defaultCoolChloropleth,
  defaultHotChloropleth,
  formatNumber,
  adaptLabelFontSize,
} from './dataViz/Utils';
import ColorScaleLegend from './dataViz/ColorScaleLegend';
import HorizontalLegend from './dataViz/HorizontalLegend';
import HowToReadDots from './dataViz/HowToReadDots';
import Legend from './dataViz/Legend';

const Root = styled.div`
  width: 100%;
  margin: auto;
`;

const SizingElm = styled.div`
  height: 450px;
  width: 100%;

  svg {
    width: 100%;
    height: 100%;
  }
`;

const Tooltip = styled.div`
  position: absolute;
  text-align: left;
  display: none;
  padding: 8px 12px;
  background: #fff;
  border-radius: 4px;
  color: #333;
  pointer-events: none;
  box-shadow: 0px 0px 3px -1px #b5b5b5;
  border: solid 1px gray;
  max-width: 300px;
  transform: translateY(-100%);
  z-index: 1000;
`;

const DownloadButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const downloadButtonStyles = `
  background-color: #ecf0f2;
  font-family: ${secondaryFont};
  padding: 0.5rem 0.75rem;
  font-size: 0.6875rem;
  color: ${baseColor};
  display: flex;
  align-items: center;
  margin: 0;

  &:hover {
    background-color: ${darken(0.04, '#ecf0f2')};
  }
`;

const DownloadImageButton = styled.button`
  ${downloadButtonStyles};
`;
const DownloadDataButton = styled(CSVLink)`
  ${downloadButtonStyles};
  text-decoration: none;
`;

const SvgIcon = styled.img`
  width: 0.9rem;
  margin-right: 0.3rem;
`;

const ErrorMessage = styled.p`
  width: 100%;
  min-height: 400px;
  background-color: ${tertiaryColor};
  padding: 1rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Caption = styled.p`
  text-align: center;
  font-style: italic;
  font-size: 0.8rem;
`;

export enum VizType {
  ScatterPlot = 'ScatterPlot',
  BarChart = 'BarChart',
  ClusterBarChart = 'ClusterBarChart',
  RadarChart = 'RadarChart',
  GeoMap = 'GeoMap',
  LineChart = 'LineChart',
  TreeMap = 'TreeMap',
  DifferenceTreeMap = 'DifferenceTreeMap',
  StackChart = 'StackChart',
  ClusterChart = 'ClusterChart',
  BoxAndWhiskersChart = 'BoxAndWhiskersChart',
  Error = 'Error',
}

interface BaseProps {
  id: string;
  vizType: VizType;
  jsonToDownload?: object[];
  enablePNGDownload?: boolean;
  enableSVGDownload?: boolean;
  triggerPNGDownload?: (success: boolean) => void;
  triggerSVGDownload?: (success: boolean) => void;
  chartTitle?: string;
  chartCaption?: string;
  rootStyles?: React.CSSProperties;
  height?: number | string;
  labelFont?: string;
  triggerGoogleAnalyticsEvent?: (category: string, action: string, label?: string, value?: number) => void;
}

type Props = BaseProps & (
  {
    vizType: VizType.Error;
    message: string;
  } | {
    vizType: VizType.ScatterPlot;
    data: ScatterPlotDatum[];
    axisLabels?: {x?: string, y?: string};
    axisMinMax?: {
      minX?: number,
      maxX?: number,
      minY?: number,
      maxY?: number,
    };
    showAverageLines?: boolean;
    averageLineText?: {x?: string, y?: string};
    averageLineValue?: {x?: number, y?: number};
    quadrantLabels?: {I?: string, II?: string, III?: string, IV?: string};
  } |
  {
    vizType: VizType.BarChart;
    data: BarChartDatum[][];
    axisLabels?: {left?: string, bottom?: string};
      axisMinMax?: {
      minY?: number,
      maxY?: number,
    };
    hideAxis?: {
      left?: boolean;
      bottom?: boolean;
    }
    averageLines?: {
      value: number,
      label?: string;
      labelPlacement?: LabelPlacement;
      strokeWidth?: number;
      strokeDasharray?: number;
      strokeColor?: string;
    }[]
  } |
  {
    vizType: VizType.ClusterBarChart;
    data: ClusterBarChartDatum[];
    axisLabels?: {left?: string, bottom?: string};
    axisMinMax?: {
      minY?: number,
      maxY?: number,
    };
    formatAxis?: {
      y?: (n: number) => string;
    };
    animateAxis?: {
      animationDuration: number,
      startMinY: number,
      startMaxY: number,
    };
    tickCount?: {
      x?: number;
      y?: number;
    };
    animateBars?: number;
  } |
  {
    vizType: VizType.RadarChart;
    data: RadarChartDatum[][];
    color: {start: string, end: string};
    maxValue: number;
  } |
  {
    vizType: VizType.GeoMap;
    data: ExtendedFeature<any, GeoJsonCustomProperties>;
    minColor: string;
    maxColor: string;
    voidColor?: string;
  }|
  {
    vizType: VizType.LineChart;
    data: LineChartDatum[];
    axisLabels?: {left?: string, bottom?: string};
    axisMinMax?: {
      minX?: number,
      maxX?: number,
      minY?: number,
      maxY?: number,
    };
    showGridLines?: {
      xAxis?: boolean;
      yAxis?: boolean;
    }
    formatAxis?: {
      x?: (n: number) => string;
      y?: (n: number) => string;
    }
    tickCount?: {
      x?: number;
      y?: number;
    }
    animateAxis?: {
      animationDuration: number,
      startMinX: number,
      startMaxX: number,
      startMinY: number,
      startMaxY: number,
    };
  } | {
    vizType: VizType.TreeMap;
    data: RootDatum;
    animateOn?: boolean;
  } | {
    vizType: VizType.DifferenceTreeMap;
    data: [RootDatum, RootDatum];
    animateOn?: boolean;
    formatValue?: (value: number) => string;
  } | {
    vizType: VizType.StackChart;
    config: StackChartConfig;
    data: StackChartDatum[];
    enableBrushZoom?: boolean;
  } | {
    vizType: VizType.ClusterChart;
    data: ClusterChartDatum[];
    hideLabels?: boolean;
    circleSpacing?: number;
    max?: number;
  }| {
    vizType: VizType.BoxAndWhiskersChart;
    data: BoxAndWhiskersChartDatum[];
  }
);

export const DataViz = (props: Props) => {
  const {
    id, enablePNGDownload, enableSVGDownload, jsonToDownload, rootStyles,
    triggerGoogleAnalyticsEvent, triggerPNGDownload, triggerSVGDownload,
  } = props;
  const sizingNodeRef = useRef<HTMLDivElement | null>(null);
  const svgNodeRef = useRef<any>(null);
  const tooltipNodeRef = useRef<any>(null);

  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const updateWindowWidth = debounce(() => {
      setWindowWidth(window.innerWidth);
    }, 500);
    window.addEventListener('resize', updateWindowWidth);
    return () => {
      window.removeEventListener('resize', updateWindowWidth);
    };
  }, []);


  useEffect(() => {
    let svgNode: HTMLDivElement | null = null;
    if (svgNodeRef && svgNodeRef.current && sizingNodeRef && sizingNodeRef.current &&
        tooltipNodeRef && tooltipNodeRef.current) {
      const sizingNode = sizingNodeRef.current;
      svgNode = svgNodeRef.current;
      const svg = select(svgNode);
      const tooltip = select(tooltipNodeRef.current);
      if (props.vizType === VizType.ScatterPlot) {
        createScatterPlot({
          svg, tooltip, data: props.data, labelFont: props.labelFont, size: {
            width: sizingNode.clientWidth, height: sizingNode.clientHeight,
          },
          axisLabels: props.axisLabels,
          axisMinMax: props.axisMinMax,
          showAverageLines: props.showAverageLines,
          averageLineValue: props.averageLineValue,
          averageLineText: props.averageLineText,
          quadrantLabels: props.quadrantLabels,
        });
      } else if (props.vizType === VizType.BarChart) {
        createBarChart({
          svg, tooltip, data: props.data, labelFont: props.labelFont, size: {
            width: sizingNode.clientWidth, height: sizingNode.clientHeight,
          },
          axisLabels: props.axisLabels,
          axisMinMax: props.axisMinMax,
          hideAxis: props.hideAxis,
          averageLines: props.averageLines,
        });
      } else if (props.vizType === VizType.RadarChart) {
        let width: number;
        let height: number;
        if (sizingNode.clientWidth > sizingNode.clientHeight) {
          width = sizingNode.clientHeight;
          height = sizingNode.clientHeight;
        } else {
          width = sizingNode.clientWidth;
          height = sizingNode.clientWidth;
        }
        createRadarChart({
          svg, tooltip, data: props.data, labelFont: props.labelFont, options: {
            width, height,
            color: scaleOrdinal().range([props.color.start, props.color.end]),
            maxValue: props.maxValue,
          },
        });
      } else if (props.vizType === VizType.GeoMap) {
        createGeoMap({
          svg, tooltip, data: props.data, size: {
            width: sizingNode.clientWidth, height: sizingNode.clientHeight,
          }, minColor: props.minColor, maxColor: props.maxColor, voidColor: props.voidColor,
        });
      } else if (props.vizType === VizType.ClusterBarChart) {
        createClusterBarChart({
          svg, tooltip, data: props.data, labelFont: props.labelFont, size: {
            width: sizingNode.clientWidth, height: sizingNode.clientHeight,
          },
          axisLabels: props.axisLabels,
          axisMinMax: props.axisMinMax,
          formatAxis: props.formatAxis,
          tickCount: props.tickCount,
          animateAxis: props.animateAxis,
          animateBars: props.animateBars,
        });
      } else if (props.vizType === VizType.LineChart) {
        creatLineChart({
          svg, tooltip, data: props.data, labelFont: props.labelFont, size: {
            width: sizingNode.clientWidth, height: sizingNode.clientHeight,
          },
          axisLabels: props.axisLabels,
          axisMinMax: props.axisMinMax,
          showGridLines: props.showGridLines,
          formatAxis: props.formatAxis,
          tickCount: props.tickCount,
          animateAxis: props.animateAxis,
        });
      } else if (props.vizType === VizType.TreeMap) {
        createTreeMap({
          svg, tooltip, data: props.data, labelFont: props.labelFont, size: {
            width: sizingNode.clientWidth, height: sizingNode.clientHeight,
          },
          animateOn: props.animateOn,
        });
      } else if (props.vizType === VizType.DifferenceTreeMap) {
        createDifferenceTreeMap({
          svg, tooltip, data: props.data, labelFont: props.labelFont, size: {
            width: sizingNode.clientWidth, height: sizingNode.clientHeight,
          },
          animateOn: props.animateOn,
          formatValue: props.formatValue,
        });
      } else if (props.vizType === VizType.StackChart) {
        createStackChart({
          svg, tooltip, data: props.data, labelFont: props.labelFont, config: props.config, size: {
            width: sizingNode.clientWidth, height: sizingNode.clientHeight,
          },
          enableBrushZoom: props.enableBrushZoom,
        });
      } else if (props.vizType === VizType.ClusterChart) {
        createClusterChart({
          svg, tooltip, data: props.data, labelFont: props.labelFont, size: {
            width: sizingNode.clientWidth, height: sizingNode.clientHeight,
          },
          hideLabels: props.hideLabels,
          circleSpacing: props.circleSpacing,
          max: props.max,
        });
      } else if (props.vizType === VizType.BoxAndWhiskersChart) {
        createBoxAndWhiskersChart({
          svg, tooltip, data: props.data, labelFont: props.labelFont, size: {
            width: sizingNode.clientWidth, height: sizingNode.clientHeight,
          },
        });
      }
    }
    return () => {
      if (svgNode) {
        svgNode.innerHTML = '';
      }
    };
  }, [svgNodeRef, sizingNodeRef, windowWidth, props]);

  const handleDownloadImage = (fileFormat: FileFormat) => {
    const svgNode = svgNodeRef ? svgNodeRef.current : null;
    const sizingNode = sizingNodeRef ? sizingNodeRef.current : null;
    const highResMultiplier = 3;
    let width: number | undefined;
    let height: number | undefined;
    if (props.vizType === VizType.RadarChart && sizingNode) {
      if (sizingNode.clientWidth > sizingNode.clientHeight) {
        width = sizingNode.clientHeight * highResMultiplier;
        height = sizingNode.clientHeight * highResMultiplier;
      } else {
        width = sizingNode.clientWidth * highResMultiplier;
        height = sizingNode.clientWidth * highResMultiplier;
      }
    } else {
      width = sizingNode && sizingNode.clientWidth ? sizingNode.clientWidth * highResMultiplier : undefined;
      height = sizingNode && sizingNode.clientHeight ? sizingNode.clientHeight * highResMultiplier : undefined;
    }
    const title = props.chartTitle ? props.chartTitle : 'chart';
    downloadImage({svg: svgNode, width, height, title, fileFormat});
    if (triggerGoogleAnalyticsEvent) {
      triggerGoogleAnalyticsEvent(id, 'download-' + fileFormat, title);
    }
  };
  const downloadImageIcon = typeof (DownloadSVGURL) === 'object' ? (DownloadSVGURL as any).default : DownloadSVGURL;
  const downloadPNGButton = enablePNGDownload !== true ? null : (
    <DownloadImageButton
      onClick={() => handleDownloadImage(FileFormat.PNG)}
    >
      <SvgIcon src={downloadImageIcon} alt={'Download PNG'} />
      Download PNG
    </DownloadImageButton>
  );
  const downloadSVGButton = enableSVGDownload !== true ? null : (
    <DownloadImageButton
      onClick={() => handleDownloadImage(FileFormat.SVG)}
    >
      <SvgIcon src={downloadImageIcon} alt={'Download SVG'} />
      Download SVG
    </DownloadImageButton>
  );

  if (triggerPNGDownload) {
    handleDownloadImage(FileFormat.PNG);
    triggerPNGDownload(true);
  }
  if (triggerSVGDownload) {
    handleDownloadImage(FileFormat.SVG);
    triggerSVGDownload(true);
  }

  let downloadDataButton: React.ReactElement<any> | null;
  if (jsonToDownload !== undefined) {
    const filename = props.chartTitle ? props.chartTitle + '.csv' : 'data.csv';
    const onClick = () => {
      if (triggerGoogleAnalyticsEvent) {
        triggerGoogleAnalyticsEvent(id, 'download-csv', props.chartTitle);
      }
    };
    const downloadDataIcon = typeof (DataSVGURL) === 'object' ? (DataSVGURL as any).default : DataSVGURL;
    downloadDataButton = (
      <DownloadDataButton
        data={jsonToDownload}
        filename={filename}
        onClick={onClick}
      >
        <SvgIcon src={downloadDataIcon} alt={'Download Data'} />
        Download Data
      </DownloadDataButton>
    );
  } else {
    downloadDataButton = null;
  }

  const downloadButtons = downloadPNGButton !== null || downloadSVGButton !== null || downloadDataButton !== null ? (
    <DownloadButtonsContainer style={{marginTop: props.vizType !== VizType.RadarChart ? '1rem' : undefined}}>
      {downloadPNGButton}
      {downloadSVGButton}
      {downloadDataButton}
    </DownloadButtonsContainer>
  ) : null;

  if (props.vizType === VizType.Error) {
    return (
      <Root>
        <ErrorMessage>
          {props.message}
        </ErrorMessage>
      </Root>
    );
  } else {
    const caption = props.chartCaption ? (
      <Caption>{props.chartCaption}</Caption>
    ) : null;
    return (
      <Root style={rootStyles}>
        <SizingElm ref={sizingNodeRef} style={{height: props.height}}>
          <svg ref={svgNodeRef} key={id + windowWidth + 'svg'} className={'react-fast-charts-root-svg'} />
        </SizingElm>
        {caption}
        {downloadButtons}
        <Tooltip ref={tooltipNodeRef} key={id + windowWidth + 'tooltip'} />
      </Root>
    );
  }
};
export {
  ScatterPlotDatum,
  BarChartDatum,
  ClusterBarChartDatum,
  RadarChartDatum,
  LineChartDatum,
  StackChartDatum,
  ClusterChartDatum,
  BoxAndWhiskersChartDatum,
  LabelPlacement,
  FileFormat,
  GeoJsonCustomProperties,
  Coords,
  LabelAnchor,
  LabelPosition,
  AnimationDirection,
  RadarChartOptions,
  RadarChartConfig,
  StackChartConfig,
  RootDatum,
  LeafDatum,
  defaultPaletteColors,
  defaultDivergentColors,
  defaultCoolChloropleth,
  defaultHotChloropleth,
  formatNumber,
  adaptLabelFontSize,
  ColorScaleLegend,
  HorizontalLegend,
  HowToReadDots,
  Legend,
}
export default DataViz;

