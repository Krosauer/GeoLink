import pandas as pd
import networkx as nx
import matplotlib.pyplot as plt

nodes_df = pd.read_csv('../Data/countries.csv')
edges_df = pd.read_csv('../Data/edges.csv')

G = nx.MultiGraph()
for _, row in nodes_df.iterrows():
    G.add_node(row['name'], cca3=row['cca3'], un_member=row['un_member'], 
               currencies=row['currencies'], languages=row['languages'], 
               landlocked=row['landlocked'], area=row['area'], population=row['population'], 
               timezones=row['timezones'], flag_colors=row['flag_colors'],
               population_density=row['population_density'], gdp_per_capita=row['GDP Per Capita'],
               exports=row['exports'], imports=row['imports'])

valid_nodes = set(G.nodes())
for index, row in edges_df.iterrows():
    country1 = row['source']
    country2 = row['target']
    if country1 in valid_nodes and country2 in valid_nodes:
        G.add_edge(country1, country2, connection_type=row['type'])

print(G.number_of_edges())
