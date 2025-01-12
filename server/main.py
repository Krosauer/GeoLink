from flask import Flask,jsonify
from flask_cors import CORS
import graph
import networkx as nx

app = Flask(__name__)
cors = CORS(app, origins='*')

@app.route('/api/graph', methods=['GET'])
def get_graph():
    graph_data = nx.node_link_data(graph.G)
    return jsonify(graph_data)

if __name__ == '__main__':
    app.run(debug=True, port=8080)
