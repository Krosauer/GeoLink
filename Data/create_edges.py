import pandas as pd
from itertools import combinations

df = pd.read_csv('countries.csv')
code_to_name = {}
for _, row in df.iterrows():
    code_to_name[row['cca3']] = row['name']  
all_names = []
for _, row in df.iterrows():
    all_names.append(row['name'])
def get_unique_attributes(df, column):
    unique_values = []
    for row in df[column]:
        if type(row) == str:
            values = row.split(';')
            for value in values:
                if value not in unique_values:
                    unique_values.append(value)
    return unique_values
languages = get_unique_attributes(df, 'languages')
currencies = get_unique_attributes(df, 'currencies')

def get_countries_with_attribute(df,attribute,value):
    countries = []
    for _, row in df.iterrows():
        attr_value = str(row[attribute]) if pd.notnull(row[attribute]) else ''
        if value in attr_value.split(';'):
            countries.append(row['name'])

    return countries
# function to create edges for only languages and currencies columns of main csv
def make_edges(column_name):
    edges = []
    unique_values = get_unique_attributes(df, column_name)
    for value in unique_values:
        countries = get_countries_with_attribute(df, column_name, value)
        if len(countries) > 1:
            for combination in combinations(countries, 2):
                edges.append((combination[0], combination[1], value))
    return edges

language_edges = make_edges('languages')
currency_edges = make_edges('currencies')

# code for landlocked countries

landlocked_countries = []
for _, row in df.iterrows():
    if str(row['landlocked']) == 'True':
        landlocked_countries.append(row['name'])

landlocked_edges = []
for combination in combinations(landlocked_countries, 2):
    landlocked_edges.append((combination[0], combination[1], 'landlocked'))

# code for bordering countires

bordering_edges = []
for _, row in df.iterrows():
    row_str = str(row['borders'])
    if row_str != 'nan':
        for border in row_str.split(';'):
            if border in code_to_name:
                border = code_to_name[border]
            if (row['name'], border, 'bordering') not in bordering_edges and (border, row['name'], 'bordering') not in bordering_edges:
                bordering_edges.append((row['name'], border, 'bordering'))

# Area of countries
area_dict = {}
for _, row in df.iterrows():
    area_dict[row['name']] = row['area']

def make_edges_from_range(data,seperation, connection):
    edges = []
    for key, value in data.items():
        for key2, value2 in data.items():
            if key != key2:
                if abs(value - value2) <= seperation:
                    if (key2, key, connection) not in edges:
                        edges.append((key, key2, connection))
    return edges

area_edges = make_edges_from_range(area_dict, 10000, 'area')

# Population of countries

population_dict = {}
for _, row in df.iterrows():
    population_dict[row['name']] = row['population']

population_edges = make_edges_from_range(population_dict, 1000000, 'population')

# Timezones of countries

timezone_edges = make_edges('timezones')

# Flag colors
flag_color_edges = []
for _, row in df.iterrows():
    colors = str(row['flag_colors']).split(';')
    for _, row2 in df.iterrows():
        if row['name'] != row2['name']:
            colors2 = str(row2['flag_colors']).split(';')
            if set(colors) == set(colors2):
                if (row['name'], row2['name'], 'flag_colors') not in flag_color_edges and (row2['name'], row['name'], 'flag_colors') not in flag_color_edges:
                    flag_color_edges.append((row['name'], row2['name'], 'flag_colors')) 

# Population density

density_dict = {}
for _, row in df.iterrows():
    density_dict[row['name']] = row['population_density']

density_edges = make_edges_from_range(density_dict,10, 'population_density')

# GDP Per Capita

gdp_dict = {}
for _, row in df.iterrows():
    gdp_dict[row['name']] = row['GDP Per Capita']

gdp_edges = make_edges_from_range(gdp_dict, 600, 'GDP Per Capita')

# Export Partners

export_edges = []
for _, row in df.iterrows():
    exports = str(row['exports']).split(';')
    for export in exports:
        if export in all_names:
            export_edges.append((row['name'], export, 'exports'))

# Import Partners

import_edges = []
for _, row in df.iterrows():
    imports = str(row['imports']).split(';')
    for import_ in imports:
        if import_ in all_names:
            import_edges.append((row['name'], import_, 'imports'))



# Combine all edges

all_edges = language_edges + currency_edges + landlocked_edges + bordering_edges + area_edges + population_edges + timezone_edges + flag_color_edges + density_edges + gdp_edges + export_edges + import_edges

# Write to csv


with open('edges.csv', 'w') as fp:
    fp.write('source,target,type\n')
    for edge in all_edges:
        fp.write(f'{edge[0]},{edge[1]},{edge[2]}\n')

fp.close()
