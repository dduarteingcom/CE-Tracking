import Embedding from '/src/graph/embedding/embedding.mjs';

var c = document.getElementById("newCanvas");
var ctx = c.getContext("2d");

let g = new Graph();
const v = g.createVertex('v', {weight: 1.5});
const u = g.createVertex('u', {weight: 1.5});

const e = g.createEdge(u, v, {weight: 0.4, label: "back"});

let embedding = Embedding.forGraph(g, {
    width: 640,
    height: 480,
    vertexCoordinates: {
        [v]: new Point2D(100, 100),
        [u]: new Point2D(400, 300)
    },
    edgeArcControlDistances: {
        [e]: -60
    }
});