let level = 0;
let width = window.innerWidth;
let height = window.innerHeight;

const svg = d3.select('body')
  .append('svg')
  .attr('width', width)
  .attr('height', height);
let circles = svg.selectAll('circle')
  .data(d3.range(20))
  .enter()
  .append('circle')
    .attr('r', 50);

const update = () => {
  circles.transition()
    .duration(2000)
    .attr('cx', () => Math.random() * width)
    .attr('cy', () => Math.random() * height);
  level++;
};

update();
setInterval(update, 2000);

circles.on('mouseover', () => {
  alert('Nice! You made it to level ' + level);
  level = 0;
})
