import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import cloud from 'd3-cloud';
import { Dropdown } from 'Common/Components/Dropdown';
import { ChevronDown } from 'lucide-react';
import { InteractionChart } from './Charts';
import { Link } from 'react-router-dom';

interface Word {
  text: string;
  size: number;
}

const WordCloudComponent: React.FC = () => {
  const d3Container = useRef<SVGSVGElement | null>(null);

  const draw = (words: cloud.Word[]) => {
    if (d3Container.current) {
      const svg = d3.select(d3Container.current).select('g');
      svg.selectAll('text')
        .data(words)
        .enter().append('text')
        .style('font-size', (d: any) => `${d.size}px`)
        .style('fill', '#69b3a2')
        .attr('text-anchor', 'middle')
        .style('font-family', 'Impact')
        .attr('transform', (d: any) => `translate(${d.x},${d.y})rotate(${d.rotate})`)
        .text((d: any) => d.text);
    }
  };

  useEffect(() => {
    const myWords: Word[] = [
      { text: 'Running', size: 10 },
      { text: 'Surfing', size: 20 },
      { text: 'Climbing', size: 50 },
      { text: 'Kiting', size: 30 },
      { text: 'Sailing', size: 20 },
      { text: 'Snowboarding', size: 60 }
    ];

    const margin = { top: 10, right: 10, bottom: 10, left: 10 };
    const width = 300 - margin.left - margin.right; // Adjusted width
    const height = 200 - margin.top - margin.bottom; // Adjusted height

    if (d3Container.current) {
      const svg = d3.select(d3Container.current)
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', `translate(${width / 2},${height / 2})`); // Centering the SVG

      const layout = cloud<Word>()
        .size([width, height])
        .words(myWords)
        .padding(5)
        .rotate(() => (Math.random() > 0.5 ? 90 : 0))
        .fontSize(d => d.size)
        .on('end', draw);

      layout.start();
    }
  }, []);

  return (
    <svg ref={d3Container}></svg>
  );
};

const WordCloud: React.FC = () => {
  return (
    <React.Fragment>
      <div className="order-7 col-span-6 2xl:order-1 card 2xl:col-span-7">
        <div className="card-body">
          <div className="flex items-center gap-2">
            <h6 className="mb-3 text-15 grow">WordCloud</h6>
            {/* Add additional controls or elements here if needed */}
          </div>
          <div className="overflow-hidden"> {/* Ensures the card doesn't overflow */}
            <WordCloudComponent />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default WordCloud;