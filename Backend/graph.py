import pandas as pd
import networkx as nx
import matplotlib.pyplot as plt

nodes_df = pd.read_csv('../Data/countries.csv')
edges_df = pd.read_csv('../Data/edges.csv')

G = nx.Graph()
for _, row in nodes_df.iterrows():
    G.add_node(row['name'], cca3=row['cca3'], un_member=row['un_member'], 
               currencies=row['currencies'], languages=row['languages'], 
               landlocked=row['landlocked'], area=row['area'], population=row['population'], 
               timezones=row['timezones'], flag_colors=row['flag_colors'],
               population_density=row['population_density'], gdp_per_capita=row['GDP Per Capita'],
               exports=row['exports'], imports=row['imports'])

for _, row in edges_df.iterrows():
   G.add_edge(row['source'], row['target'], attribute=row['type'])


for node, data in G.nodes(data=True):
    print(f"Node: {node}, Attributes: {data}")
