with open ('GDPs.csv', 'r') as fp:
    lines = fp.readlines()
    gdps = {}
    for line in lines:
        line = line.strip().split(',')
        gdps[line[0].lower()] = float(line[1])
fp.close()

import pandas as pd
df = pd.read_csv('countries.csv')
df['GDP'] = df['name'].str.lower().map(gdps)
df.to_csv('countries.csv', index=False)
