//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
const findNeighbors = (currentNode, grid) => {

    let neighbours = [];
    if (grid[x-1] && grid[x-1][y]) neighbours.push(grid[x-1][y])
    if (grid[x + 1] && grid[x+1][y]) neighbours.push(grid[x+1][y])
    if (grid[x] && grid[x][y -1]) neighbours.push(grid[x][y - 1])
    if (grid[x] && grid[x][y + 1]) neighbours.push(grid[x][y + 1])
    console.log(neighbours)
    return neighbours
}
let findPath = ({gridSize, start, goal, noFlyZones}) => {
    const grid = new Array(gridSize).fill(new Array(gridSize).fill());
    grid = grid.map((row, x) => row.map((_, y) => [x,y]));

    let queue = [];
    queue.push(start);

    let visitedNodes = {}
    visitedNodes[start] = true;

    let paths = {}
    paths[start] = [start];

    while(queue.length > 0) {
        const currentNode = queue.shift()
        const neighbours = findNeighbors(currentNode, grid)

        neighbours.forEach(neighbours => {
            if(!visitedNodes[neighbour] && !noFlyZones.sone(([noFlyZoneX, noFlyZoneY]) => {
                return noFlyZoneX === neighbour[0] && noFlyZoneY === neighbour[0]
            })
            ) {
                paths[neighbour] = [...paths[currentNode], neighbour]
                visitedNodes[neighbour] = true;
                queue.push(neighbour);
            }
        })

    }

    console.log((paths[goal]))

}


// findPath({
//     gridSize:3,
//     start: [0, 1],
//     goal: [2, 2]
// })