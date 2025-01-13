from flask import Flask,jsonify
from flask_cors import CORS
app = Flask(__name__)
cors = CORS(app, origins='*')
import graph
import networkx as nx

@app.route('/get_data', methods=['GET'])
def get_data():
    graph_info = nx.node_link_data(graph.G)
    return jsonify(graph_info)

if __name__ == '__main__':
    app.run(debug=True, port=8080)
