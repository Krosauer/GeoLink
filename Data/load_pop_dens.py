with open ('population_densities.csv', 'r') as fp:
    lines = fp.readlines()
    densities = {}
    for line in lines:
        line = line.strip().split(',')
        densities[line[0].lower()] = float(line[1])
fp.close()

import pandas as pd
df = pd.read_csv('countries.csv')
df['population_density'] = df['name'].str.lower().map(densities)
df.to_csv('countries.csv', index=False)
