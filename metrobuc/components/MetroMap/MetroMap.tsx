import * as d3 from 'd3';
import { useEffect } from 'react';

function MetroMap() {
    useEffect(() => {
        var zoom: any = d3.zoom().on("zoom", (e) => {d3.select("svg g").attr("transform", e.transform)});
        d3.select("svg").call(zoom);
        
        const data: any[] = [{id: 1, x: 15, y: 15}, {id: 2, x: 40, y: 40}];

        d3.select("svg g")
          .selectAll("circle")
          .data(data)
          .join("circle")
          .attr("cx", function (d) {
            return d.x;
          })
          .attr("cy", function (d) {
            return d.y;
          })
          .attr("r", 3)
          .attr("fill", "red");
    }, [])
    

    return (
        <div className="flex w-full h-full items-center justify-center">
            <svg width="600" height="400">
                <g></g>
            </svg>    
        </div>
    );
}

export default MetroMap;